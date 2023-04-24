<template>
        <headerComp></headerComp>
         <!-- Buscar usuarios   -->
         <div class="seccion__buscar">
              <input id="inputBuscador" v-model="inputBuscador" v-on:keyup="buscarProducto()" type="Buscar" class="form-control rounded" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-addon"  />
              <button type="button" class="btn-buscar" v-on:click="buscarProducto()">Buscar</button>
         </div>

           <section id="input-actual">
            <div id="input-wrapper">
                <input type="text" name="" id="id-actual" placeholder="ID" readonly>
                <input type="text" name="" id="nombre-actual" placeholder="Nombre">
                <input type="number" name="" id="precio-actual" placeholder="Precio" min="0">
                <input type="text" name="" id="link-actual" placeholder="Link">
                <input type="number" name="" id="stock-actual" placeholder="Stock" min="0">
                <input type="text" name="" id="etiqueta-actual" placeholder="Etiquetas">
                <input type="text" name="" id="descripcion-actual" placeholder="Descripción">
                <input type="number" name="" id="categoria-actual" placeholder="Cat" min="26" max="28">
                <button id="aceptar-producto" class="btn btn--green" onclick="return validarCampos()"><i class="fa fa-check"></i></button>
                <button id="cancelar-producto" class="btn btn--rojo"><i class="fa fa-remove"></i>
                </button>
            </div>
        </section>

        <section id="titulos">
            <h2>ID</h2>
            <h2>Nombre</h2>
            <h2>Precio</h2>
            <h2>Link</h2>
            <h2>Stock</h2>
            <h2>Etiqueta</h2>
            <h2>Descripción</h2>
            <h2>Categoría</h2>
            <h2>Editar</h2>

            <div class="container-fluid row justify-content-center gap-3 ">
                 <template  v-for="fila in $store.state.producto" :key="fila.name">
                    <div class="card col-3 mx-2 mt-4" v-if="fila.stock > 0" style="width: 18rem; margin: 3em;" >  
                   </div>
                </template>
            </div>       
        </section>
</template>


<script>

import headerComp from '../components/headerComp.vue'
import footerComp from '../components/footerComp.vue'

//inicio 19-04-2023
//import {mapState, mapMutations} from 'vuex'
// fin 19-04-2023

import { mapMutations} from 'vuex'
//import store from 'store';

export default {
   
    name: "productoPage",
    components:{
        headerComp,
        footerComp,
    },
    data: function() {
        return {
        // newProducts:[],

        //inicio 19-04-2023
        // producto2: [],//inicio 19-04-2023
        // productoTotal2:[]
        // fin 19-04-2023

        inputBuscador: ''
        };
        },

    computed: {
    //inicio 19-04-2023
    // ...mapState(['newProducts']),
    // ...mapState(['productoTotal']),
    // fin 19-04-2023

    //...mapState(['producto'])

    },
    watch:{

    },    
    methods:{
        ...mapMutations(['registrarProducto']),
 
            buscarProducto: function (){
                if (this.inputBuscador === ''){
                this.$store.state.producto = this.$store.state.productoTotal;
                }else {            
                
                const searchTerm = this.inputBuscador.toLowerCase();
                this.$store.state.producto = this.$store.state.producto.filter(element => {
                const name1 = element.name.toLowerCase();
                const description1 = element.description.toLowerCase();
            
            
                return name1.includes(searchTerm) || description1.includes(searchTerm) ;
                })
                }
                
            },
  
            async extraerData() {
                let resultado;
            try {
                const response = await fetch("../../data.json");
                if (!response.ok) {
                    throw new Error("No se pudo obtener el archivo de datos");
                }
                resultado = await response.json();
                return resultado;

                } catch (error) {
                    console.error(error);
                }
            }
        },
        async mounted() {
            this.$store.state.producto = await this.extraerData();
            this.$store.state.productoTotal = this.$store.state.producto
            //19-04-2023
            // this.producto2 = await this.extraerData();
            // this.$store.commit('cargarProducto', this.producto2)
            // this.$store.commit('cargarProducto2', this.producto2)
             // fin 19-04-2023
        }

    }
  
</script>