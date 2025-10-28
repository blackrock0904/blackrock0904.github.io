<template>
  <div class="parallax-container">
    <div v-motion :initial="{ y: 0 }" :enter="{ y: 0 }" :leave="{ y: -100 }" class="parallax-card">
      <div class="card-content">
        <div class="card-image">
          <img src="/img/service-1.jpg" alt="Interior Design" loading="lazy"/>
        </div>
        <div class="card-text">
          <h3 class="card-title">Interior Design</h3>
          <div class="card-description">
            <p>We design spaces that balance beauty and function.</p>
            <p>From homes and cafés to offices and studios, every detail is curated to reflect your goals and personality.</p>
          </div>
        </div>
      </div>
    </div>

    <div v-motion :initial="{ y: 100 }" :enter="{ y: 0 }" :leave="{ y: 100 }" class="parallax-card">
      <div class="card-content">
        <div class="card-image">
          <img src="/img/service-2.jpg" alt="Space Styling & Decoration" loading="lazy" />
        </div>
        <div class="card-text">
          <h3 class="card-title">Space Styling & Decoration</h3>
          <div class="card-description">
            <p>We style and decorate spaces to create the right atmosphere.</p>
            <p>From events and showcases to interiors and displays, every element works together to make your space memorable.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.parallax-card {
  background-color: $color-white;
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
}

.card-content {
  position: relative;
  width: 100%;
  height: 56rem;
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 2.4rem;
}

.card-image {
  position: relative;
  height: 100%;
  border-radius: 1.6rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.card-title {
  font-size: 4.8rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
}

.card-description {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
    color: $color-gray;
  }
}

@include tablet {
  .card-content {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    height: auto;
    padding: 0;
  }

  .card-image {
    height: 56rem;
  }

  .card-title {
    font-size: 4.8rem;
  }

  .card-description p {
    font-size: 1.8rem;
    gap: 2.4rem;
  }
}

@include mobile {
  .card-content {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    padding: 0 1.2rem;
  }

  .card-image {
    height: 32rem;
    border-radius: 0.8rem;
  }

  .card-title {
    font-size: 2.8rem;
  }

  .card-description p {
    font-size: 1.4rem;
  }
}
</style>
