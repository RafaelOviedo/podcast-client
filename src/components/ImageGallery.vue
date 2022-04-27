<template>
  <div id="galleryComponent">
    <h1>Our Gallery</h1>
    <div id="photosContainer" @click="openModal">
      <img class="picture mountain" :src="photosData[0]" alt="mountain">
      <img class="picture butterfly" :src="photosData[1]" alt="mountain">
      <img class="picture ocean" :src="photosData[2]" alt="mountain">
      <img class="picture volcano" :src="photosData[3]" alt="mountain">
      <img class="picture galaxy" :src="photosData[4]" alt="mountain">
      <img class="picture woods" :src="photosData[5]" alt="mountain">
      <img class="picture people" :src="photosData[6]" alt="mountain">
      <img class="picture pyramids" :src="photosData[7]" alt="mountain">
      <img class="picture computerSetup" :src="photosData[8]" alt="mountain">
      <img class="picture rocks" :src="photosData[9]" alt="mountain">
    </div>

    <div id="galleryModal" v-if="isModalOpen">
      <button id="closeButton" @click="closeModal">X</button>
      <div id="imageContainer" v-for="(item, index) in photosData.slice(numOfPage, numOfPage + 1)" :key="index">
        <img class="picture" :src="item" alt="">
      </div>
      <div id="buttonsContainer">
        <button 
          class="leftAndRightButtons"
          @click="previousPage" 
          :disabled="numOfPage === 0"
        >	&#8592;</button>
        <button
          class="leftAndRightButtons"
          @click="nextPage" 
          :disabled="numOfPage === photosData.length -1"
        >	&#8594;</button>
      </div>
    </div>
  </div>
</template>

<script>
import mountain from '../assets/images/randomImages/mountain.jpg';
import butterfly from '../assets/images/randomImages/butterfly.jpg';
import computerSetup from '../assets/images/randomImages/computerSetup.jpg';
import galaxy from '../assets/images/randomImages/galaxy.jpg';
import ocean from '../assets/images/randomImages/ocean.jpg';
import people from '../assets/images/randomImages/people.jpg';
import pyramids from '../assets/images/randomImages/pyramids.jpg';
import rocks from '../assets/images/randomImages/rocks.jpg';
import volcano from '../assets/images/randomImages/volcano.jpg';
import woods from '../assets/images/randomImages/woods.jpg';

export default {
  name: 'ImageGallery',
  data() {
    return {
      isModalOpen: false,
      photosData: [
        mountain,
        butterfly,
        computerSetup,
        galaxy,
        ocean,
        people,
        pyramids,
        rocks,
        volcano,
        woods
      ],
      numOfPage: 0,
      photosPerPage: 0,
    }
  },
  mounted() {
        this.photosPerPage = this.photosData.length - 1;
    },
  updated() {
        this.photosPerPage = this.photosData.length - 1;
    },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    previousPage() {
      if (this.numOfPage > 0) {
          this.numOfPage = this.numOfPage - 1;
      }
    },
    nextPage() {
      if (this.numOfPage < this.photosPerPage) {
          this.numOfPage = this.numOfPage + 1;
      }
    },
  }
}
</script>

<style scoped>
#galleryComponent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 200vh;
  left: 9.5vw;
  width: 80%;
  height: 100vh;
}
#photosContainer {
  width: 80%;
  height: 80%;
  cursor: pointer;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.mountain {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.butterfly {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.ocean {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
}
.volcano {
  grid-column: 2;
  grid-row: 3 / 5;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
.seven {
  grid-column: 2;
  grid-row: 4;
}
.eight {
  grid-column: 2 / 4;
  grid-row: 4;
}
.computerSetup {
  grid-column: 3 / 6;
  grid-row: 3 / 5;
}
.rocks {
  grid-column: 3 / 5;
  grid-row: 3 / 5;
}

#galleryModal {
  position: fixed;
  top: 0;
  width: 101%;
  height: 100%;
  background: black;
  opacity: 0.97;
  animation: openingModal 0.5s;
  z-index: 6;
}

@keyframes openingModal {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.97;
  }
}

.picture {
  width: 110%;
  height: 110%;
}

#imageContainer {
  position: absolute;
  top: 2%;
  left: 35%;
  width: 30%;
  height: 80%;
  border: 1px solid black;
}
#buttonsContainer {
  position: absolute;
  top: 92%;
  left: 46%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;
  height: 5%;
  background: transparent;
}
.leftAndRightButtons {
  border: none;
  cursor: pointer;
  font-size: 30px;
}
#closeButton {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 4%;
  height: 5%;
  font-size: 30px;
  cursor: pointer;
}

@media (max-width: 768px) {
  #galleryComponent {
    top: 3200px;
  }
  #photosContainer {
    width: 110%;
  }
  .mountain {
    grid-column: 2 / 5;
    grid-row: 1 / 3;
  }
  .butterfly {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
  .ocean {
    grid-column: 3 / 5;
    grid-row: 1 / 4;
  }
  .volcano {
    grid-column: 2;
    grid-row: 1 / 5;
  }
  .galaxy {
    grid-column: 2;
    grid-row: 4;
  }
  .woods {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }
  .people {
    grid-column: 2;
    grid-row: 1 / 1;
  }
  .pyramids {
    grid-column: 1 / 4;
    grid-row: 2 / 4;
  }
  .computerSetup {
    grid-column: 1 / 6;
    grid-row: 3 / 5;
  }
  .rocks {
    grid-column: 3 / 5;
    grid-row: 3 / 5;
  }
  #imageContainer {
    top: 10%;
    left: 10%;
    width: 70%;
    height: 70%;
  }
  #closeButton {
    width: 10%;
    height: 5%;
    left: 48%;
  }
}
</style>