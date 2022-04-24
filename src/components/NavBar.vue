<template>
  <div id="navbarOuter">
    <nav id="navBarContainer">
      <div id="logoContainer">
        <img id="logoImage" :src="nicasourceLogo" alt="logo">
      </div>
      <ul id="navbarMenu">
        <router-link class="navItem navItem1" :class="homeR ? 'btnActive' : ''" :to="{ name: 'HomePage' }">Home</router-link>
        <router-link class="navItem navItem2" :class="aboutR ? 'btnActive' : ''" :to="{ name: 'About' }">About</router-link>
        <router-link class="navItem navItem3" :class="episodesR ? 'btnActive' : ''" :to="{ name: 'Episodes' }">Episodes</router-link>
        <router-link class="navItem navItem4" :class="blogR ? 'btnActive' : ''" :to="{ name: 'Blog' }">Blog</router-link>
        <router-link class="navItem navItem5" :class="contactR ? 'btnActive' : ''" :to="{ name: 'Contact' }">Contact</router-link>
      </ul>
      <div id="buttonsContainer">
        <button class="subscribeButton"><b>Subscribe</b></button>
        <button class="singinButton"><b>Sing-in</b></button>
      </div>
    </nav>
  </div>
</template>

<script>
import nicasourceLogo from '../assets/images/nicaLogo.png';

export default {
  name: 'navBar',
  components: {},
  data() {
    return {
      nicasourceLogo,
      homeR: false,
      aboutR: false,
      episodesR: false,
      blogR: false,
      contactR: false,
    }
  },
  computed: {
    routePath() {
      return this.$route.path;
    }
  },
  watch: {
    routePath() {
      if (this.$route.path === '/') {
        this.homeR = true;
        this.aboutR = false;
        this.episodesR = false;
        this.blogR = false;
        this.contactR = false;
      } else if (this.$route.path === '/about') {
        this.homeR = false;
        this.aboutR = true;
        this.episodesR = false;
        this.blogR = false;
        this.contactR = false;
      } else if (this.$route.path === '/episodes') {
        this.homeR = false;
        this.aboutR = false;
        this.episodesR = true;
        this.blogR = false;
        this.contactR = false;
      } else if (this.$route.path === '/blog') {
        this.homeR = false;
        this.aboutR = false;
        this.episodesR = false;
        this.blogR = true;
        this.contactR = false;
      } else if (this.$route.path === '/contact') {
        this.homeR = false;
        this.aboutR = false;
        this.episodesR = false;
        this.blogR = false;
        this.contactR = true;
      }
    }
  },
}
</script>

<style scoped>
#navbarOuter {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  background: #f6f7f8;
}
#navBarContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 20vh;
  background: #f6f7f8;
}

#logoContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  height: 100%;
}
#logoImage {
  width: 250px;
  height: 125px;
}

#navbarMenu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
}
.navItem {
  color: #000;
  text-decoration: none;
  height: 30px;
}

#buttonsContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  height: 100%;
}
.btnActive {
  color: #f13c45;
  border-bottom: 1px solid black;
}

.subscribeButton {
  width: 30%;
  height: 30%;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #f13c45;
  margin-right: 40px;
  cursor: pointer;
}   .subscribeButton:active {
      background: #fff;
      color: #f13c45;
    }
.singinButton {
  width: 30%;
  height: 30%;
  border-radius: 5px;
  border: none;
  color: #f13c45;
  border: 1px solid #f13c45;
  background: transparent;
  cursor: pointer;
}   .singinButton:active {
      background: #f13c45;
      color: #fff;
    }
</style>