function verificacionPeaton(cedula){
    unidad= "SELECT unidad FROM peatones WHERE cedula="+cedula;
    var verificacion= unidad !== null;
    return verificacion
}

function verificacionVehiculo(placa){
    unidad= "SELECT unidad FROM vehiculos WHERE placa="+placa;
    var verificacion= unidad !== null;
    return verificacion
}

function registroAcceso(tipoIdentidad, numeroIdentidad){
    switch (tipoIdentidad){
        case "cedula":

            verificacionPeaton(numeroIdentidad);

            switch (verificacion){

            case true: 
                comando= "INSERT INTO registrpo_peatones (cedula,fecha) VALUES ("+numeroIdentidad+",CURRENTTIMESTAMP)"
                mensaje= "Registro de Acceso Exitoso"; break;

            case false:
                mensaje="Peaton no registrado"; break;
            }
        break;
        case "placa":

            verificacionVehiculo(numeroIdentidad);

            switch (verificacion){

            case true: 
                comando= "INSERT INTO registrpo_vehiculos (placa,fecha) VALUES ("+numeroIdentidad+",CURRENTTIMESTAMP)"
                mensaje="Registro de Acceso Exitoso";; break;

            case false:
                mensaje="Vehiculo no registrado"; break;
            }
        break;
    }
    return mensaje;
}

function registroUsuarioPeaton (cedula, nombres, apellidos, unidad, rv, vehiculo){
    verificacionPeaton(cedula);

            switch (verificacion){

            case true: 
                mensaje= "El peaton ya esta registrado"; break;

            case false:
                comando= "INSERT INTO peatones (cedula, nombres, apellidos, unidad, rv, vehiculo) VALUES ("+cedula+","+nombres+","+apellidos+","+unidad+","+rv+","+vehiculo+")"
                mensaje="Peaton registrado Exitosamente"; break;
            }

    return mensaje;
}

function registroUsuarioVehiculo (placa, unidad, rv){
    verificacionVehiculo(placa);

            switch (verificacion){

            case true: 
                mensaje= "El vehiculo ya esta registrado"; break;

            case false:
                comando= "INSERT INTO vehiculos (placa, unidad, rv) VALUES ("+placa+","+unidad+","+rv+")"
                mensaje="Vehiculo registrado Exitosamente"; break;
            }

    return mensaje;
}

function busquedaRegistro (tipo,identificacion){

    switch (tipo){

        case "cedula":
            comandoCedula= "SELECT * FROM registro_peatones WHERE cedula="+identificacion;
            comandoPlaca= "";
        break;

        case "placa":
            comandoCedula="";
            comandoPlaca= "SELECT * FROM registro_vehiculo WHERE placa="+identificacion;
        break;

        case "unidad":
            busquedaCedula="SELECT cedula FROM registro_peatones WHERE unidad="+identificacion;
            busquedaPlaca="SELECT placa FROM registro_vehiculos WHERE unidad="+identificacion;
            comandoCedula= "SELECT * FROM registro_peatones WHERE cedula="+busquedaCedula;
            comandoPlaca= "SELECT * FROM registro_vehiculo WHERE placa="+busquedaPlaca;
        break;
    }
    return comandoCedula, comandoPlaca;
}