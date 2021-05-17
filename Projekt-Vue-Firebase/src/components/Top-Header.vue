<template>
  <div>
    Status:
    <div v-if="loggedIn">Zalogowano</div>
    <div v-else>Nie zalogowano</div>
    <button class="but" v-if="loggedIn" @click="signOut">Wyloguj się</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("signed in");
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>