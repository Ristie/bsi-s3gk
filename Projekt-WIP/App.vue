<template>
  <div id="app">
    <Nav />
  <div class="auth-wrapper">
    <div class="auth-inner">
      <router-view />
    </div>
  </div>

  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  box-sizing: border-box;
}

body {
  background: #16b8e0 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body, html, #app, #root, .auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #1497b8;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center !important;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password, .forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #1497b8;
}

.btn-primary {
background-color: #16b8e0 !important;
}
.btn-primary:hover {
background-color: #1497b8 !important;
}
.btn-primary:active {
  background-color: #16b8e0 !important;
}
.btn-primary:visited {
  background-color: #1497b8 !important;
}
</style>
