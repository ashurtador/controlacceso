import { Footer } from "../layouts/Footer.js"
import { Nav } from "../layouts/Nav.js"
import {registroAcceso} from "../pages/registroAcceso.js"
import { registroUsuario } from "../pages/registroUsuario.js"
import { busquedaRegistro } from "../pages/busquedaRegistro.js"
import {error404} from "../pages/Error404.js"
import getHash from "../connections/helpers/getHash.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"

const Rutas={
    "/registroAcceso":registroAcceso,
    "/registroUsuario":registroUsuario,
    "/busquedaRegistro":busquedaRegistro,
//    "/error404":error404,
}

const App= async()=>{

    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    header.innerHTML=await Nav()
    footer.innerHTML=await Footer()

    let ruta=resolverRutas(getHash())
    let pagina=(Rutas[ruta])?Rutas[ruta]:error404
    main.innerHTML=await pagina()

//    console.log(location.hash.slice(1).split("/")[1])

}

export {App}