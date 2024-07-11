<template>
  <div id="app" class="flex h-full bg-gray-100 space-y-10">
    <!-- SideBar, zobrazený iba ak je užívateľ prihlásený -->
    <div v-if="isLoggedIn" class="sidebar flex-shrink-0" >
      <SideBar />
    </div>

    <!-- Obsah a router-view zaberajú zvyšný priestor -->
    <div class="content flex flex-1 flex-col px-4" >
      <router-view />
      <!-- Dashboard Content -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
  setup() {
    const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');

    onMounted(() => {
      // Vytvoríme event listener, ktorý počúva na custom event 'login-change'
      window.addEventListener('login-change', () => {
        isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
      });
    });

    return { isLoggedIn };
  }
};
</script>
<style>
@media (min-width: 640px) {.sidebar {
  flex-basis: 265px; /* Pevná šírka pre SideBar */
  max-width: 265px; /* Pre istotu, aby sa SideBar nezväčšoval nad túto hodnotu */
}
}

</style>