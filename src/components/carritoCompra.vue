<template >
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#carrito__compra">
        <img src="../assets/shopping-cart.png" width="18" alt="carrito">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {{$store.state.contador}}
                 <span class="visually-hidden">unread messages</span>
                 </span>
    </button>

<div  class="modal fade" id="carrito__compra" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                    </div>

                    <div class="card rounded-3 mb-4">
                        <div v-for="carro in $store.state.newProducts" :key="carro.name" class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                         
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                 <p class="precio--u" style="color: black; font-size: 20px; margin: 0;" > Código: {{carro.codigo}}</p>
                                 <p class="precio--u" style="color: black; font-size: 20px; margin: 0; white-space: nowrap;" > Nombre: {{carro.nombre}}</p>
                            </div>

  
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">

                                
                                <h5 class="precio--t">Total {{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(carro.precio)}}</h5>

                               

                            
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" v-on:click="eliminarProducto(carro)" class="text-danger"><i class="fas fa-trash fa-lg"> X </i></a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body d-flex gap-1">
                            <button v-on:click="vaciarCarro" type="button" class="btn-vaciar">Vaciar Carrito</button>
                            <button type="button" class="btn-procesar" v-on:click="procesarPago">Procesar el pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  </div>
</div>
 
</template>   


<script>
//19-04-2023
// import {mapState, mapMutations} from 'vuex'
//
import {mapMutations} from 'vuex'

export default {
data(){
    return{
        // //productos: [],
        
    };
},

computed: {
    //19-04-2023
    // ...mapState(['newProducts']),
    // ...mapState(['contador'])
    //
   
  },

methods: {
    ...mapMutations(['eliminarProducto']),
    ...mapMutations(['vaciarCarro']),
    ...mapMutations(['calcularProducto']),
    ...mapMutations(['procesarPago']),
    ...mapMutations(['inputHandler']),

}  


}

</script>
<style>

.precio--u{
color:green;
display: inline-block;
width: 120%;
font-size: 12px;
list-style: none;
padding: 10px 16px;
text-align: center;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
font-family: 'Montserrat', sans-serif;
}

.precio--t{
background-color:green;
border-radius: 8px;
color: #FFFFFF;
width: 150%;
display: inline-block;
font-size: 16px;
list-style: none;
padding: 10px 16px;
text-align: center;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
font-family: 'Montserrat', sans-serif;
}

.btn-vaciar {
    background-color: blue;
    border-radius: 8px;
    border-style: none;  
    box-sizing: border-box;
    margin-right: 0!important;
} 

.modal {
    --bs-modal-width: 900px!important;
}
</style>