<template>
  <div class="row">
    <transition name="scale-fade" mode="out-in">
      <div :key="photos.length" class="row">
        <div class="col-md-4 mb-4" v-for="photo in photos" :key="photo">
          <div class="card position-relative">
            <img :src="photo" class="card-img-top large-photo" />
            <div class="view-button" @click.stop="viewPhoto(photo)">View</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    photos: Array, // Receiving photos as a prop
  },
  methods: {
    viewPhoto(photo) {
      this.$emit('view', photo); // Emit the selected photo
      console.log('View button clicked, emitting photo:', photo);
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
  overflow: hidden;
  position: relative;
}

.large-photo {
  width: 100%; /* Full width of the card */
  height: auto; /* Maintain aspect ratio */
  max-height: 300px; /* Set a maximum height for the images */
  transition: transform 0.2s; /* Scale up on hover */
}

.large-photo:hover {
  transform: scale(1.05); /* Slightly scale up on hover */
}

.view-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 5px;
  display: none; /* Initially hidden */
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.card:hover .view-button {
  display: block; /* Show button on hover */
}

/* Enhanced Animation Styles */
.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Fade and scale transition */
}
.scale-fade-enter,
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(1.1); /* Scale up during enter and down during leave */
}
</style>
