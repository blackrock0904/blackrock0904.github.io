<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-title">404</h1>
        <h2 class="error-subtitle">Page Not Found</h2>
        <p class="error-description">
          Unfortunately, the requested page does not exist or has been moved.
        </p>
        <div class="error-actions">
          <NuxtLink to="/" class="btn-primary">
            Back to Home
          </NuxtLink>
          <NuxtLink to="/projects" class="btn-secondary">
            View Projects
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
if (process.server) {
  setResponseStatus(404)
}

// SEO meta tags
useHead({
  title: '404 - Page Not Found | Make spacers',
  meta: [
    { name: 'description', content: 'Page not found. Return to home or view our projects.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.error-container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.error-content {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.error-title {
  font-size: 8rem;
  font-weight: 900;
  color: #667eea;
  margin: 0 0 1rem 0;
  line-height: 1;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.error-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: #718096;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .error-page {
    padding: 1rem;
  }

  .error-content {
    padding: 2rem 1.5rem;
  }

  .error-title {
    font-size: 6rem;
  }

  .error-subtitle {
    font-size: 1.5rem;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 250px;
  }
}
</style>
