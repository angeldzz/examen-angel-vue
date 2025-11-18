import axios from "axios"
import Global from "@/Global"
export default class ServiceCubos{
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