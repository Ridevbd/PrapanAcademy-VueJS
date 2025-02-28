<template>
  <div v-if="isOpen" class="lightbox" @click.self="close">
    <span class="close" @click="close">&times;</span>
    <div class="lightbox-content">
      <img
        v-for="photo in selectedPhotos"
        :src="photo"
        :key="photo"
        class="lightbox-img"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    selectedPhotos: Array,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.lightbox {
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
.lightbox-content {
  display: flex;
  flex-wrap: wrap;
}
.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  margin: 10px;
}
.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
</style>
