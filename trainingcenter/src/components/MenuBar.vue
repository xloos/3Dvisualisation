<template>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="path-to-your-logo" alt="Logo">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Navigačné odkazy -->
                <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Domov</router-link>
                <router-link to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">O nás</router-link>
                <!-- Odhlásenie -->
                <button @click="logout" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Odhlásiť</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MenuBar',
    methods: {
      logout() {
        // Odstráňte príznak prihlásenia
        localStorage.removeItem('isLoggedIn');
        console.log(localStorage.getItem('isLoggedIn'));
        // Presmerujte na prihlasovaciu stránku alebo kdekoľvek chcete
        this.$router.push('/login');
      },
    },
  };
  </script>
  