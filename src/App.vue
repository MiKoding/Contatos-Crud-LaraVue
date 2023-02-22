<template>
  <div>
    <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="container">
          <router-link to="/" class="navbar-brand">
            <i class="fa fa-mobile"></i><h2>Vue Contact Manager</h2>
          </router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
