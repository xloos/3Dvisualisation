<template>
  <div class="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
      <div class="relative">
        <button
          id="dropdownRadioButton"
          @click="toggleDropdown"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <svg
            class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
            />
          </svg>
          {{ selectedTimeRange }}
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownRadio"
          v-show="dropdownOpen"
          class="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 fixed mt-1"
          style="max-height: 300px; overflow-y: auto;"
        >
          <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <li v-for="(label, index) in timeRanges" :key="index">
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  :id="'filter-radio-' + index"
                  type="radio"
                  :value="label"
                  v-model="selectedTimeRange"
                  @change="filterTable"
                  name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  :for="'filter-radio-' + index"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  {{ label }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          v-model="searchQuery"
          @input="filterTable"
          class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Course Name</th>
          <th scope="col" class="px-6 py-3">End Date</th>
          <th scope="col" class="px-6 py-3">Time Spent</th>
          <th scope="col" class="px-6 py-3">Attempts</th>
          <th scope="col" class="px-6 py-3">First Time Opened</th>
          <th scope="col" class="px-6 py-3">Completed</th>
          <th scope="col" class="px-6 py-3">View Details</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in filteredItems"
          :key="index"
          :class="{
            'border-b border-success-200 bg-green-100 text-neutral-800': item.IsCompleted,
            'border-b border-warning-200 bg-red-100 text-neutral-800': !item.IsCompleted,
          }"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                :id="'checkbox-table-search-' + index"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="'checkbox-table-search-' + index" class="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.CourseName }}
          </th>
          <td class="px-6 py-4">{{ formatDate(item.EndDate) }}</td>
          <td class="px-6 py-4">{{ item.TimeSpent }}</td>
          <td class="px-6 py-4">{{ item.Attempts }}</td>
          <td class="px-6 py-4">{{ formatDateTime(item.FirstOpen) }}</td>
          <td class="px-6 py-4">
            <span v-if="item.IsCompleted" class="text-green-500">✔️</span>
            <span v-else class="text-red-500">❌</span>
          </td>
          <td class="px-8 py-4">
            <router-link :to="{ name: 'Trainingprograms'}">
              {{ console.log(item.StatID) }}
            <button class="text-blue-800 dark:text-blue-500 ">
              <i class="fa-solid fa-square-caret-right custom-icon"></i>
            </button>
          </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

const dropdownOpen = ref(false);
const searchQuery = ref('');
const selectedTimeRange = ref('Last year');
const timeRanges = ['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'];

const courses = ref([]);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const filterTable = () => {
  const filteredByDate = courses.value.filter((item) => {
    const date = new Date(item.FirstOpen);
    const now = new Date();
    let dateLimit;
    switch (selectedTimeRange.value) {
      case 'Last day':
        dateLimit = new Date(now.setDate(now.getDate() - 1));
        break;
      case 'Last 7 days':
        dateLimit = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'Last 30 days':
        dateLimit = new Date(now.setDate(now.getDate() - 30));
        break;
      case 'Last month':
        dateLimit = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'Last year':
        dateLimit = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        dateLimit = new Date(now.setDate(now.getDate() - 30));
    }
    return date >= dateLimit;
  });

  return filteredByDate.filter((item) =>
    item.CourseName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

const filteredItems = computed(() => filterTable());

const formatDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

const formatDateTime = (dateTime) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return new Date(new Date(dateTime).getTime() - (2 * 60 * 60 * 1000)).toLocaleString('en-GB', options); // Odčítanie 2 hodín
};

onMounted(async () => {
  try {
    const response = await fetch('/api/statistics/user/1'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    courses.value = await response.json();
  } catch (error) {
    console.error('Error fetching course statistics:', error);
  }
});
</script>

<style>
.custom-icon {
  font-size: 1.5rem; /* Zväčšená základná veľkosť ikony */
  transition: transform 0.2s ease-in-out; /* Animácia pri hover */
}

.custom-icon:hover {
  transform: scale(1.2); /* Mierne zväčšenie ikony pri hover */
}
</style>
