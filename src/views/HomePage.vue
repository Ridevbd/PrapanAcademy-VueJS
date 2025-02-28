<template>
 
  <Banner />
  <Gallery />
  <Instructor />
  <Promo />

</template>

<script>

import {defineComponent} from "vue";
import Banner from "../components/home/Banner.vue";
import Gallery from "../components/home/gallery.vue"
import Instructor from "../components/home/instructor.vue"
import Promo from "../components/home/Promo.vue"

export default defineComponent({
  components: {Banner, Gallery, Instructor, Promo}
})
</script>

<style  scoped>

</style>