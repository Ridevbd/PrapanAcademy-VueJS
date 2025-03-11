<template>
  <div v-if="isOpen" class="slider" @click.self="close">
    <span class="close" @click="close">&times;</span>
    <div class="slider-content">
      <img :src="photos[currentIndex]" class="slider-img" />
      <button class="prev" @click.prevent="prev">&lt;</button>
      <button class="next" @click.prevent="next">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    photos: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    close() {
      this.$emit('close'); // Emit close event
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    },
  },
};
</script>

<style scoped>
.slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.slider-content {
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-img {
  width: 100%; /* Allow the image to take up 100% of the container width */
  height: auto;
  max-width: 90%; /* Make sure the image doesn't stretch too wide */
  max-height: 80%; /* Ensure image does not exceed container height */
  object-fit: contain; /* Ensures the image fits without cropping or stretching */

}

.close {
  position: absolute;
  top: 10px;  /* Adjust to your preference */
  right: 10px;  /* Adjust to your preference */
  font-size: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.5);  /* Optional: for better visibility */
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;  /* Ensure it's above other elements */
}

.close:hover {
  color: #f00;
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
  .close {
    font-size: 24px;  /* Smaller close button on mobile */
    top: 15px;  /* Position close button slightly lower on mobile */
    right: 15px;  /* Position close button slightly lower on mobile */
    z-index: 1001;  /* Ensure close button is above the image */
  }
}

@media (max-width: 480px) {
  .close {
    font-size: 24px;  /* Keep the size small enough for mobile screens */
    top: 10px;  /* Position closer to the top */
    right: 10px;  /* Adjust for smaller screens */
  }
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .close {
    font-size: 24px; /* Smaller close button on mobile */
    top: 5px;
    right: 5px;
  }

  .slider-img {
    max-width: 100%; /* Image will fill the width on mobile */
    max-height: 60%; /* Allow for more space on mobile */
  }

  .prev,
  .next {
    font-size: 30px; /* Make the navigation buttons slightly bigger for mobile */
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .slider-content {
    width: 95%;
    height: 95%;
  }

  .prev,
  .next {
    font-size: 28px;
    width: 50px; /* Bigger touch target on small screens */
    height: 50px;
  }

  .slider-img {
    max-width: 100%; /* Image takes up the full width on mobile */
    max-height: 70%; /* Adjust height to give room for buttons */
  }
}
</style>

