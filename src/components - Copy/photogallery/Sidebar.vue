<template>
  <div class="list-group">
    <a class="list-group-item list-group-item-action" @click="selectAllPhotos">
      All Photos
    </a>
    <a
      class="list-group-item list-group-item-action"
      v-for="album in albums"
      :key="album.id"
      @click="selectAlbum(album)"
    >
      {{ album.name }}
    </a>
  </div>

</template>

<script>

export default {

  props: {
    albums: Array,
  },
  methods: {
    selectAllPhotos() {
      this.$emit('select-album', { id: null });
    },
    selectAlbum(album) {
      this.$emit('select-album', album);
    },
  },
};

</script>

<style scoped>
.list-group-item {
  cursor: pointer;
  font-weight: bold;
}

.list-group-item:hover {
  background-color: #e2e6ea;
}
</style>
