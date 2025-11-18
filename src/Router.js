import { createWebHistory, createRouter} from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue';
import MarcaComponent from '@/components/MarcaComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import PerfilComponent from '@/components/PerfilComponent.vue';
import CompraComponent from '@/components/CompraComponent.vue';
import ComprarComponent from '@/components/ComprarComponent.vue';
const myRoutes = [
    { path:"/", component:HomeComponent},
    { path:"/cubos/:marca", component:MarcaComponent},
    { path:"/login", component:LoginComponent},
    { path:"/perfil", component:PerfilComponent},
    { path:"/compras", component:CompraComponent},
    { path:"/comprar", component:ComprarComponent},
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;