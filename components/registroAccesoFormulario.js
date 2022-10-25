const registroAccesoFormulario = ()=>{

    return (     `

    <form class=" justify-content-center">

    <div class="row justify-content-center">
        <div class="col-3">
            <input type="radio" id="peaton" name="identificacion" value="cedula">
            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula">
        </div>
        <div class="col-3">
            <input type="radio" id="vehiculo" name="identificacion" value="placa">
            <label for="placa">Placa:</label>
            <input type="text" id="placa" name="placa">
        </div>
      </div>

<div class="d-grid gap-2 col-2 mx-auto">
    <br><button><a>Registrar</a></button><br>  
</div>

</form>
    
    `)
} 
export {registroAccesoFormulario}