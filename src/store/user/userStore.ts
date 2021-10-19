import { Module } from 'vuex'
import { User } from '@/models/User'
const userModule: Module<UserState, any> = {
    state: {
        user: {
            id: '',
            name: '',
        },
    },
    getters: {},
    mutations: {},
    actions: {},
    namespaced: true,
}

export type UserState = {
    user: User
}
export default userModule
