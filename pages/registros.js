import getDataRegistros from "../connections/helpers/getDataRegistros"

const registros = () =>{

return ( `

    <div class="card mt-3 mb-3">
        <div class="card-header">Registros de Acceso</div>
        <div>
            ${getDataRegistros()}
        </div>
    </div>
    
    `)
}
export {registros}