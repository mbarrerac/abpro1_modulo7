<template>  
  <!-- <div class="container-fluid d-flex align-items-center border"> -->
    <div class="container-fluid d-flex align-items-center border bg-primary text-white">


      <div id="logo">
          <a v-on:click="Home"><img src="../assets/logo-p.svg" alt="" width="250"></a>
      </div>
      <div class="d-flex ms-auto me-3">
          <nav>
              <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
                  <router-link class="nav-link px-3" to="/">Inicio</router-link>
                  <router-link class="nav-link px-3" to="/productoPage">Incripcion cursos</router-link>
                  <router-link class="nav-link px-3" to="/cursosPage">Cursos</router-link>
                  <router-link class="nav-link px-3" to="/LoginPage">Login</router-link>
                  <carritoCompra></carritoCompra>
                  <!-- <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button> -->
                  <button type="button" class="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button>

                  <p class="mb-0">{{$store.state.usuarioConectado}}</p>
              </ul>
          </nav>
      </div>
  </div>
  <!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      Esta seguro que desea salir
      <p>{{$store.state.usuarioConectado}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
      <button type="button" v-on:click="logout" class="btn btn-success" data-bs-dismiss="modal">Si</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
import carritoCompra from './carritoCompra.vue';
//19-04-2023
//import {mapState} from 'vuex'
// fin 19-04-20023
export default {
    data (){
    },
    components:{
      carritoCompra,
    },
    methods:{
       logout(){
        this.$store.state.newProducts = []
        this.$store.state.contador = 0
        this.$router.push('/');
       }
    },
    computed:{
      //19-04-2023
     //...mapState(['usuarioConectado'])
     //fin 19-04-2023
     }
}
</script>


<style>
.titulo__pagina{
font-family: 'Montserrat', sans-serif;
padding-bottom: 1em;
}

#login{
    cursor: pointer;
}

#list-contenedor{
    list-style-type: none;

}

.list-item{

    cursor: pointer;

}
</style>