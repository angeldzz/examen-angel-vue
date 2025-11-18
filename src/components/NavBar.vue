<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Cubos</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                >Marcas</a
              >
              <ul class="dropdown-menu" v-if="marcas">
                <li v-for="marca in marcas" :key="marca">
                    <router-link :to="'/cubos/' + marca" class="dropdown-item">{{marca}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"NavBar",
    data() {
        return {
            marcas: []
        }
    },
    mounted () {
        service.getMarcas().then(response => {
            this.marcas = response
        })
    },
};
</script>

<style>
</style>