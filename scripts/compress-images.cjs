#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🗜️  Starting image compression...\n');

// Check if sips is available (macOS built-in tool)
function checkSips() {
  try {
    execSync('sips --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Find all image files
function findImageFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Get image dimensions using sips
function getImageDimensions(filePath) {
  try {
    const output = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { encoding: 'utf8' });
    const widthMatch = output.match(/pixelWidth: (\d+)/);
    const heightMatch = output.match(/pixelHeight: (\d+)/);
    
    if (widthMatch && heightMatch) {
      return {
        width: parseInt(widthMatch[1]),
        height: parseInt(heightMatch[1])
      };
    }
  } catch (error) {
    console.log(`⚠️  Could not get dimensions for ${path.basename(filePath)}`);
  }
  
  return { width: 0, height: 0 };
}

// Resize image if too large
function resizeImage(filePath, maxWidth = 1920) {
  try {
    const dimensions = getImageDimensions(filePath);
    
    if (dimensions.width > maxWidth) {
      const newHeight = Math.round((dimensions.height * maxWidth) / dimensions.width);
      
      console.log(`📏 Resizing ${path.basename(filePath)}: ${dimensions.width}x${dimensions.height} → ${maxWidth}x${newHeight}`);
      
      execSync(`sips -Z ${maxWidth} "${filePath}"`, { stdio: 'ignore' });
      return true;
    }
  } catch (error) {
    console.log(`⚠️  Could not resize ${path.basename(filePath)}: ${error.message}`);
  }
  
  return false;
}

// Compress JPEG images
function compressJPEG(filePath) {
  const originalSize = fs.statSync(filePath).size;
  
  try {
    // Use sips to compress JPEG with 85% quality
    execSync(`sips -s format jpeg -s formatOptions 85 "${filePath}" --out "${filePath}"`, { stdio: 'ignore' });
    
    const newSize = fs.statSync(filePath).size;
    const saved = originalSize - newSize;
    const percent = ((saved / originalSize) * 100).toFixed(1);
    
    console.log(`📸 ${path.basename(filePath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${percent}% saved)`);
    
    return { originalSize, newSize, saved };
  } catch (error) {
    console.log(`⚠️  Could not compress ${path.basename(filePath)}: ${error.message}`);
    return { originalSize, newSize: originalSize, saved: 0 };
  }
}

// Convert PNG to JPEG if it's a photo
function convertPNGToJPEG(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();
  
  // Only convert PNG files that are likely photos (large files)
  if (ext === '.png' && originalSize > 500 * 1024) {
    try {
      const jpegPath = filePath.replace(/\.png$/i, '.jpg');
      
      console.log(`🔄 Converting ${path.basename(filePath)} to JPEG...`);
      
      // Convert PNG to JPEG with 85% quality
      execSync(`sips -s format jpeg -s formatOptions 85 "${filePath}" --out "${jpegPath}"`, { stdio: 'ignore' });
      
      const newSize = fs.statSync(jpegPath).size;
      const saved = originalSize - newSize;
      const percent = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`📸 ${path.basename(filePath)} → ${path.basename(jpegPath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${percent}% saved)`);
      
      // Remove original PNG file
      fs.unlinkSync(filePath);
      
      return { originalSize, newSize, saved, converted: true };
    } catch (error) {
      console.log(`⚠️  Could not convert ${path.basename(filePath)}: ${error.message}`);
    }
  }
  
  return { originalSize, newSize: originalSize, saved: 0, converted: false };
}

// Compress PNG images (keep as PNG for logos, etc.)
function compressPNG(filePath) {
  const originalSize = fs.statSync(filePath).size;
  
  try {
    // For small PNG files (logos), just optimize
    if (originalSize < 500 * 1024) {
      execSync(`sips -s format png "${filePath}" --out "${filePath}"`, { stdio: 'ignore' });
    }
    
    const newSize = fs.statSync(filePath).size;
    const saved = originalSize - newSize;
    const percent = ((saved / originalSize) * 100).toFixed(1);
    
    console.log(`🖼️  ${path.basename(filePath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${percent}% saved)`);
    
    return { originalSize, newSize, saved };
  } catch (error) {
    console.log(`⚠️  Could not compress ${path.basename(filePath)}: ${error.message}`);
    return { originalSize, newSize: originalSize, saved: 0 };
  }
}

// Main compression function
function compressImages() {
  if (!checkSips()) {
    console.log('❌ sips tool not found. This script requires macOS.');
    console.log('💡 Alternative: Use online tools like https://squoosh.app/');
    return;
  }
  
  const imgDir = './public/img';
  const imageFiles = findImageFiles(imgDir);
  
  console.log(`Found ${imageFiles.length} images to compress\n`);
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let totalSaved = 0;
  let convertedCount = 0;
  let resizedCount = 0;
  
  for (const filePath of imageFiles) {
    const ext = path.extname(filePath).toLowerCase();
    const originalSize = fs.statSync(filePath).size;
    
    // Skip if file is already small
    if (originalSize < 100 * 1024) {
      console.log(`⏭️  Skipping ${path.basename(filePath)} (already small: ${formatBytes(originalSize)})`);
      continue;
    }
    
    // Resize large images first
    if (resizeImage(filePath)) {
      resizedCount++;
    }
    
    // Process based on file type
    let result;
    if (['.jpg', '.jpeg'].includes(ext)) {
      result = compressJPEG(filePath);
    } else if (ext === '.png') {
      // Try to convert large PNGs to JPEG first
      const convertResult = convertPNGToJPEG(filePath);
      if (convertResult.converted) {
        result = convertResult;
        convertedCount++;
      } else {
        result = compressPNG(filePath);
      }
    }
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      totalSaved += result.saved;
    }
  }
  
  console.log('\n📊 Compression Summary:');
  console.log(`Total original size: ${formatBytes(totalOriginalSize)}`);
  console.log(`Total new size: ${formatBytes(totalNewSize)}`);
  console.log(`Total saved: ${formatBytes(totalSaved)}`);
  console.log(`Compression ratio: ${((totalSaved / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log(`Images resized: ${resizedCount}`);
  console.log(`Images converted to JPEG: ${convertedCount}`);
  console.log('\n✅ Image compression complete!');
  
  if (totalSaved > 0) {
    console.log(`\n🎉 You saved ${formatBytes(totalSaved)} (${((totalSaved / totalOriginalSize) * 100).toFixed(1)}%)!`);
    console.log('Your website will load much faster now! 🚀');
  }
}

// Run the script
compressImages();
