<template>
  <div>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white text-center">
                        <h3><i class="bi bi-person-circle"></i> Perfil de Usuario</h3>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="text-muted fw-bold">ID Usuario</label>
                            <p class="h5">{{ usuario.idUsuario }}</p>
                        </div>
                        <div class="mb-3">
                            <label class="text-muted fw-bold">Nombre</label>
                            <p class="h5">{{ usuario.nombre }}</p>
                        </div>
                        <div class="mb-3">
                            <label class="text-muted fw-bold">Email</label>
                            <p class="h5">{{ usuario.email }}</p>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" @click="$router.push('/')">
                            <i class="bi bi-arrow-left"></i> Volver
                        </button>
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
    name:"PerfilComponent",
    data() {
        return {
            usuario: []
        }
    },
    mounted () {
        const token = localStorage.getItem("token")
        if(token !== null && token !== ""){
            service.getPerfil(token).then(response => {
                this.usuario = response
            })
        }   
    },
}
</script>

<style>

</style>