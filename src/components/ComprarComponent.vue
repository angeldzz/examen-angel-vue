<template>
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Comprar Cubo</h3>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="cuboSelect" class="form-label fw-bold">Selecciona un Cubo:</label>
                    <select v-model="idCubo" name="idCubo" class="form-select form-select-lg">
                        <option value="" disabled selected>Elige un cubo...</option>
                        <option  :value="cubo.idCubo" v-for="cubo in cubos" :key="cubo">
                            {{ cubo.nombre }}
                        </option>
                    </select>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success btn-lg" @click="RealizarCompra()">
                        Realizar Compra
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"ComprarComponent",
    data() {
        return {
            cubos: [],
            idCubo: null
        }
    },
    mounted () {
        service.getCubos().then(response => {
            this.cubos = response;
        })
    },
    methods: {
        RealizarCompra() {
            const token = localStorage.getItem("token")
            if(token !== null && token !== ""){
                service.postCompra(token,this.idCubo).then(() => {
                    console.log("Compra Realizada");
                    this.$router.push("/compras")
                })
            }   
        }
    },
}
</script>

<style>

</style>