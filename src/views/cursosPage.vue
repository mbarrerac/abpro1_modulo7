<template>
  <headerComp></headerComp>

 

  <div class="container mt-4">
    <h1>Lista de cursos</h1>

    <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#myModalCrear">Crear nuevo curso</button>
 
 
    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cupos</th>
          <th>Inscritos</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <template  v-for="curso in $store.state.producto" :key="curso.codigo">
            <tr v-if="curso.estado">
                <td>{{ curso.codigo }}</td>
                <td>{{ curso.nombre }}</td>
                <td>{{ curso.descripcion }}</td>
                <td>{{ curso.precio }}</td>
                <td>{{ curso.cupos }}</td>
                <td>{{ curso.inscritos }}</td>
                <td>{{ curso.img }}</td>

                <td class="align-middle d-flex justify-content-center align-items-center">
                   <button variant="primary"  data-bs-toggle="modal" :data-bs-target="'#myModal' + curso.codigo" style="width: 50%; height: auto;">&#9998; </button> 
                   <b-button-close variant="danger" @click="eliminarCurso(curso)"  style="width: 50%;">
                    &#128465;
                   </b-button-close>
                </td>

      
                
                <!-- Ventana modal descripcion de producto-->

                <div class="modal fade" :id="'myModal' + curso.codigo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{curso.nombre}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="modificar">
                                    <div class="form-group">
                                        <label for="codigo">Código:</label>
                                        <input type="text" class="form-control" id="codigo" v-model="curso.codigo" >
                                    </div>
                                    <div class="form-group">
                                        <label for="nombre">Nombre:</label>
                                        <input type="text" class="form-control" id="nombre" v-model="curso.nombre">
                                    </div>
                                    <div class="form-group">
                                        <label for="descripcion">Descripción:</label>
                                        <textarea class="form-control" id="descripcion" rows="3" v-model="curso.descripcion"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="precio">Duración en meses:</label>
                                        <input type="number" class="form-control" id="duracion" v-model="curso.duracion">
                                    </div>                                   
                                    <div class="form-group">
                                        <label for="precio">Precio:</label>
                                        <input type="number" class="form-control" id="precio" v-model="curso.precio">
                                    </div>
                                    <div class="form-group">
                                        <label for="cupos">Cupos:</label>
                                        <input type="number" class="form-control" id="cupos" v-model="curso.cupos">
                                    </div>
                                    <div class="form-group">
                                        <label for="img">Imagen:</label>
                                        <input type="text" class="form-control" id="img" v-model="curso.img">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" @click="modificarCurso(curso)" class="btn btn-primary"  data-bs-dismiss="modal" >Guardar y cerrar</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              <!-- Fin Ventana modal -->     
            </tr>
        </template>
      </tbody>
    </table>


    <!-- Ventana modal crear curso-->
    <div class="modal fade" id="myModalCrear" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Crear nuevo curso</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="modificar">
                    <div class="form-group">
                        <label for="codigo">Código:</label>
                        <input type="text" class="form-control" id="codigo" v-model="codigo">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" v-model="nombre">
                    </div>
                    <div class="form-group">
                        <label for="descripcion">Descripción:</label>
                        <textarea class="form-control" id="descripcion" rows="3" v-model="descripcion"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="precio">Duración en meses:</label>
                        <input type="number" class="form-control" id="duracion" v-model="duracion">
                    </div>                                   
                    <div class="form-group">
                        <label for="precio">Precio:</label>
                        <input type="number" class="form-control" id="precio" v-model="precio">
                    </div>
                    <div class="form-group">
                        <label for="cupos">Cupos:</label>
                        <input type="number" class="form-control" id="cupos" v-model="cupos">
                    </div>
                    <div class="form-group">
                        <label for="img">Imagen:</label>
                        <input type="text" class="form-control" id="img" v-model="img">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="submit" @click="crearCurso()" class="btn btn-primary"  data-bs-dismiss="modal" >Guardar y cerrar</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </div>
    </div>
    <!-- Fin Ventana modal crear curso -->    
 </div>
 <footerComp></footerComp>
 </template>
 
<script>

import headerComp from '../components/headerComp.vue'
import footerComp from '../components/footerComp.vue'



import { mapMutations} from 'vuex'
//import store from 'store';

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";
import { doc, setDoc } from "firebase/firestore";

export default {
   
    name: "productoPage",
    components:{
        headerComp,
        footerComp,
    },
    data: function() {
        return {
          inputBuscador: '',
          codigo:'',
          nombre:'',
          descripcion:'',
          precio:'',
          cupos:'',
          img:'',
          duracion:''
            
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
                const nombre1 = element.nombre.toLowerCase();
                const descripcion1 = element.descripcion.toLowerCase();
            
            
                return nombre1.includes(searchTerm) || descripcion1.includes(searchTerm) ;
                })
                }
                
            },
  
            async extraerData() {
                this.$store.state.producto=[]
                this.$store.state.productoTotal=[]
                  const querySnapshot = await getDocs(collection(db, "cursos2023"));
                  console.log(querySnapshot)
                  querySnapshot.forEach((doc) => {
                      const curso = Object.assign({}, doc.data(), { id: doc.id });
                      this.$store.state.producto.push(curso); 
                      this.$store.state.productoTotal = this.$store.state.producto
                  }); 
            },

            async eliminarCurso(cCurso){
                if (window.confirm("¿Esta seguro de eliminar el curso?")){
                  const cursoRef = doc(db, 'cursos2023', cCurso.id);
                  setDoc(cursoRef, { estado: false });
                }
            },


            async modificarCurso(cCurso){
              if (window.confirm("¿Esta seguro de modificar el curso?")){
                 // Add a new document in collection "cities"
                 await setDoc(doc(db, "cursos2023", cCurso.id), {
                 codigo: cCurso.codigo,
                 cupos: cCurso.cupos,
                 descripcion:cCurso.descripcion,
                 duracion:cCurso.duracion,
                 estado:true,
                 img:cCurso.img,
                 nombre:cCurso.nombre,
                 precio: cCurso.precio
                });
              }
              this.extraerData();
            },

            async crearCurso(){
               
                
                const largoArreglo = this.$store.state.productoTotal.length;
                
                let cId = (largoArreglo + 1).toString();
                
                   
                 
                 // Add a new document in collection "cities"
                 await setDoc(doc(db, "cursos2023",cId), {
                 codigo: this.codigo,
                 cupos: this.cupos,
                 descripcion:this.descripcion,
                 duracion:this.duracion,
                 estado:true,
                 img:this.img,
                 nombre:this.nombre,
                 precio:this.precio
                });
              
              this.extraerData();
            },


},
            async mounted() {
                // this.showModal=false
                this.extraerData();
                  
            }

}
  
</script>
