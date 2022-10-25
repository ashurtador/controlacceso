const Nav=()=>{

    return (` 

  <nav>
      
      <div class="nav text-center" style="width:100%">
        <div class="card-body">
          <a class="card-title" href="#/registroAcceso/"><h1>Sistema de Control de Acceso</h1></a>
        </div>
      </div>

      <ul class="nav justify-content-center nav-tabs" >
          <li class="nav-item">
            <a class="nav-link" href="#/registroAcceso/">Registro de Acceso</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/registroUsuario/">Registro de Usuario</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/busquedaRegistro/">Busqueda de Registro</a>
          </li>

      </ul>
    
  </nav>  
    `)
}

export {Nav}