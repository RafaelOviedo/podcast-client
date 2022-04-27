<template>
  <div id="navbarOuter">
    <nav id="navBarContainer" :class="isMenuOpen ? 'navBarContainerOpen' : ''">
      <div id="logoContainer" class="logoContainer1" v-show="!isMenuOpen">
        <img id="logoImage" :src="nicasourceLogo" alt="logo">
      </div>
      <div id="burgerBox" :class="isMenuOpen ? 'notVisibility' : ''" class="burgerBox" @click="openMenu">
        <div id="burgerCotnainer" class="burgerCotnainer">
          <div class="burgerMenu"></div>
          <div class="burgerMenu"></div>
          <div class="burgerMenu"></div>
        </div>
      </div>
      <ul id="navbarMenu" :class="!isMenuOpen ? 'notVisibility' : ''">
        <p class="navItem navItem1">Home</p>
        <p class="navItem">About</p>
        <p class="navItem">Episodes</p>
        <p class="navItem">Blog</p>
        <p class="navItem">Contact</p>
      </ul>
      <div id="buttonsContainer" :class="!isMenuOpen ? 'notVisibility' : ''">
        <button class="subscribeButton"><b>Subscribe</b></button>
        <button class="singinButton"><b>Sing-in</b></button>
      </div>
      <button id="closeButton" v-show="isMenuOpen" @click="closeMenu">X</button>
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
      isMenuOpen: false,
      nicasourceLogo,
      homeR: false,
      aboutR: false,
      episodesR: false,
      blogR: false,
      contactR: false,
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
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
  cursor: pointer;
}
.navItem1 {
  color: #f13c45;
  pointer-events: none;
  border-bottom: 1px solid black;
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

    @media (max-width: 768px) {
      #navBarContainer {
        width: 100%;
        z-index: 5;
        height: 20vh;
      }
      .navBarContainerOpen {
        position: absolute;
        top: 0;
        height: 70vh !important;
        border: 1px solid #000;
        animation: openingMenu 0.5s;
      }
      #navbarMenu {
        position: absolute;
        top: 0;
        left: 18%;
        height: 60%;
        z-index: 2;
        flex-direction: column;
      }
      .logoContainer1 {
        position: absolute;
        top: 0;
        left: 37%;
        height: 100%;
        justify-content: center;
        z-index: 2;
      }
      .burgerBox {
        position: absolute;
        top: 0;
        left: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 50%;
        height: 100%;
      }
      .burgerCotnainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 40%;
        height: 35%;
        cursor: pointer;
      }
      .burgerMenu {
        width: 50%;
        height: 15%;
        background: #000;
      }
      #buttonsContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 65%;
        height: 35%;
        width: 100%;
      }
      #closeButton {
        position: absolute;
        top: 2%;
        left: 83%;
        width: 12%;
        height: 5%;
        background: #000;
        color: #fff;
        border: none;
      }
      .notVisibility {
        visibility: hidden;
      }

      @keyframes openingMenu {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
</style>