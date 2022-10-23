import {Nav} from "../layouts/Nav.js"

const App=()=>{

    const header = document.querySelector("header")
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")

    header.innerHTML=Nav()


}

export {App}