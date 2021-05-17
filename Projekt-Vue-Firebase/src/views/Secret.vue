<template>
  <div>
    <h3>
      <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
      <h4>Strona widoczna tylko dla zalogowanych</h4>
    </h3>
    <h4>Zmiana hasła</h4>
     <div class="password">
        <input type="password" placeholder="Nowe hasło" v-model="newPassword" />
      </div>
      <h3>
        <button @click="changePassword">Zmień hasło</button>
        </h3>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      newPassword: "",
      error: "",
      secrets: ""
    };
  },
  mounted() {
    this.getSecrets();
  },
  methods: {
    changePassword() {
      const user = firebase.auth().currentUser;
      user.updatePassword(this.newPassword).then(() => {
      console.log('Hasło zostało zmienione')
      alert("Hasło zostało zmienione")
      firebase.auth().signOut();
      this.$router.replace({ name: "login" });
      }).catch((error) => {
      console.log(error)
      });
      
    },
    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      this.secrets = await this.$axios.get(
        "http://localhost:8080",
        config
      );
      this.secrets = this.secrets.data;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>