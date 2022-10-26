const registroAccesoFormulario = ()=>{

    return (     `

    <form class=" justify-content-center">

    <div class="row justify-content-center">
        <div class="col-3">
            <input type="radio" id="peaton" name="identificacion" value="cedula">
            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula"><br>

            <br><button><a>Registrar Peaton</a></button><br>  
           
        </div>
        <div class="col-3">
            <input type="radio" id="vehiculo" name="identificacion" value="placa">
            <label for="placa">Placa:</label>
            <input type="text" id="placa" name="placa"><br>

            <br><button><a>Registrar Vehiculo</a></button><br>  
            
        </div>
      </div>



</form>
    
    `)
} 
export {registroAccesoFormulario}