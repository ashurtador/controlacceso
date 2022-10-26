
const API ="https://baa994c4-3af0-48fe-b187-1434d36c9dec.mock.pstmn.io"

export default async (id)=>{

    const apiUrl=(id) ? `${API}${id}`:API

    try{
        const response= await fetch(apiUrl)
        const data= await response.json
        return data

    } catch (error){
        console.log("Error en el fetch", error)
    }
}
