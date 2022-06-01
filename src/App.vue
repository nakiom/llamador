<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import store from 'vuex'
import { mapGetters } from 'vuex'
import Llamados from '@/components/Llamados.vue'
// import UltimoLlamado from '@/components/UltimoLlamado.vue'
</script>

<template>
    <div class="container-fluid">  
        <div class="row">
            <div class="col-sm-9 col-md-9 col-lg-9">
                <h2> 🗺️Usted se encuentra en <span class="piso-syle">Piso {{piso}}</span></h2>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
                <img src="logo.png" class="logo" alt="{{empresa}}">
            </div>
        </div>

       <!--  <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <h3>Último llamado:</h3>
                <h1 id="ultimo_llamado">{{ultimo_llamado_piso}}</h1>
            </div> 
        </div>
        -->
        <hr>
        <Llamados/>
    </div>
  <RouterView />
</template>

<script>
export default { 
    data(){
        return {
            piso: '',
            ultimo_llamado_piso: ''
        }
    },
    computed: {
        ...mapGetters({
            empresa : "getEmpresa",
        })
    },
    methods: {
        async setEmpresa(){
          await this.$store.dispatch("setEmpresa","una nueva empresa").then(result=>{
              console.log("nombre de empresa cambiada")
            }).catch(error=>{
              console.log(error)
            })
        },
        goto(name) {
            this.$router.push({name:name})
        }
    },    
    mounted () {
        const urlParams = new URLSearchParams(window.location.search);
        this.piso = (urlParams.get("p") > 0 ) ? urlParams.get("p") : 'Debe indicar el piso en el que está instalado el televisor via URL.';
        // this.$router.push({name:name})

        console.log(this.piso)
    }
}
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 6em;
  height: 6em;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

.piso-syle {
    text-shadow: 2px 2px lightblue;
    color: black;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    /*display: flex;*/
    place-items: center;
  }

  #app {
    display: grid;
    /*grid-template-columns: 1fr 1fr;*/
    grid-template-columns: auto;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
