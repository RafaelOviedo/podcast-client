<template>
  <div id="blogsSection">
    <h1>Blog Posts</h1>

    <div id="blogsContainer">
      <div class="blogElement" v-for="(item, index) in blogsData.slice(numOfPage, numOfPage + 3)" :key="index">
        <div class="topContainer">
          <p id="authorAndDate"><b><span id="author">By {{ item.acf.author}}</span></b> &nbsp;&nbsp; {{item.acf.date}}</p>
          <p id="blogOwner">{{ item.acf.blog_owner }}</p>
        </div>

        <div class="midContainer">
          <h1>{{ item.title.rendered}}</h1>
          <p>{{ item.acf.subtitle }}</p>
        </div>

        <div class="bottomContainer">
          <button class="readMoreButton">Read More</button>
        </div>
      </div>
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
        :disabled="numOfPage === blogsData.length -1"
      >	&#8594;</button>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
  name: 'BlogsSection',
  data() {
    return {
      numOfPage: 0,
      blogsPerPage: 0,
    }
  },
  beforeMount() {
    this.getBlogsData();
  },
  mounted() {
        this.blogsPerPage = this.blogsData.length - 2;
    },
  updated() {
        this.blogsPerPage = this.blogsData.length - 2;
    },
  methods: {
    getBlogsData() {
      store.dispatch('getBlogsData');
    },
    previousPage() {
      if (this.numOfPage > 0) {
          this.numOfPage = this.numOfPage - 2;
      }
    },
    nextPage() {
      if (this.numOfPage < this.blogsPerPage) {
          this.numOfPage = this.numOfPage + 2;
      }
    },
  },
  computed: {
    ...mapState({
      blogsData: state => state.blogs,
    })
  }
}
</script>

<style scoped>
#blogsSection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 120vh;
  left: 9vw;
  width: 80%;
  height: 80vh;
  border-radius: 10px;
}

#blogsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  height: 75%;
}

.blogElement {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 27%;
  height: 67%;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
}
.topContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 20%;
  text-align: left;
}
.midContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 40%;
  text-align: left;
}
.bottomContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 20%;
  text-align: left;
}
#authorAndDate {
  margin: 0;
}
#blogOwner {
  margin: 0;
}
#author {
  color: #f13c45;
}

.readMoreButton {
  width: 35%;
  height: 70%;
  border-radius: 5px;
  border: none;
  color: #f13c45;
  border: 1px solid #f13c45;
  background: transparent;
  cursor: pointer;
} .readMoreButton:active {
    background: #f13c45;
    color: #fff;
  }

#buttonsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;
  height: 5%;
}
.leftAndRightButtons {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
}

@media (max-width: 768px) {
  #blogsSection {
    top: 2200px;
    height: 150vh;
  }
  #blogsContainer {
    flex-direction: column;
  }
  .blogElement {
    width: 90%;
    margin-bottom: 10%;
  }
}
</style>