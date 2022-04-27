import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        heroContent: [],
        podcasts: [],
        blogs: [],
    },
    mutations: {
        setHeroContent(state, payload) {
            state.heroContent = payload;
        },
        setPodcastData(state, payload) {
            state.podcasts = payload;
        },
        setBlogsData(state, payload) {
            state.blogs = payload;
        }
    },
    actions: {
        async getHeroContent({ commit }) {
            const response = await axios.get("/wp-json/wp/v2/pages");
            for(let i = 0; i < response.data.length; i++) {
                if(response.data[i].slug === 'home-page') {
                    commit("setHeroContent", response.data[i].acf);
                }
            }
        },

        async getPodcastData({ commit }) {
            const response = await axios.get("/wp-json/wp/v2/podcasts");
            let podcastData = response.data;

            for (let i = 0; i < podcastData.length; i++) {
                if(podcastData[i]._links['wp:featuredmedia']) {
                    let res = await axios.get(podcastData[i]._links['wp:featuredmedia'][0].href)
                    podcastData[i].customLink = res.data.guid.rendered;
                }
            }

            commit("setPodcastData", podcastData);
        },
        
        async getBlogsData({ commit }) {
            const response = await axios.get("/wp-json/wp/v2/blogposts");
            
            let blogs = [];
            for (let i = 0; i < response.data.length; i++) {
                blogs.push(response.data[i]);
            }

            commit("setBlogsData", blogs);
        },
    },
    getters: {},
    modules: {}
});

export default store;