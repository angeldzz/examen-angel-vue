<template>
<div class="container mt-4">
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Mis Compras</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive" v-if="compras && compras.length > 0">
                <table class="table table-striped table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>ID Cubo</th>
                            <th>ID Pedido</th>
                            <th>ID Usuario</th>
                            <th>Fecha Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="compra in compras" :key="compra.idPedido">
                            <td>{{ compra.idCubo }}</td>
                            <td>{{ compra.idPedido }}</td>
                            <td>{{ compra.idUsuario }}</td>
                            <td>{{ compra.fechaPedido }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="alert alert-info" role="alert">
                No hay compras disponibles
            </div>
        </div>
    </div>
    <router-link class="btn btn-secondary m-5" to="/">Volver</router-link>
    <router-link class="btn btn-primary" to="/comprar">Comprar</router-link>
</div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"CompraComponent",
    data() {
        return {
            compras: []
        }
    },
    mounted () {
        const token = localStorage.getItem("token")
        if(token !== null && token !== ""){
            service.getCompras(token).then(response => {
                this.compras = response
            })
        }   
    },
}
</script>

<style>

</style>