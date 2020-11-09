import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);

import { serverUrl } from "@/utils/tools";

Vue.filter("dalImg", (val) => {
  if (val) {
    if (val.startsWith("http")) {
      return val;
    } else {
      return serverUrl + val;
    }
  } else {
    return "http://pic9.iqiyipic.com/image/20200905/23/47/v_112499987_m_601_m6.jpg";
  }
});

Vue.use(ElementUI);

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
