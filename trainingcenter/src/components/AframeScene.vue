<template>
    <div id="scene" class="scene">
      <!-- A-Frame Scéna -->
      <a-scene renderer="antialias: true; colorManagement: true; sortObjects: true; physicallyCorrectLights: true; gammaOutput: true;">
         <!-- Načítanie modelov a textúr skladu -->
      <a-assets>
        <a-asset-item id="europalette-model" src="europallete.glb"></a-asset-item>
        <a-asset-item id="boxes" src="boxes.gltf"></a-asset-item>
        <a-asset-item id="switchboard" src="switchboard.gltf"></a-asset-item>
        <a-asset-item id="hangar" src="hangar.glb"></a-asset-item>
        <a-asset-item id="doors" src="doors.glb"></a-asset-item>
        <a-asset-item id="worklight" src="worklight.glb"></a-asset-item>
      </a-assets>

      <!-- Kamera s navigačnými kontrolami -->
      <a-entity camera look-controls wasd-controls="fly: true" position="7 2 -17" rotation="0 -90 0"></a-entity>

      <!-- Osvetlenie scény -->
          <!-- Ambientné svetlo pre jemné osvetlenie celej scény -->
      <a-light type="ambient" color="#555" intensity="5"></a-light>

      <!-- Direkčné svetlo pre realistické tieňovanie -->
      

      <!-- Pozadie scény -->
      <a-entity environment="preset: forest"></a-entity>

      <!-- Modely a objekty... -->
      <a-entity gltf-model="#europalette-model" material="metalness: 0.1; roughness: 0.5;" shadow="cast: true; receive: true" position="0 0 -2" scale="3 3 3"></a-entity>
      <a-entity gltf-model="#hangar" material="metalness: 0; roughness: 0.1;" shadow="cast: true; receive: true" position="0 -1 0" scale="0.5 0.5 0.5"></a-entity>
      <a-entity gltf-model="#switchboard" shadow="cast: true; receive: true" position="7 1 -19.7" scale="3 3 3"></a-entity>
      <a-entity gltf-model="#doors" shadow="cast: true; receive: true" position="0 -2.4 -21" scale="9 10 8"></a-entity>
      <a-entity gltf-model="#boxes" shadow="cast: true; receive: true" position="0 0.5 -2" scale="3 3 3" rotation="0 180 0"></a-entity>
      
      <!-- Lamp with spotlight, ensure it is positioned to cast light effectively -->
      <a-entity gltf-model="#worklight" shadow="cast: true; receive: true" position="8.7 -0.55 -15.26" scale="3 3 3" rotation="0 -174 0">
        <a-light type="spot" castShadow="true" color="#FFF" intensity="10" distance="30" decay="1" 
                position="0 0.2 0" rotation="0 180 0" angle="50">
        </a-light>
      </a-entity>
      
      </a-scene>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AframeScene', // Zmena názvu komponentu na viacslovný
  }
  </script>
  
  <style scoped>
  .scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  </style>
  