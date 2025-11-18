<template>
<div class="container mt-4">
    <div class="row g-4">
        <div class="col-md-4 col-lg-3" v-for="cubo in cubos" :key="cubo.id">
            <div class="card h-100 shadow-sm">
                <img :src="cubo.imagen" :alt="cubo.nombre" class="card-img-top">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ cubo.nombre }}</h5>
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
    name:"HomeComponent",
    data() {
        return {
            cubos: []
        }
    },
    mounted () {
        service.getCubos().then(response => {
            this.cubos = response;
        })
    },
}
</script>
<style>
</style>