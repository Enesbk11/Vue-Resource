import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);

//firebase ID
Vue.http.options.root = "https://[PROJECT_ID].firebaseio.com/message_list.json";

Vue.http.interceptors.push((request, next) => {
  // if(request.method == "POST"){
  //   request.method = "PUT"
  // }
  next(response => {
    response.json = () => {
      return {
        userList : response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
