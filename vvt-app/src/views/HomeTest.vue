<script setup>
import { ref, computed } from '@vue/reactivity'
import * as methods from '../commonjs/methods'
import Card from '@/components/Card.vue'
import VuePaginationTw from 'vue-pagination-tw'
import Pagination from '@/components/Pagination.vue'
// import { ViewList, View } from '@heroicons/vue/solid'
import "vue-pagination-tw/styles"

let userdata = ref([])
let loadStatus = ref(true)
const randomusers = methods.getApi('https://randomuser.me/api/?results=100').then(r => {
  userdata.value = r.results
  loadStatus.value = false
})

let pageNumber = ref(1)
let perpage = ref(10)
const currentPageItems = (() => {
  return userdata.value.slice((pageNumber.value - 1) * parseInt(perpage.value), (pageNumber.value - 1) * parseInt(perpage.value) + parseInt(perpage.value))
})
const totalRows = computed(() => userdata.value.length)
// emit value to child
const pageChange = (val) => {
  pageNumber.value=val
}
</script>

<template>
  <div class="bg-gray-200">

    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex items-center justify-center lg:py-16 lg:px-8"
    >
      <div v-if="loadStatus" class="text-center">
        <svg role="status" class="w-20 h-20 mr-2 text-gray-300 animate-spin dark:text-gray-600 fill-teal-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
      <div v-else>
        <!-- <div class="flex justify-end">
          <div class="mb-3 xl:w-30">
            <select v-model="perpage"  @click="updatePageNumber" class="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option selected >每頁顯示筆數</option>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
          </div>
        </div> -->
        <div class=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <Card  v-for="(user, index) in currentPageItems" :key="index" :profile-photo="user.picture.large" :name="user.name" />
        </div>
      </div>

    </div>
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex items-center justify-center lg:py-16 lg:px-8">
      <!-- <VuePaginationTw
        :total-items="100"
        :current-page="pageNumber"
        :per-page="perpage"
        @page-changed="pageChange"
        :go-button="false"
        styled="centered"
      /> -->
      <Pagination
       :total-items="100"
        :current-page="pageNumber"
        :per-page="perpage"
        @page-changed="pageChange"
        :go-button="false"
        styled="centered"
      />
    </div>
  </div>
</template>
