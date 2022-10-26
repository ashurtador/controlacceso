/*
const API ="https://85e54f31-4e0e-42db-a2bb-0068478ffa50.mock.pstmn.io"

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
*/