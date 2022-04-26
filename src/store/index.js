import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        heroContent: [],
        podcasts: [],
        podcastsImages: [],
        blogs: [],
    },
    mutations: {
        setHeroContent(state, payload) {
            state.heroContent = payload;
        },
        setPodcastData(state, payload) {
            state.podcasts = payload.data;
            state.podcastsImages = payload.imagesLinks;
        },
        setBlogsData(state, payload) {
            state.blogs = payload;
            console.log("STATE BLOGS", state.blogs);
        }
    },
    actions: {
        async getHeroContent({ commit }) {
            const response = await axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/pages");
            commit("setHeroContent", response.data[0].acf);
        },

        async getPodcastData({ commit }) {
            const response = await axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/podcasts");
            let innerLinks = [];

            for (let i = 0; i < response.data.length; i++) {
                innerLinks.push(response.data[i]._links['wp:featuredmedia'][0].href);
            }

            let innerLinksResponse = [];
            for (let i = 0; i < innerLinks.length; i++) {
               innerLinksResponse.push(await axios.get(innerLinks[i]));
            }
            
            let imagesLinksArray = [];
            for (let i = 0; i < innerLinksResponse.length; i++) {
                imagesLinksArray.push(innerLinksResponse[i].data.guid.rendered);
            }
            
            commit("setPodcastData", { data: response.data, imagesLinks: imagesLinksArray });
        },
        
        async getBlogsData({ commit }) {
            const response = await axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/blogposts");
            
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