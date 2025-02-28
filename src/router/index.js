import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";
import PhotoGallery from "../views/PhotoGalleryPage.vue";
import VideoGalley from "../views/VideoGalleryPage.vue";
import Achivement from "../views/AchivementPage.vue";
import Uddipan from "../views/UddipanPage.vue";
import Trinity from "../views/TrinityPage.vue";
import AnanyaBaruaBiography from "../views/AnanyaBaruaBiographyPage.vue";
import ContactUs from "../views/ContactUsPage.vue";


const routes = [

    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },

    {
        path: "/aboutus",
        name: "AboutUsPage",
        component: AboutUsPage,
    },

    {
        path: "/photogallery",
        name: "PhotoGallery",
        component:PhotoGallery,
    },

    {
        path: "/videogalley",
        name: "VideoGalley",
        component: VideoGalley,
    },

    {
        path: "/achivement",
        name: "Achivement",
        component: Achivement,
    },

    {
        path: "/uddipan",
        name: "Uddipan",
        component: Uddipan,
    },

    {
        path: "/trinity",
        name: "Trinity",
        component: Trinity,
    },

    {
        path: "/ananyabaruabiography",
        name: "AnanyaBaruaBiography",
        component: AnanyaBaruaBiography,
    },

    {
        path: "/contactUs",
        name: "ContactUs",
        component: ContactUs,
    },

    

]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;