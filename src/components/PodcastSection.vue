<template>
  <div id="podcastSection">
    <div id="topContainer">
      <h1>Latest Podcast Episodes</h1>
      <button id="viewButton">View All</button>
    </div>
    
    <div id="midContainer">
      <div class="imagesBox">
        <div v-for="(item, index) in podcastImagesData.slice(0,3)" :key="index">
          <img class="podcastImage" :src="item" alt="podcast image">
        </div>
      </div>
    
      <div class="elementsBox">
        <div class="doubleBoxContainer" v-for="(item, index) in podcastData.slice(0,3)" :key="index">
            <div class="contentBox">
              <h2>{{ item.title.rendered}}</h2>
              <p>{{ item.acf.subtitle}}</p>
              <button class="knowmoreButton">Know more</button>
            </div>
            <div class="legendsBox">
              <p class="legendItem"># {{ item.acf.season}}</p>
              <p class="legendItem"># {{ item.acf.date}}</p>
              <p class="legendItem"># {{ item.acf.subject}}</p>
            </div>
        </div>
      </div>
    </div>

    <div id="bottomContainer">
      <button id="showmoreButton">Show More episodes</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'

export default {
  name: 'PodcastSection',
  data() {
    return {
    }
  },
  beforeMount() {
    this.getPodcastData();
  },
  methods: {
    getPodcastData() {
      store.dispatch('getPodcastData');
    },
  },
  computed: {
    ...mapState({
      podcastData: state => state.podcasts,
      podcastImagesData: state => state.podcastsImages,
    })
  }
}
</script>

<style scoped>
#podcastSection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: -50px;
  left: 9vw;
  width: 80%;
  height: 120vh;
  background: #fff;
  border-radius: 10px;
}

#topContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 15%;
}
#viewButton {
  width: 10%;
  height: 30%;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #f13c45;
  margin-right: 40px;
  cursor: pointer;
} #viewButton:active {
      background: #fff;
      color: #f13c45;
    }

#midContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 60%;
}


#bottomContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 10%;
}
#showmoreButton {
  width: 45%;
  height: 40%;
  border-radius: 5px;
  border: none;
  color: #f13c45;
  border: 1px solid #f13c45;
  background: transparent;
  cursor: pointer;
} #showmoreButton:active {
      background: #f13c45;
      color: #fff;
    }

.imagesBox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
}
.elementsBox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.podcastImage {
  width: 100%;
  height: 100%;
}

.doubleBoxContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
}

.contentBox {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
  height: 100%;
}
.knowmoreButton {
  width: 20%;
  height: 30%;
  border-radius: 5px;
  border: none;
  color: #f13c45;
  border: 1px solid #f13c45;
  background: transparent;
  cursor: pointer;
} .knowmoreButton:active {
    background: #f13c45;
    color: #fff;
  }

.legendsBox {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-left: 1px solid #cfcfcf;
}
.legendItem {
  color: #9B9B9B;
  font-size: 13px;
  margin-left: 10px;
}
</style>