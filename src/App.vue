<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import store from 'vuex'
import { mapGetters } from 'vuex'
import Llamados from '@/components/Llamados.vue'
import UltimoLlamado from '@/components/UltimoLlamado.vue'
</script>

<script>
export default { 
    computed: {
        ...mapGetters({
        empresa : "getEmpresa"
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
        
    }
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <Llamados/>
      <UltimoLlamado/>
        <b-button>Button</b-button>
          <b-button variant="success">Button</b-button>
      <!-- <button @click="goto('about')">about</button> -->
      <!-- <button @click="goto('home')">home</button> -->

      <!-- <h3>llamados anteriores</h3> -->
     <!--  <HelloWorld msg="empresa" />
       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      -->
    </div>
  </header>

  <RouterView />
</template>

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
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
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
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
