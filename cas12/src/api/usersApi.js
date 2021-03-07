import {properties} from './../config/properties'

export const getUsers=()=>{
    return fetch(`${properties.api.root}/users`)
        .then(res=>res.json())
        .then(json=> Promise.resolve(json))
        .catch(error=>Promise.reject(error))
}