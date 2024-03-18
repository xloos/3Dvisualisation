
<template>
  

  <div class="w-full max-w-7xl mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select tab</label>
      <select id="tabs" @change="changeTab($event.target.value)" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 blsock w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="stats">General</option>
        <option value="about">Milestones</option>
        <option value="faq">Statistics</option>
      </select>
    </div>
    <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
      <li class="w-full">
        <button @click="activeTab = 'stats'" :class="{'bg-gray-100 dark:bg-gray-600': activeTab === 'stats'}" class="inline-block w-full p-4 focus:outline-none">General</button>
      </li>
      <li class="w-full">
        <button @click="activeTab = 'about'" :class="{'bg-gray-100 dark:bg-gray-600': activeTab === 'about'}" class="inline-block w-full p-4 focus:outline-none">Milestones</button>
      </li>
      <li class="w-full">
        <button @click="activeTab = 'faq'" :class="{'bg-gray-100 dark:bg-gray-600': activeTab === 'faq'}" class="inline-block w-full p-4 focus:outline-none">Statistics</button>
      </li>
    </ul>
    <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
      <div v-if="activeTab === 'stats'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
          <div class="lg:flex lg:items-center lg:justify-between p-4">
            <div class="min-w-0 flex-1">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Building the Foundation</h2>
              <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
                    <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                  </svg>
                  PC Building Training Program
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  
                  <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"/>
                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
  
                  VR and AR
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clip-rule="evenodd"/>
                  </svg>
  
                  2h &ndash; 3h
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                  </svg>
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
            <div class="mt-5 flex lg:ml-4 lg:mt-0">
              
              <span class="ml-3 hidden sm:block">
                <button @click="toggleDescription" 
    type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  
                  View Details
                  <svg :class="{ clicked }" class="image -mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>

              <span class="sm:ml-3">
                <button @click="togglePublish" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  
                  <svg class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clip-rule="evenodd"/>
                  </svg>
                  
                  Launch
                </button>
              </span>

              <!-- Dropdown -->
              <div class="relative ml-3 sm:hidden">
                <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                  More
                  <svg class="-mr-1 ml-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>

                <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-200"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div class="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0">Edit</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1">View</a>
                </div>
              </div>
            </div>
            
          </div>
          
          <div v-show="isPublished" class="w-full bg-white sm:p-3 dark:bg-gray-800 dark:border-gray-700">
              
              <div class=" space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <Transition name="bounce">
                  <a v-if="isPublished" @click="openAFrameScene" href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g>
                    <path fill="currentColor" d="M21.7,18H10.3C7.9,18,6,16.1,6,13.7V9.3C6,6.9,7.9,5,10.3,5h11.5C24.1,5,26,6.9,26,9.3v4.5C26,16.1,24.1,18,21.7,18z
                      M10.3,7C9,7,8,8,8,9.3v4.5C8,15,9,16,10.3,16h11.5c1.3,0,2.3-1,2.3-2.3V9.3C24,8,23,7,21.7,7H10.3z"/>
                  </g>
                  <g>
                    <path fill="currentColor" d="M19,11h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S19.6,11,19,11z"/>
                  </g>
                  <path fill="currentColor" d="M9.4,7.1h13.3c0.3,0,0.7-0.2,0.8-0.5c0.2-0.3,0.2-0.6,0.1-1C22.1,2.6,19.6,1,16,1c-3.6,0-6.1,1.6-7.5,4.7
                    C8.3,6,8.3,6.4,8.5,6.7C8.7,7,9,7.1,9.4,7.1z"/>
                  <g>
                    <path fill="currentColor" d="M12,20.3v1.5c-0.9,0.2-1.8,0.5-2.6,0.8c1.6,1,4,1.6,6.6,1.6c2.6,0,5-0.6,6.6-1.6c-0.8-0.3-1.7-0.6-2.6-0.8v-1.5
                      c0.9-0.7,1.7-1.7,2.4-2.8c0.2-0.3,0.2-0.7,0-1S21.9,16,21.5,16h-11c-0.4,0-0.7,0.2-0.9,0.5s-0.2,0.7,0,1
                      C10.4,18.6,11.1,19.6,12,20.3z"/>
                    <path fill="currentColor" d="M24.6,23.7c-1.9,1.6-5,2.6-8.6,2.6c-3.5,0-6.6-1-8.6-2.6c-2.5,1.6-4.1,3.8-4.4,6.2c0,0.3,0.1,0.6,0.2,0.8S3.8,31,4,31H28
                      c0.3,0,0.6-0.1,0.7-0.3s0.3-0.5,0.2-0.8C28.7,27.4,27,25.2,24.6,23.7z"/>
                  </g></svg>
                      <div class="text-left rtl:text-right">
                          <div class="mb-1 text-xs">Open in Virtual Reality</div>
                          <div class="-mt-1 font-sans text-sm font-semibold">Launch VR Experience</div>
                      </div>
                  </a>
                </Transition>
                <Transition name="bounce">
                  <a v-if="isPublished" href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      
                      <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M29.3,22.8L29.3,22.8l-3.9-4.7C24.8,17.4,24,17,23.1,17H8.9c-0.9,0-1.7,0.4-2.3,1.1l-3.9,4.7C2.2,23.3,2,24,2,24.7V27
                        c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3v-2.3C30,24,29.8,23.3,29.3,22.8z M8.2,19.4C8.4,19.1,8.6,19,8.9,19h14.1c0.3,0,0.6,0.1,0.8,0.4
                        l3,3.6H5.1L8.2,19.4z"/>
                      <g>
                        <path fill="currentColor" d="M16.4,1.1c-0.3-0.1-0.6-0.1-0.9,0l-5.9,3L16,6.9l6.4-2.8L16.4,1.1z"/>
                        <path fill="currentColor" d="M9,12c0,0.4,0.2,0.7,0.6,0.9l5.4,2.7v-7L9,6V12z"/>
                        <path fill="currentColor" d="M17,8.6v7l5.4-2.7c0.3-0.2,0.6-0.5,0.6-0.9V6L17,8.6z"/>
                      </g></svg>
                      <div class="text-left rtl:text-right">
                          <div class="mb-1 text-xs">Open in Augmented Reality</div>
                          <div class="-mt-1 font-sans text-sm font-semibold">Launch AR Experience</div>
                      </div>
                  </a>
                </Transition>
              </div>
          </div>
          <Transition :duration="550" name="nested">
          <div v-show="descriptionToggle" class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-2 lg:overflow-visible lg:px-0">
      
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              
              <p class="mt-6 text-xl leading-8 text-gray-700">Welcome to "Building the Foundation," the first step in comprehensive skill development and education program for technical work. This section has been designed to lay a solid foundation for further education, with the necessary theoretical and practical knowledge being provided to prepare you for more advanced techniques and procedures.</p>
            </div>
          </div>
        </div>
        <div class="inner -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="" src="..\assets\pc_open.png" alt="" />
        </div>
        <div class="outer lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <CloudArrowUpIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Preparing the Workspace.</strong> The preparation of a clean, safe, and efficiently organized workspace, fundamental for any technical work, will be taught.</span>
                </li>
                <li class="flex gap-x-3">
                  <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Installing the Processor (CPU).</strong> The process of selecting and installing the processor into the motherboard, including the application of thermal paste and the correct placement of the cooler, will be detailed.</span>
                </li>
                <li class="flex gap-x-3">
                  <ServerIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Installing Memory (RAM).</strong> Instructions on how to select and correctly install memory modules, ensuring the system's optimal performance, will be provided.</span>
                </li>
                <li class="flex gap-x-3">
                  <ServerIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-gray-900">Installing the Motherboard.</strong> Guidance for the safe installation of the motherboard into the computer case, including the correct connection of all cables, will be given.</span>
                </li>
              </ul>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Objective</h2>
              <p class="mt-6">Equipping you with the basic skills and understanding necessary for the efficient and safe assembly and maintenance of technical systems is the main goal of this section. Upon completion of this section, the following will be achieved:</p>
              
              

              <ul class="max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-gray-400">
                  <li>
                    The importance of a well-prepared workspace will be understood.
                  </li>
                  <li>
                    The ability to correctly install key computer components will be acquired.
                  </li>
                  <li>
                    A foundation for the gradual building of more advanced technical skills will be established.
                  </li>
              </ul>

              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Conclusion</h2>
              <p class="mt-6">The "Building the Foundation" section, serving as your first step towards the mastery of technical work, provides a solid base upon which further skills can be built. With dedication and the correct approach to learning, the completion of this section with valuable skills and the confidence necessary to continue in your technical career can be expected.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
        
        </div>
        <div v-if="activeTab === 'about'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Personal Milestones</h2>
            <!-- List -->
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    
  
                    <span class="leading-tight">Preparing the Workspace</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-red-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="leading-tight">Installing the Processor (CPU)</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-red-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="leading-tight">Installing Memory (RAM)</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-red-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="leading-tight">Installing the Motherboard</span>
                </li>
            </ul>
        </div>
        <div v-if="activeTab === 'faq'" class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>
                
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/24/outline'

  export default {
    components: {
      CloudArrowUpIcon,
      LockClosedIcon,
      ServerIcon
  },
    name: 'TrainingPrograms',
    data() {
    return {
      clicked: false,
      isPublished: false, // Stav určujúci, či je obsah spustania zobrazený
      activeTab: 'stats', // Predvolená aktívna záložka
      descriptionToggle: false, // Stav určujúci, či je obsah vysvetlenia zobrazený
    };
  },
    methods: {
      

      openAFrameScene() {
        // Toto otvorí nové okno s A-Frame scénou
        window.open('/aframe-scene.html', '_blank');
      },

      changeTab(tab) {
      this.activeTab = tab;
    },

      togglePublish() {
      this.isPublished = !this.isPublished; // Prepnúť stav zobrazenia
      },

      toggleDescription() {
      this.descriptionToggle = !this.descriptionToggle; // Prepnúť stav zobrazenia
      this.clicked = !this.clicked;
      },
    }
  }
  </script>
  
  <style>

.image {
  transition: transform 0.5s ease-in-out;
}

.clicked {
  transform: rotate(180deg);
}

  .outer, .inner {
  padding: 0px;
}
  
.inner { 
  padding: 0px;
}
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
 
  opacity: 0.001;
}
 .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
  </style>
  