const busquedaRegistroFormulario = ()=>{

    
    return (     `
    <form>
            <div class="container">
                <div class="row align-items-start">
                    
                    <div class="col">
                        <input type="radio" id="peaton" name="identificacion" value="cedula">
                        <label for="cedula">Cédula:</label>
                        <input type="text" id="cedula" name="cedula"><br>

                        <br><button><a>Buscar Peaton</a></button><br>  
                      
                    </div>
                    <div class="col">
                        <input type="radio" id="vehiculo" name="identificacion" value="placa">
                        <label for="placa">Placa:</label>
                        <input type="text" id="placa" name="placa"><br>

                        <br><button><a>Buscar Vehiculo</a></button><br>      
                    </div>
                </div>
                
            </div>
    </form>
    
    `)
} 
export {busquedaRegistroFormulario}