import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes.js"

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace


VueRouter.prototype.push = function (location, res, rej) {
    if (res && rej) {
        originPush.call(this, location, res, rej)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }

}
//重写replace方法
VueRouter.prototype.replace = function (location, res, rej) {
    if (res && rej) {
        originReplace.call(this, location, res, rej)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }

}

export default new VueRouter({
    routes,
    mode: "history"
})