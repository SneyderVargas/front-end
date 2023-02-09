import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        menssage: 'Mensaje Store',
        drawer: true,
        progresCircule:  false
    }),
    actions: {
        setMenssage(newMessage: string) {
            this.menssage = newMessage
        },
        setDrawer(newDrawer: boolean){
            this.drawer = newDrawer
        },
        setProgresCircule(newProgresCircule: boolean){
            this.progresCircule = newProgresCircule
        }
    },
    getters: {
        upper (): string {
            return this.menssage.toUpperCase()
        },
        getDrawer (): boolean {
            return this.drawer
        },
        getProgresCircule (): boolean{
            return this.progresCircule
        }
    }
})