<template>
  <div id="footerComponent">
    <div id="container1">

      <div id="mediaBox">
        <div id="logoContainer">
          <img id="nicaLogo" :src="nicaLogo" alt="logo">
        </div>
        <div id="textContainer">
          <p id="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla.</p>
        </div>
        <div id="socialMediaContainer">
           <a href="https://www.facebook.com/" target="_blank">
            <img id="faceLogo" class="socialLogo" :src="faceLogo" alt="logo">
           </a>
           <a href="https://www.instagram.com/" target="_blank">
           <img id="instaLogo" class="socialLogo" :src="instaLogo" alt="logo">
           </a>
           <a href="https://www.linkedin.com/" target="_blank">
           <img id="linkedinLogo" class="socialLogo" :src="linkedinLogo" alt="logo">
           </a>
           <a href="https://www.skype.com/" target="_blank">
           <img id="skypeLogo" class="socialLogo" :src="skypeLogo" alt="logo">
           </a>
        </div>
      </div>

      <div id="pagesBox">
        <div class="textsContainer">
          <h4><b>Pages</b></h4>
          <h4 class="pagesTexts">About</h4>
          <h4 class="pagesTexts">Episode</h4>
          <h4 class="pagesTexts">Blog</h4>
          <h4 class="pagesTexts">Contact</h4>
        </div>
      </div>

      <div id="recentsBox">
        <div class="textsContainer">
          <h4><b>Recent episodes</b></h4>
          <h4 class="pagesTexts">Episode 1</h4>
          <h4 class="pagesTexts">Episode 2</h4>
          <h4 class="pagesTexts">Episode 3</h4>
          <h4 class="pagesTexts">Episode 4</h4>
        </div>
      </div>

      <div id="podcastsBox">
        <div id="podcastsContainer">
        <h4>Listen My Podcast Also In</h4>
        <a id="button2" href="https://podcasts.google.com/" target="_blank">
          <img class="brandImage" :src="googleImage" alt="google logo">
        </a>
        <a id="button3" href="https://www.apple.com/la/apple-podcasts/" target="_blank">
          <img class="brandImage" :src="appleImage" alt="apple logo">
        </a>
        <a id="button1" href="https://www.spotify.com/" target="_blank">
          <img class="brandImage" :src="spotifyImage" alt="spotify logo">
        </a>
        </div>
      </div>

    </div>

    <div id="container2">
      <h5 id="footnote">@2022 NicaSource All Rights Reserved</h5>
    </div>
  </div>
</template>

<script>
import spotifyImage from '../assets/images/spotifyImage.png';
import googleImage from '../assets/images/googleImage.png';
import appleImage from '../assets/images/appleImage.png';
import nicaLogo from '../assets/images/nicaLogo.png';
import faceLogo from '../assets/images/faceLogo.png';
import instaLogo from '../assets/images/instaLogo.png';
import linkedinLogo from '../assets/images/linkedinLogo.png';
import skypeLogo from '../assets/images/skypeLogo.png';

export default {
  name: 'Footer',
  data() {
    return {
      nicaLogo,
      faceLogo,
      instaLogo,
      linkedinLogo,
      skypeLogo,
      spotifyImage,
      googleImage,
      appleImage,
    }
  }
}
</script>

<style scoped>
#footerComponent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 350vh;
  left: 9.5vw;
  width: 80%;
  height: 55vh;
}
#container1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #9B9B9B;
}
#mediaBox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 90%;
}
#logoContainer {
  width: 100%;
  height: 50%;
}
#textContainer {
  width: 80%;
  height: 30%;
} 
#loremText {
  text-align: left;
  color: #9B9B9B;
}

#socialMediaContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 30%;
} 
.socialLogo {
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}

#pagesBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 90%;
} 
.textsContainer {
  width: 50%;
  height: 100%;
} 
.pagesTexts {
  color: #9B9B9B;
}

#recentsBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 90%;
}

#podcastsBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 90%;
}
#podcastsContainer {
  width: 70%;
  height: 100%;
} 

#container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}
#footnote {
  color: #9B9B9B;
}

@media (max-width: 768px) {
  #footerComponent {
    top: 4300px;
    height: 1400px;
  }
  #container1 {
    flex-direction: column;
  }
  #mediaBox {
    width: 100%;
    height: 50%;
  }
  #pagesBox {
    width: 100%;
    height: 40%;
  }
  #recentsBox {
    width: 100%;
    height: 40%;
  }
  #podcastsBox {
    width: 100%;
    height: 40%;
  }
  #container2 {
    height: 0px;
  }
}
</style>