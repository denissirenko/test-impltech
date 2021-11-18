import {root} from './config';


export const api = Object.freeze({
    people: {
        fetch: ()=>{
            return fetch(`${root}/people`, {
                method: 'GET',
            })
        }
    },
    planets: {
        fetch: ()=>{
            return fetch(`${root}/planets`, {
                method: 'GET',
            })
        }
    },
    starships: {
        fetch: ()=>{
            return fetch(`${root}/sratships`, {
                method: 'GET',
            })
        }
    }
})
