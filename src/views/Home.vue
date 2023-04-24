<template>
  <headerComp></headerComp>
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <img alt="Vue logo" src="../assets/logo.png" width="100"/>
        <!-- <p class="h3 display-3 text-muted">Te Vendo</p> -->
        <p class="fst-italic py-5">Encuentra todo lo que necesitas aca</p>
        <Button type="button" class="btn--ver" ><router-link class="nav-link px-3" to="/productoPage">Ver Cursos</router-link></Button>
      </div>
    </div>
  </div>


  <!-- <div>
        <button @click="extraer">extract</button>
        <button @click="insertar">INSERTAR</button>
        <button @click="eliminar">eliminar</button>
        <ul>
            <li v-for="item in cursos" :key="item">
              {{ item.id }}
              {{ item.codigo }}
              {{ item.nombre }}
            </li>
        </ul>
    </div> -->



  <footerComp></footerComp>
</template>


<script>
// @ is an alias to /src
import headerComp from '../components/headerComp.vue'
import footerComp from '../components/footerComp.vue'
import { doc, setDoc } from "firebase/firestore";
// import { doc, deleteDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


import { db } from "@/services/auth.service";


// import { doc, deleteDoc } from "firebase/firestore";

export default {
  name: "Home-Root",
  data: function() {
        return {
          nombre:'',
        cursos:[],
      
        };
        },
  components: {
    headerComp,
    footerComp
  },
  mounted(){
    this.extraer();
  },
  methods:{
    async extraer() {
       
      const querySnapshot = await getDocs(collection(db, "cursos2023"));
      
       console.log(querySnapshot)
       querySnapshot.forEach((doc) => {
       console.log(doc.id, " => ", doc.data().nombre);

       const curso = Object.assign({}, doc.data(), { id: doc.id });
       this.cursos.push(curso);

          //  this.cursos.push(doc.data());
       });
       console.log('estes es el curso');
       console.log(this.cursos);
       
       },

    async insertar() {
        // Add a new document in collection "cities"
        await setDoc(doc(db, "cursos2023", "4"), {
        codigo: '0004',
        cupos: '4',
        descripcion:'curso 4',
        duracion:'4',
        estado:true,
        img:'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
        inscritos:'0',
        nombre:'curso 4 version 4.0',
        precio: '40000'
        });
       
        this.extraer();
        },
   // async eliminar() {


        // await deleteDoc(doc(db, "cursos1", "3"));
        // this.extraer();
        // },

 
     },





    
}



</script>

<style>
.btn--ver{
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  margin-top: auto;
  text-align: center;
  transition: color 100ms;
  
  touch-action: manipulation;
  font-family: 'Montserrat', sans-serif;
  }
</style>