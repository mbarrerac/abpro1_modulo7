<template>
  <div>
    <div class="img"><img alt="Vue logo" src="../assets/logo-p.png" width="100" /></div>
    <h2>Iniciar sesión</h2>
    <form class="d-flex flex-column" @submit.prevent="login">
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="ejemplo@mail.cl" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="tu contraseña" required />
      </div>
      <button type="submit" v-on:click="login()" class="btn btn-primary rounded-pill">Iniciar sesión</button>

    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
  <footerComp></footerComp>
</template>


<script>
import footerComp from '../components/footerComp.vue'
import { auth } from "../auth/auth.service";

export default {
name: "Home-Root",
components: {
footerComp
},
data() {
    return {
    email: '',
    password: '',
    error: '',
    usuarioConectado: 'Invitado',
    }
    
},
methods: {

    login() {
       this.error = 'Correcto'
      auth
        .signInWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(function (fbUser) {
          console.log('Respuesta ',fbUser);
                
        })
       
        .catch((err) => {
            this.error = 'Problema con usuario, verifique información'
          console.log(err);
         
          
        });
        // console.log(this.error)
         if (this.error==='Correcto'){
        //     this.error=''
        this.$store.state.usuarioConectado=this.email
        this.$router.push('/productoPage')
            
           
         }

    },




    },
};
</script>

<style>
h2{
padding-top: 40px;
text-align: center;
font-family: 'Montserrat', sans-serif;
}
form {
padding-left: 50px;
padding-right: 50px;
}

label {
display: block;
margin-bottom: 10px;
margin-top: 30px;
font-family: 'Montserrat', sans-serif;
}

input {
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
width: 100%;
margin-bottom: 50px;
font-family: 'Montserrat', sans-serif;
}

.btn{
margin-top: 20px;
margin-bottom: 20px;
padding: 8px;
width: 100%;
}

button {
background-color: blue;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-size: 14px;
font-weight: 500;
height: 50px;
width: 20em;
line-height: 20px;
list-style: none;
margin: 0;
margin-top: auto;
outline: none;
padding: 10px 20px;
position: relative;
text-align: center;
text-decoration: none;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
font-family: 'Montserrat', sans-serif;
}

button:hover {
background-color: #6572ca;
color: #424242;
font-family: 'Montserrat', sans-serif;
}

.error {
color: red;
margin-top: 20px;
}
/* .img{
    text-align: center;
    padding-top: 5em;
} */

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* ajusta la altura según lo que necesites */
  margin: 10em 0; /* ajusta el margen según lo que necesites */
}

</style>
