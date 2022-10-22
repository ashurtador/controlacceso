function registroAcceso(tipoIdentidad, numeroIdentidad){

    switch (tipoIdentidad){

        case "cedula":
            unidad= "SELECT unidad FROM peatones WHERE cedula="+numeroIdentidad;

            if (unidad!==null){
                comando= "INSERT INTO registrpo_peatones (cedula,fecha) VALUES ("+numeroIdentidad+",CURRENTTIMESTAMP)"
                console.log("Registro de Acceso Exitoso");
            }
            else{
                console.log("Peaton no registrado");
            }

            break;

        case "placa":
            unidad= "SELECT unidad FROM vehiculos WHERE placa="+numeroIdentidad;

            if (unidad!==null){
                comando= "INSERT INTO registrpo_vehiculos (placa,fecha) VALUES ("+numeroIdentidad+",CURRENTTIMESTAMP)"
                console.log("Registro de Acceso Exitoso");
            }
            else{
                console.log("Vehiculo no registrado");
            }
            
            break;
    }
}