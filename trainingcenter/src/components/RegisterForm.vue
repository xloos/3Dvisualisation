<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register for an account
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="registerUser">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" name="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" v-model="username">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="password">
            </div>
          </div>
  
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
            <div class="text-sm mt-6 text-center">
              Already have an account?
              <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        username: '',
        password: '',
        showScene: false,
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.username, password: this.password }),
          });
  
          if (response.ok) {
            alert('User registered successfully.');
            this.username = '';
            this.password = '';
          } else {
            const errorMessage = await response.text();
            alert(errorMessage);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
      },
    },
  }
  </script>
  
  <style scoped>
  /* CSS styles for the dashboard */
  #dashboard {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9999;
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
  }
  </style>
  