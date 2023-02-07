import Vue from "vue";
export function startLoading() {
    Vue.prototype.$toast.loading({ duration: 0, overlay: false, forbidClick: true});
}
export function cancelLoading() {
    Vue.prototype.$toast.clear();
}
