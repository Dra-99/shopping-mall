import Home from "@/views/Home"
import Search from "@/views/Search"
import Login from "@/views/Login"
import Register from "@/views/Register"

export default [
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            showFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        name: 'search',
        meta: {
            showFooter: true
        },
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            showFooter: false
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            showFooter: false
        }
    }
]