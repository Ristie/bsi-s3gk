<template>
  <div>
      <h1>Resetowanie hasła</h1>
     <div class="login">
        <input type="text" placeholder="Wpisz adres email" v-model="email" />
      </div>
      <h3><button @click="resetPassword">Wyślij zapytanie</button></h3>

  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "forgot",
  components: {},
   data() {
    return {
      email: "",
      error: ""
    };
  },
methods: {
    resetPassword() {
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(this.email).then(() => {
           console.log('Wysłano email');
           alert("Wysłano email")
           this.$router.replace({ name: "login" });
        }).catch((error) => {
            console.log(error);
        });
    }
}
}
</script>

<style lang="scss">
div {
  color: inherit;
}
</style>
