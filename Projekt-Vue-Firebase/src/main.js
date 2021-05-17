import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZkFx16pfLKCOIOZU-bcOPD9y1Zhuu_0E",
    authDomain: "es-bsi.firebaseapp.com",
    projectId: "es-bsi",
    storageBucket: "es-bsi.appspot.com",
    messagingSenderId: "333221018143",
    appId: "1:333221018143:web:c4cb559a75527be53eb32a",
    measurementId: "G-WKMQPF3V4B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
    console.log("user", user);
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});