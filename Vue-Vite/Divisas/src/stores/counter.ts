import {defineStore} from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () =>({
        counter: 0,
        numberOfChangas: 0
    }),
    actions: {
        incrementBy( value: number){
            this.counter += value
            this.numberOfChangas +=1
        }        
    }
})
