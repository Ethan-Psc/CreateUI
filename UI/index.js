import Loading from "./packages/loading";
// import animate from "./directive/animate";




// 组件列表
const components = [];

const requireComponents = require.context("./packages", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
    components.push(requireComponents(key).default);
});

//组件注册
const install = function(Vue) {
    // 遍历并注册所有组件
    components.map((component) => {
        let hasName = !!component.name;
        if (hasName) {
            Vue.component(component.name, component);
        }
    });

    Vue.use(Loading.directive);
    // Vue.use(animate)
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$notify = Notification;
};

//导出全局install
export default {
    install,
    Notification,
};