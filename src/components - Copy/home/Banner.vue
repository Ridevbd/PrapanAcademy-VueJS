<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/images/slider-1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
          <h5 class="text-light">First Slide</h5>
          <p class="text-light">Take your first dance lesson for free.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/images/slider-2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
          <h5 class="text-light">Second Slide</h5>
          <p class="text-light">Learn from the best instructors.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/images/slider-3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
          <h5 class="text-light">Third Slide</h5>
          <p class="text-light">Join a community of passionate dancers.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BootstrapSlider",
};
</script>

<style scoped>
.carousel-inner img {
  height: 100vh;
  object-fit: cover;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
