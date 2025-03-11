<script setup>
import { RouterView } from 'vue-router';
</script>


<template>


<nav class="rd-navbar rd-navbar-modern"
 data-layout="rd-navbar-fixed"
  data-sm-layout="rd-navbar-fixed"
   data-md-layout="rd-navbar-fixed"
    data-md-device-layout="rd-navbar-fixed"
     data-lg-layout="rd-navbar-fixed"
      data-lg-device-layout="rd-navbar-fixed"
       data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
         data-lg-stick-up-offset="46px"
          data-xl-stick-up-offset="46px"
           data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
             data-xl-stick-up="true"
              data-xxl-stick-up="true">
  <div class="rd-navbar-main-outer">
    <div class="rd-navbar-main">
      <div class="rd-navbar-panel">
        <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
        <div class="rd-navbar-brand">
          <a class="brand" href="/">
            <img class="brand-logo-dark" src="/assets/images/logo-default-303x84.png" alt="Logo Dark" width="151" height="42"/>
            <img class="brand-logo-light" src="/assets/images/logo-inverse-303x84.png" alt="Logo Light" width="151" height="42"/>
          </a>
        </div>
      </div>
      <div class="rd-navbar-main-element">
        <div class="rd-navbar-nav-wrap">
          <ul class="rd-navbar-nav">
            <li class="rd-nav-item" :class="{ active: $route.path === '/' }">
              <router-link class="rd-nav-link" to="/">Home</router-link>
            </li>
            <li class="rd-nav-item" :class="{ active: $route.path === '/aboutus' }">
              <router-link class="rd-nav-link" to="/aboutus">About Us</router-link>
            </li>
            <!-- Gallery -->
            <li class="rd-nav-item" :class="{ active: $route.path === '/photogallery' || $route.path === '/videogalley' }">
              <a class="rd-nav-link" href="#">Gallery</a>
              <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item" :class="{ active: $route.path === '/photogallery' }">
                  <router-link class="rd-dropdown-link" to="/photogallery">Photo</router-link>
                </li>
                <li class="rd-dropdown-item" :class="{ active: $route.path === '/videogalley' }">
                  <router-link class="rd-dropdown-link" to="/videogalley">Video</router-link>
                </li>
              </ul>
            </li>
            <li class="rd-nav-item" :class="{ active: $route.path === '/achivement' }">
              <router-link class="rd-nav-link" to="/achivement">Achivement</router-link>
            </li>
            <!-- Partner Organization -->
            <li class="rd-nav-item" :class="{ active: $route.path === '/uddipan' || $route.path === '/trinity' }">
              <a class="rd-nav-link" href="#">Partner Organization</a>
              <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item" :class="{ active: $route.path === '/uddipan' }">
                  <router-link class="rd-dropdown-link" to="/uddipan">Uddipan</router-link>
                </li>
                <li class="rd-dropdown-item" :class="{ active: $route.path === '/trinity' }">
                  <router-link class="rd-dropdown-link" to="/trinity">Trinity</router-link>
                </li>
              </ul>
            </li>
            <!-- Biography -->
            <li class="rd-nav-item" :class="{ active: $route.path === '/ananyabaruabiography' }">
              <router-link class="rd-nav-link" to="/ananyabaruabiography">Biography</router-link>
            </li>
          </ul>
          <router-link class="button button-secondary button-sm" to="/contactUs" :class="{ active: $route.path === '/contactUs' }">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>



    <RouterView />












    <footer class="section footer-classic context-dark decorated-section-4">
        <div class="container">
          <div class="row row-50">
            <div class="col-lg-8 order-lg-2 ps-xl-5 wow-outer">
              <div class="wow slideInRight">
                <div class="row row-50">
                  <div class="col-12">
                    <h5 class="footer-title">Subscribe & Stay Updated</h5>
                    <!-- RD Mailform-->
                    <form class="rd-mailform text-start rd-form-inline" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                      <div class="form-wrap">
                        <label class="form-label" for="subscribe-email">E-mail</label>
                        <input class="form-input" id="subscribe-email" type="email" name="email" data-constraints="@Email @Required">
                      </div>
                      <div class="form-button group-sm text-center text-lg-start">
                        <button class="button button-primary" type="submit">subscribe</button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-6">
                    <h5 class="footer-title">Address & Phone</h5>
                    <ul class="list-contact-info">
                      <li><span class="icon mdi mdi-map-marker icon-md icon-secondary"></span><span class="list-item-text"><a href="#"><span class="text-primary-light">School Location: </span>395, M M Ali Road, Damphara, Chattogram<br></a></span></li>
                      <li><span class="icon mdi mdi-phone icon-md icon-secondary"></span><span class="list-item-text"><a href="tel:#">+880 01711-106808</a></span></li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h5 class="footer-title">Get Social</h5>
                    <p class="big">Follow us to stay connected and receive instant updates.</p>
                    <ul class="social-list">
                      <li><a class="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook" href="#"></a></li>
                      <li><a class="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-instagram" href="#"></a></li>
                      <li><a class="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-twitter" href="#"></a></li>
                      <li><a class="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook" href="#"> </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 order-lg-1 pe-xl-5 wow-outer">
              <div class="wow slideInLeft">
                <div class="row row-30">
                  <div class="col-12">
                    <!--Brand--><a class="brand" href="/"><img class="brand-logo-dark" src="/assets/images/logo-default-303x84.png" alt="" width="151" height="42"><img class="brand-logo-light" src="/assets/images/logo-inverse-303x84.png" alt="" width="151" height="42"></a>
                  </div>
                  <div class="col-12">
                    <p>Prapan Academy specializes in providing professional dance training, organizing performances, and hosting workshops. We focus on nurturing talent, fostering creativity, and empowering individuals through the art of dance.</p>
                    <div class="footer-divider"></div>
                    <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span><span><a class="team-name" href="https://facebook.com/ri.tusmiah" target="_blank" rel="noopener noreferrer" style="color: lightblue;">
  Ridwan Tusmiah
</a></span><span>. All Rights Reserved.&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
   
   

</template>



<style scoped>

</style>