<template>
  <div id="app">
    <b-navbar type="dark" toggleable="md" variant="danger" >  
      <b-container >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}" exact> 
              Home
            </b-nav-item>
            <b-nav-item :to="{name:'about'}"> 
              About
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
