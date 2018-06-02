import Vue from 'vue'
import Router from 'vue-router'
import AthenaPane from '@/components/AthenaPane'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'AthenaPane',
        component: AthenaPane
    }]
})
