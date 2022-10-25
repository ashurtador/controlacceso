const registroUsuarioFormulario = ()=>{

    return (     `

    <form>
        
        <div>
            <input type="radio" id="peaton" name="identificacion" value="1">
            <label for="peaton">Peaton</label><br><br>
            <label for="cedula">Cédula:</label><br>
            <input type="text" id="cedula" name="cedula" maxlength="20"><br>
            <label for="nombres">Nombres:</label><br>
            <input type="text" id="nombres" name="nombres"maxlength="100"><br>
            <label for="cedula">Apelliodos:</label><br>
            <input type="text" id="apellidos" name="apellidos"maxlength="100"><br>
            <label for="nombres">Unidad:</label><br>
            <input type="text" id="unidad" name="unidad" maxlength="10"><br>
            <label for="cedula">Residente/Visitante:</label><br>
            <input type="text" id="residente_visitante" name="residente_visitante" maxlength="10"><br>
            <label for="nombres">Vehiculo:</label><br>
            <input type="text" id="vehiculo" name="vehiculo" maxlength="10"><br><br>
            <button><a>Registrar Peaton</a></button> 
        </div>
            
    </div>

        <div class="col-3">
            <div >
                <input type="radio" id="vehiculo" name="identificacion" value="2">
                <label for="vehiculo">Vehiculo</label><br><br>
                <label for="cedula">Placa:</label><br>
                <input type="text" id="placa" name="placa"><br>
                <label for="nombres">Unidad:</label><br>
                <input type="text" id="unidad" name="unidad"><br>
                <label for="cedula">Residente/Visitante:</label><br>
                <input type="text" id="residente_visitante" name="residente_visitante"><br><br>
                <button><a>Registrar Vehiculo</a></button> 
            </div>
        </div>
    </form>
    
    `)
} 
export {registroUsuarioFormulario}