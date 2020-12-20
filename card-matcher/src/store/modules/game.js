import axios from 'axios'


const state = {

    loading: false,

    error: 'ERROR',

    list: []

};

const getters = {

    getPersons(context) {
        return context.error;
    },

};

const mutations = {

    setPersons(context, persons) {
        context.list = persons;
    },

    setError(context, error) {
        context.error = error;
    },

    setLoading(context, loading) {
        context.loading = loading;
    },

};

const actions = {

    fetchPersons(context) {
        context.commit('setLoading', true);

        axios
        .get('http://localhost:3000/person')
        .then(
            (response) => {
                context.commit('setLoading', false);
                context.commit('setPersons', response.data);
            }
        ).catch(
            (error) => {
                context.commit('setLoading', false);
                context.commit('setError', error);
            }
        );
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
