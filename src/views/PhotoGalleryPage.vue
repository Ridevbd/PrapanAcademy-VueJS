<template>
    <div class="">
      <div class="row">
        <div
          class="col-md-3 top-20 bg-dark text-white p-3"
          style="width: 250px"
        >
          <Sidebar :albums="paginatedAlbums" @select-album="selectAlbum" />
          <Pagination
            :total="albums.length"
            :per-page="albumsPerPage"
            @page-changed="handlePageChange"
          />
        </div>
        <div class="col-md-9 gallery">
          <PhotoGallery :photos="currentPhotos" @view="openSlider" />
          <Slider
            :is-open="sliderOpen"
            :photos="selectedPhotos"
            @close="sliderOpen = false"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Sidebar from '../components/photogallery/Sidebar.vue';
  import PhotoGallery from '../components/photogallery/PhotoGallery.vue';
  import Pagination from '../components/photogallery/Pagination.vue';
  import Slider from '../components/photogallery/Slider.vue';
  import albumsData from '../data/albums.json';
  
  export default {
    components: {
      Sidebar,
      PhotoGallery,
      Pagination,
      Slider,
    },
    setup() {
      const albums = ref(albumsData);
      const paginatedAlbums = ref([]);
      const currentPhotos = ref([]);
      const sliderOpen = ref(false);
      const selectedPhotos = ref([]);
      const albumsPerPage = 2; // Adjust this to how many albums you want per page
      const currentPage = ref(1);
  
      const getPaginatedAlbums = (page) => {
        const start = (page - 1) * albumsPerPage;
        return albums.value.slice(start, start + albumsPerPage);
      };
  
      const handlePageChange = (page) => {
        currentPage.value = page;
        paginatedAlbums.value = getPaginatedAlbums(page);
      };
  
      const openSlider = (photo) => {
        selectedPhotos.value = currentPhotos.value; // Assign all current photos to selectedPhotos
        sliderOpen.value = true; // Open the slider
      };
  
      const selectAlbum = (album) => {
        if (album.id === null) {
          currentPhotos.value = albums.value.flatMap((a) => a.photos); // Show all photos
        } else {
          const selectedAlbum = albums.value.find((a) => a.id === album.id);
          currentPhotos.value = selectedAlbum ? selectedAlbum.photos : [];
        }
      };
  
      // Set "All Photos" as default selected album and load paginated albums
      onMounted(() => {
        paginatedAlbums.value = getPaginatedAlbums(currentPage.value);
        currentPhotos.value = albums.value.flatMap((a) => a.photos); // Load all photos by default
      });
  
      return {
        albums,
        paginatedAlbums,
        currentPhotos,
        albumsPerPage,
        handlePageChange,
        openSlider,
        sliderOpen,
        selectedPhotos,
        selectAlbum,
      };
    },
  };
  </script>
  
  <style>
  .sidebar {
    background-color: #f8f9fa;
    padding: 15px;
    height: 100vh; /* Full height */
    border-right: 1px solid #dee2e6;
    position: fixed; /* Fix the sidebar on the left */
    margin-top: 250px;
  }
  
  .gallery {
    margin-top: 20px; /* Adjust for fixed sidebar width */
  }
  </style>
  