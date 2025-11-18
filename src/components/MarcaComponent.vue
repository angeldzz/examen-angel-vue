<template>
  <div>
        <h1>Cubos de la marca: {{$route.params.marca}}</h1>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-4 col-sm-6 mb-4" v-for="cubo in cubos" :key="cubo.id">
                    <div class="card h-100 shadow-sm">
                        <img :src="cubo.imagen" :alt="cubo.nombre" class="card-img-top" style="height: 250px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ cubo.nombre }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"MarcaComponent",
    data() {
        return {
            cubos: [],
            marca:""
        }
    },
    mounted () {
        this.marca = this.$route.params.marca
        service.getCubosMarcas(this.marca).then(response => {
                this.cubos = response
            })
    },
    watch: {
        '$route.params.marca'(newValue, oldValue) {
            if(newValue !== oldValue){
                this.marca = this.$route.params.marca
                service.getCubosMarcas(this.marca).then(response => {
                this.cubos = response
            })
            }
        }
    },
}
</script>

<style>

</style>