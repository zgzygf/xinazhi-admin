import Vue from 'vue'
import Vuex from 'vuex'

import shoping from './modules/shop'
import user from './modules/user'
import merchant from './modules/merchant'
import adminrole from './modules/adminrole'
import permission from './modules/permission'
import docclass from './modules/docclass'
import activity from './modules/activity'
import message from './modules/message'

import api from '../fetch/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token:null
    },
    modules:{
        shoping,
        user,
        merchant,
        adminrole,
        permission,
        docclass,
        activity,
        message,

    },
    actions:{
      async login({ commit,state },param) {
                // debugger;
             await api.login()
                    .then(res => {
                        state.token=res.token; 
                    })
        }
    }
})