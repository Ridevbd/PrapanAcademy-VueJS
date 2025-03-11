<template>
    <section class="parallax-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="parallax-content section-xl context-dark text-center bg-dark-filter">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-10 wow-outer">
              <div class="wow fadeInUp">
                <h3 class="title-decorate-center title-decorate fw-regular">Take Your First Dance Lesson for Free</h3>
                <a class="button button-xl button-primary" href="#">Book a lesson</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImage: '/assets/images/parallax-img-1.jpg',
      };
    },
  };
  </script>
  
  <style scoped>
  .parallax-container {
    background-size: cover;
    background-position: center;
  }
  </style>
  