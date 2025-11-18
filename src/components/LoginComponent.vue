<template>
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-md-4">
            <div class="card shadow">
                <div class="card-body p-4">
                    <h3 class="card-title text-center mb-4">Iniciar Sesión</h3>
                    <form >
                        <div class="mb-3">
                            <label for="user" class="form-label">Usuario</label>
                            <input 
                                v-model="user" 
                                type="text" 
                                class="form-control" 
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input 
                                v-model="password" 
                                type="password" 
                                class="form-control" 
                            />
                        </div>
                        <div class="d-grid">
                            <button @click.prevent="Login()" class="btn btn-primary">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
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
    name:"LoginComponent",
    data() {
        return {
            user: "",
            password: "",
        }
    },
    methods: {
        Login() {
            service.getToken(this.user,this.password).then(response =>{
                localStorage.setItem("token",response)
                this.$router.push("/perfil").then(()=> window.location.reload())
            })
        }
    },
}
</script>

<style>

</style>