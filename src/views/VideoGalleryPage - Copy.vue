<script setup lang="ts">
import { ref, onMounted } from 'vue';

const videoRefs = ref<HTMLIFrameElement[]>([]);
const videoLoaded = ref<boolean[]>([]);
const thumbnailUrls = ref<string[]>([]);

const pauseVideo = (index: number) => {
  if (videoRefs.value[index]?.contentWindow) {
    videoRefs.value[index].contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}', '*'
    );
  }
};

const handlePlayClick = (event: Event, index: number) => {
  const singleFilm = (event.currentTarget as HTMLElement).closest('.single-film');
  if (!singleFilm) return;
  
  document.querySelectorAll('.single-film').forEach(el => el.classList.add('single-film-animate'));
  singleFilm.classList.add('single-film-active');
  
  if (!videoLoaded.value[index]) {
    loadVideo(index);
  }

  setTimeout(() => singleFilm.classList.add('single-film-in'), 700);
};

const handleCloseClick = (event: Event) => {
  const singleFilm = (event.currentTarget as HTMLElement).closest('.single-film');
  if (!singleFilm) return;

  singleFilm.classList.remove('single-film-in');
  
  setTimeout(() => {
    document.querySelectorAll('.single-film').forEach(el => el.classList.remove('single-film-animate'));
  }, 800);

  setTimeout(() => singleFilm.classList.remove('single-film-active'), 1500);

  const index = Array.from(document.querySelectorAll('.single-film')).indexOf(singleFilm);
  pauseVideo(index);
};

const loadVideo = (index: number) => {
  if (!videoRefs.value[index]) return;

  const iframe = videoRefs.value[index];
  const videoId = extractYouTubeId(videos[index].videoUrl);
  
  iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&rel=0&iv_load_policy=3&color=white&disable_polymer=true`;
  videoLoaded.value[index] = true;
};

const extractYouTubeId = (url: string): string => {
  const match = url.match(/^.*(?:youtu.be\/|v\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/);
  return match ? match[1] : '';
};

const videos = [
  { id: 1, title: 'Big Buck Bunny', subtitle: 'Animation Short Film', delay: '.1s', videoUrl: 'https://www.youtube.com/watch?v=YE7VzlLtp-4' },
  { id: 2, title: 'Sintel', subtitle: 'Blender Animation', delay: '.2s', videoUrl: 'https://www.youtube.com/watch?v=eRsGyueVLvQ' },
  { id: 3, title: 'Tears of Steel', subtitle: 'Sci-Fi Short Film', delay: '.3s', videoUrl: 'https://www.youtube.com/watch?v=R6MlUcmOul8' },
  { id: 4, title: 'Elephants Dream', subtitle: 'Orange Project', delay: '.4s', videoUrl: 'https://www.youtube.com/watch?v=TLkA0RELQ1g' },
  { id: 5, title: 'Cosmos Laundromat', subtitle: 'First Cycle', delay: '.5s', videoUrl: 'https://www.youtube.com/watch?v=Y-rmzh0PI3c' },
  { id: 6, title: 'Spring', subtitle: 'Blender Open Movie', delay: '.6s', videoUrl: 'https://www.youtube.com/watch?v=WhWc3b3KhnY' }
];

onMounted(() => {
  videoRefs.value = Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[];
  videoLoaded.value = new Array(videos.length).fill(false);

  videos.forEach((video, index) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${extractYouTubeId(video.videoUrl)}/maxresdefault.jpg`;
    thumbnailUrls.value[index] = thumbnailUrl;
  });
});
</script>



<template>
  <div class="block">
    <div class="film-container">
      <div class="row">
        <!-- Loop through videos array to create single film items -->
        <div 
          v-for="(video, index) in videos" 
          :key="video.id"
          class="single-film wow fadeInDown" 
          :style="{ 'animation-delay': video.delay }"
        >
          <div class="box" :style="{ background: `url(${thumbnailUrls[index] || ''})` }">
            <div class="box__right box-pay-icon">
              <a href="#" @click.prevent="handlePlayClick($event, index)">
                <i class="play-movie-icon ion-ios-play-outline"></i>
              </a>
            </div>
            <div class="box__left box-pay-icon">
              <a href="#" @click.prevent="handlePlayClick($event, index)">
                <i class="play-movie-icon ion-ios-play-outline"></i>
              </a>
            </div>
            <div class="box__top box-pay-icon">
              <a href="#" @click.prevent="handlePlayClick($event, index)">
                <i class="play-movie-icon ion-ios-play-outline"></i>
              </a>
            </div>
            <div class="box__bottom box-pay-icon">
              <a href="#" @click.prevent="handlePlayClick($event, index)">
                <i class="play-movie-icon ion-ios-play-outline"></i>
              </a>
            </div>
            <div class="play-video">
              <iframe 
                width="100%" 
                height="100%" 
                :id="`PlayVideo${index + 1}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <i class="video-tag-close ion-ios-close-outline" @click="handleCloseClick($event)"></i>
          </div>
          <div class="film-information">
            <p>{{ video.title }}</p>
            <p>{{ video.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700');

$body-bg: #0c101b;
$white: #fff;
$film-bg: rgba(0, 0, 0, 0.43);

$top: 0%, 0%, 0%, 55%, 55%, 55%;
$left: 0%, 33%, 66%, 0%, 33%, 66%;
$i: 1;
$base-font-size: 14px;

* {
  box-sizing: border-box;
}

@mixin width-float {
  width: 100%;
  float: left;
}

@mixin bg-img-property {
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.block {
  width: 840px;
  margin: 10% auto;
  overflow: hidden;
}

.box {
  position: relative;
  height: 130px;
  line-height: 150px;
  overflow: hidden;
  @include bg-img-property;
}

%box__dir {
  position: absolute;
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: inherit;
  transition: transform 0.4s ease;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  &:hover {
    transform: translateX(0);
    z-index: 1;
  }

  &:hover:before {
    width: 100%;
    height: 100%;
    transform: none;
  }
}

.box__right {
  @extend %box__dir;
  background: $film-bg;
  transform: translateX(100%);

  &:before {
    right: 100%;
    bottom: 0;
    transform-origin: 100% 100%;
  }

  &:hover ~ .box__center {
    transform: translateX(-100%);
  }
}

.box__left {
  @extend %box__dir;
  background: $film-bg;
  transform: translateX(-100%);

  &:before {
    left: 100%;
    transform-origin: 0 0;
  }

  &:hover ~ .box__center {
    transform: translateX(100%);
  }
}

.box__top {
  @extend %box__dir;
  background: $film-bg;
  transform: translateY(-100%);

  &:before {
    top: 100%;
    right: 0;
    transform-origin: 100% 0;
  }

  &:hover ~ .box__center {
    transform: translateY(100%);
  }
}

.box__bottom {
  @extend %box__dir;
  background: $film-bg;
  transform: translateY(100%);

  &:before {
    bottom: 100%;
    left: 0;
    transform-origin: 0 100%;
  }

  &:hover ~ .box__center {
    transform: translateY(-100%);
  }
}

.film-container {
  @include width-float;
  position: relative;
  .row {
    height: 445px;
    position: relative;
    .single-film {
      width: 280px;
      height: auto;
      float: left;
      padding: 0px 15px;
      position: absolute;
      z-index: 4;
      background: $body-bg;
      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          top: nth($top, $i);
          left: nth($left, $i);
          transition: all ease 0.8s;
        }
      }
      .play-video {
        transition: all ease 0.8s;
        opacity: 0;
        background: $body-bg;
        iframe {
          width: 100%;
          height: 100%;
          transition: all ease 0.8s;
        }
      }
      .box-pay-icon {
        display: block;
        opacity: 1;
        z-index: 9;
      }
      .video-tag-close {
        transition: all ease 0.5s;
        position: absolute;
        top: 0px;
        right: 9px;
        font-size: 28px;
        color: $white;
        cursor: pointer;
        opacity: 0;
        background: $body-bg;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 36px;
      }
      .box {
        width: 100%;
        transition: all ease 0.8s;
        .play-movie-icon {
          color: $white;
          font-size: 45px;
          line-height: 0;
          font-weight: bold;
        }
      }
      .film-information {
        @include width-float;
        margin-top: 6%;
        transition: all ease 0.8s;
        p {
          @include width-float;
          color: $white;
          font-size: 13px;
          margin: 0;
          line-height: $base-font-size + 3;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .single-film.single-film-animate {
      left: 33% !important;
      top: 33% !important;
      transition: all ease 0.8s;
      bottom: 33%;
      right: 33%;
      transition: all ease 0.8s;
      .film-information {
        opacity: 0;
        transition: all ease 0.8s;
      }
      .box-pay-icon {
        transition: all ease 0.8s;
        display: none !important;
      }
    }

    .single-film.single-film-active {
      z-index: 6;
    }
    .single-film.video-min {
      transition: all ease 0.8s;
      display: block;
      opacity: 1;
      iframe {
        margin: 0 auto !important;
        height: 0% !important;
        width: 0% !important;
        margin-left: 40% !important;
        margin-top: 20% !important;
        overflow: hidden !important;
      }
    }
    .single-film.single-film-in {
      z-index: 6;
      transition: all ease 0.8s;
      right: 0 !important;
      left: 0 !important;
      top: 0 !important;
      bottom: 0 !important;
      height: auto !important;
      width: 100% !important;
      .box {
        height: 100% !important;
        transition: all ease 0.8s;
        width: 100% !important;
        overflow: visible;
      }
      .play-video {
        transition: all ease 0.8s;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        text-align: center;
        opacity: 1 !important;
        iframe {
          transition: all ease 0.8s;
          width: 100%;
          height: 100%;
        }
      }
      &:hover {
        .video-tag-close {
          transition: all ease 0.8s;
          opacity: 1;
        }
      }
    }
  }
}

/* Add animation for fadeInDown effect */
.wow.fadeInDown {
  animation: fadeInDown 1s ease-in-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>