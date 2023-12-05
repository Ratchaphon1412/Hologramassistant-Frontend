import { defineStore } from 'pinia'

export const authStore = defineStore('authStore', () => {
    let email = ref("")
    let username = ref("")
    let password = ref("")
    let token = ref("")

    return { email, username, password, token }
},{
    persist: true
})