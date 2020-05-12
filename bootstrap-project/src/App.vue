<template>
  <div id="app">
    <b-navbar type="dark" toggleable="md" variant="danger" >  
      <b-container >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="about"> About</b-nav-item>
            <b-nav-item to="grid"> Grid</b-nav-item>
            <b-nav-item to="cards"> Cards</b-nav-item>
            <b-nav-item to="form"> Form</b-nav-item>
            <b-nav-item to="validacion"> Validacion</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>


    <b-container>
          <router-view/>
    </b-container>
  </div>
</template>
