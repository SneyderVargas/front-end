import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        menssage: 'Mensaje Store',
        drawer: true
    }),
    actions: {
        setMenssage(newMessage: string) {
            this.menssage = newMessage
        },
        setDrawer(newDrawer: boolean){
            this.drawer = newDrawer
        }
    },
    getters: {
        upper (): string {
            return this.menssage.toUpperCase()
        },
        getDrawer (): boolean {
            return this.drawer
        }
    }
})