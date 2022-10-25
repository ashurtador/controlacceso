import {busquedaRegistroFormulario} from "../components/busquedaRegistroFormulario.js"
import getDataBusquedaRegistro from "../connections/helpers/getDataBusquedaRegistro.js"

const busquedaRegistro= async()=>{

    const busquedas = await getDataBusquedaRegistro ()
/*    return (`
    ${
        busquedas.results.map(busqueda=>
        `
        <ima src="${busqueda.image}" alt="">
        `
         ) 
     }
     `)
*/
    return (` 
    <div>
    ${busquedaRegistroFormulario()}
    </div>
    `)
}

export {busquedaRegistro}