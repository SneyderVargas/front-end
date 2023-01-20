import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        menssage: 'Mensaje Store'
    }),
    actions: {
        setMenssage(newMessage: string) {
            this.menssage = newMessage
        }
    },
    getters: {
        upper (): string {
            return this.menssage.toUpperCase()
        }
    }
})