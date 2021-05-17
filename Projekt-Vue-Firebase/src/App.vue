<template>
  <div id="app">
    <!-- <header></header> -->
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Główna</router-link>|
      <router-link to="/register">Rejestracja</router-link>|
      <router-link to="/login">Logowanie</router-link>|
      <router-link to="/secret">Dla zalogowanych</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Top-Header";
export default {
  components: {
    "top-header": Header
  }
};
</script>  

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
