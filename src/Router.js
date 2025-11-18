import { createWebHistory, createRouter} from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue';
import MarcaComponent from '@/components/MarcaComponent.vue';
const myRoutes = [
    { path:"/", component:HomeComponent},
    { path:"/cubos/:marca", component:MarcaComponent},
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;