import { env } from "../configs/env";

export const putAllproperty = async(id, imagen, titulo='', likes=0) =>{
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, imagen, titulo, likes:0})
        };
        const data = await fetch(`${env.urlApi}/api/`, requestOptions);
        console.log(data)
        return data;

    } catch (error) {
        return error;
    }
}