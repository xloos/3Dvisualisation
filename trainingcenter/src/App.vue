<template>
  <div id="app">
    <!-- Zobraziť MenuBar len ak je užívateľ prihlásený -->
    <MenuBar v-if="isLoggedIn" />
    <router-view />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    // Skontrolujte stav prihlásenia pri vytvorení komponenty
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // Alebo ak používate sessionStorage
    // this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
</script>