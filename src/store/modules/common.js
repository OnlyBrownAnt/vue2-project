const state = () => ({
    routeToPath: '',
    routeFromPath: '' 
})

const getters = {
    
}

const mutations = {
    setRouteToPath(state, value) {
        state.routeToPath = value
    },
    setRouteFromPath(state, value) {
        state.routeFromPath = value
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
    modules: {}
}
