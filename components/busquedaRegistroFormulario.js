const busquedaRegistroFormulario = ()=>{

    
    return (     `
    <form>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        <input type="radio" id="unidad" name="unidad" value="unidad">
                        <label for="unidad">Unidad:</label>
                        <input type="text" id="unidad" name="unidad">
                    </div>
                    <div class="col">
                        <input type="radio" id="peaton" name="identificacion" value="cedula">
                        <label for="cedula">Cédula:</label>
                        <input type="text" id="cedula" name="cedula">
                    </div>
                    <div class="col">
                        <input type="radio" id="vehiculo" name="identificacion" value="placa">
                        <label for="placa">Placa:</label>
                        <input type="text" id="placa" name="placa">
                    </div>
                </div>
                <div class="d-grid gap-2 col-2 mx-auto">
                    <br><button><a>Buscar</a></button><br>  
                </div>
            </div>
    </form>
    
    `)
} 
export {busquedaRegistroFormulario}