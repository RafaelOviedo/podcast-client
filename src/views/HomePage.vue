<template>
  <div id="homePage">
    <div id="heroSection">

      <div id="textContainer">
        <div id="innerBox">
          <p id="label">{{ heroContent.label }}</p>
          <h1 id="title">{{ heroContent.title }}</h1>
          <p id="subtitle">{{ heroContent.subtitle}}</p>
          <p id="label2">{{ heroContent.label2}}</p>
          <div id="buttonsContainer">
            <a id="button1" href="https://www.spotify.com/" target="_blank"><img class="brandImage" :src="spotifyImage" alt="spotify logo"></a>
            <a id="button2" href="https://podcasts.google.com/" target="_blank"><img class="brandImage" :src="googleImage" alt="google logo"></a>
            <a id="button3" href="https://www.apple.com/la/apple-podcasts/" target="_blank"><img class="brandImage" :src="appleImage" alt="apple logo"></a>
          </div>
        </div>
      </div>

      <div id="imageContainer">
        <img :src="data" alt="microphone">
      </div>
    </div>

      <div id="bottomSection">
        <PodcastSection />
        <BlogsSection />
        <ImageGallery />
        <EmailForm />
        <Footer />
      </div>
  </div>
</template>

<script>
import spotifyImage from '../assets/images/spotifyImage.png';
import googleImage from '../assets/images/googleImage.png';
import appleImage from '../assets/images/appleImage.png';
import PodcastSection from '../components/PodcastSection.vue';
import BlogsSection from '../components/BlogsSection.vue';
import ImageGallery from '../components/ImageGallery.vue';
import EmailForm from '../components/EmailForm.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios'
import store from '../store'
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    PodcastSection,
    BlogsSection,
    ImageGallery,
    EmailForm,
    Footer,
  },
  data() {
    return {
      spotifyImage,
      googleImage,
      appleImage,
      data: null,
    }
  },
  beforeMount() {
    this.getData()
    this.getHeroContent()
  },
  methods: {
    async getData() {
      const response = await axios.get('http://localhost:8888/wordpress/index.php/wp-json/wp/v2/media/65')
      this.data = response.data.guid.rendered;
    },
    getHeroContent() {
      store.dispatch('getHeroContent');
    }
  },
  computed: {
    ...mapState({
      heroContent: state => state.heroContent,
    })
  }
}
</script>

<style scoped>
#homePage {
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 3950px;
  background: #f6f7f8;
  overflow: scroll;
}
#homePage::-webkit-scrollbar {
  display: none;
}
#heroSection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70vh;
  position: absolute;
  top: 0;
  left: 0;
}

#textContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 48vw;
  height: 100%;
}  #innerBox {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    width: 65%;
    height: 90%;
}

#imageContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 48vw;
  height: 100%;
}
#label {
  font-size: 13px;
}   #label::before {
      content: '—';
      color: #f13c45;
    }
#title {
  font-size: 40px;
  line-height: 1;
}
#label2 {
  font-size: 13px;
}   #label2::after {
      content: '—';
      color: #f13c45;
    }

#buttonsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 15%;
}
#button1 {
  width: 22%;
  height: 65%;
  cursor: pointer;
  margin-right: 10px;
}   .brandImage {
      width: 100%;
      height: 100%;
    }
  #button2 {
  width: 35%;
  height: 65%;
  cursor: pointer;
  margin-right: 10px;
}   .brandImage {
      width: 100%;
      height: 100%;
    }
#button3 {
  width: 34%;
  height: 65%;
  cursor: pointer;
}   .brandImage {
      width: 100%;
      height: 100%;
    }

#bottomSection {
  position: absolute;
  top: 80vh;
  left: 0;
  width: 100%;
  height: 3250px;
  background: #f3f3f3;
}

@media (max-width: 768px) {
  #heroSection {
    z-index: 2;
  }
  #imageContainer {
    position: absolute;
    top: 32vh;
    left: -22vw;
    z-index: 1;
    opacity: 0.15;
    height: 20% !important;
  }
  #textContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5vh;
    left: 0;
    width: 100%;
    height: 120vh;
  }
  #innerBox {
    width: 90%;
    text-align: center;
  }
  #title {
    font-size: 30px;
  }
  #subtitle {
    font-size: 15px;
  }
  #buttonsContainer {
    height: 50%;
    flex-direction: column;
  } #button1 {
     width: 50%;
     height: 20%;
     z-index: 2;
  } #button2 {
     width: 80%;
     height: 20%;
     z-index: 2;
  } #button3 {
     width: 80%;
     height: 20%;
     z-index: 2;
  }
}
</style>