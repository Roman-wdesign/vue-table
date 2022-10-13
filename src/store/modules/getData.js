import axios from "axios";

const state = {
    users: [],
};

const getters = {
    USERS(state) {
        return state.users;
    },
};

const mutations = {
    SET_USERS_TO_VUEX: (state, users) => {
        state.users = users;
    },
};

const actions = {
    GET_USERS_FROM_API({commit}) {
        const urlMain = "http://localhost:3000/users";
        return axios(urlMain, {
            method: "GET",
            timeout: 1000,
        })
            .then((response) => {
                commit("SET_USERS_TO_VUEX", response.data);
                return response;
            })
            .finally(() =>
                console.log(
                    "%cData users loading is complete on VueX",
                    "background: #0096d3; color: #FFFFFFFF"
                )
            )
            .catch(function (error) {
                console.log(error, "Wrong users data from API");
            });
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};