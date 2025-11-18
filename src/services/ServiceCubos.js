import axios from "axios"
import Global from "@/Global"
export default class ServiceCubos{
    getToken(user, pass){
        return new Promise(function(resolve, reject){
            let url = Global.url + "api/Manage/Login"
            let data = {
                    email: user, 
                    password: pass
                }
            axios.post(url, data).then(response => {
                resolve(response.data.response)
            }).catch(err => reject(err))
        })
    }
    getPerfil(token){
        return new Promise(function (resolve, reject) {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
            let url = Global.url + "api/Manage/PerfilUsuario"
            axios.get(url, config).then(response => {
                resolve(response.data)
            }).catch(err => reject(err))
        })
    }
    getCompras(token){
        return new Promise(function (resolve, reject) {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
            let url = Global.url + "/api/Compra/ComprasUsuario"
            axios.get(url, config).then(response => {
                resolve(response.data)
            }).catch(err => reject(err))
        })
    }
    postCompra(token, id){
        return new Promise(function (resolve, reject) {
            const data = []
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
            let url = Global.url + "/api/Compra/InsertarPedido/" + id
            axios.post(url, data, config).then(response => {
                resolve(response)
            }).catch(err => reject(err))
        })
    }
    getCubos(){
        return new Promise(function (resolve) {
            let url = Global.url + "api/Cubos"
            axios.get(url).then(response => {
                resolve(response.data)
            })
        })
    }
    getMarcas(){
        return new Promise(function (resolve) {
            let url = Global.url + "api/Cubos/Marcas"
            axios.get(url).then(response => {
                resolve(response.data)
            })
        })
    }
    getCubosMarcas(marca){
        return new Promise(function (resolve) {
            let url = Global.url + "api/Cubos/CubosMarca/" + marca
            axios.get(url).then(response => {
                console.log(response);
                resolve(response.data)
            })
        })
    }
}