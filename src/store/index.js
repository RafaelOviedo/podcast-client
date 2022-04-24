import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        heroContent: [],
        podcasts: [],
    },
    mutations: {
        setHeroContent(state, payload) {
            state.heroContent = payload;
        }
    },
    actions: {
        async getHeroContent({ commit }) {
            const response = await axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/pages");
            commit("setHeroContent", response.data[0].acf);
        }
    },
    getters: {},
    modules: {}
});

export default store;