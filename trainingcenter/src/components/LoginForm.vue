<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="loginUser">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="login-username" class="sr-only">Username</label>
              <input id="login-username" name="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" v-model="loginUsername">
            </div>
            <div>
              <label for="login-password" class="sr-only">Password</label>
              <input id="login-password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="loginPassword">
            </div>
          </div>
  
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
            <div class="text-sm mt-6 text-center">
                Don't have an account?
                <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
                Register now
                </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.loginUsername,
            password: this.loginPassword,
          }),
        });

        if (response.ok) {
          // Prihlásenie bolo úspešné
          console.log('Login successful');
          
          console.log(localStorage.getItem('isLoggedIn'));
          localStorage.setItem('isLoggedIn', 'true');
          console.log(localStorage.getItem('isLoggedIn'));
          // Tu môžete pridať logiku pre presmerovanie alebo zobrazenie úspešnej správy
          // Napríklad môžete uložiť token do localStorage a presmerovať užívateľa
          this.$router.push('/mainpage'); // Presmerovanie na hlavnú stránku
        } else {
          // Prihlásenie zlyhalo
          console.log('Login failed');
          // Zobrazte chybovú správu alebo upozornenie
          alert('Invalid username or password');
        }
      } catch (error) {
        console.error('Error:', error);
        // Spracovanie chyby, napríklad zobrazenie chybovej správy
        alert('An error occurred. Please try again.');
      }
    },
  },
}
</script>
  