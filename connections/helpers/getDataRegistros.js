const API ="https://19bc6240-bb6a-41ff-bbb3-799b20590ec5.mock.pstmn.io"

export default async (id)=>{

    const apiUrl=(id) ? `${API}${id}`:API

    try{
        const response= await fetch(apiUrl)
        const data= await response.json
        return data

    }catch(error){
        console.log("Error en el fetch", error)
    }
}