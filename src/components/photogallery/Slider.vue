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
  height: 90%
}

.slider-img {
  max-width: 85%;
  max-height: 85%;
}

.close {
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 60px;
  color: white;
  cursor: pointer;
}

.prev,
.next {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001; /* Ensure buttons are above the image */
}

.prev {
  left: 20px; /* Position the previous button */
}

.next {
  right: 20px; /* Position the next button */
}
</style>
