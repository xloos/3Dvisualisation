<template>
    <div class="training-programs">
      <h2>My Training Programs</h2>
      <button @click="openAFrameScene">Open 3D Scene</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TrainingPrograms',
    methods: {
      openAFrameScene() {
        // Toto otvorí nové okno s A-Frame scénou
        window.open('/aframe-scene.html', '_blank');
      }
    }
  }
  </script>
  
  <style>
  /* Sem pridajte štýly pre komponentu */
  .training-programs {
    /* Príklad štýlu */
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    text-align: center;
  }
  </style>
  