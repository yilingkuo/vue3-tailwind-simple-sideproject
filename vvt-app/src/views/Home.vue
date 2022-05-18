<script setup>
import { ref, computed } from '@vue/reactivity'
import { watch } from 'vue'
import * as methods from '../commonjs/methods'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import PageSelect from '@/components/PageSelect.vue'
import { ViewListIcon, ViewGridIcon } from '@heroicons/vue/solid'
import "vue-pagination-tw/styles"
let userdata = ref([])
let loadStatuse = ref(true)
const randomusers = methods.getApi('https://randomuser.me/api/?results=100').then(r => {
  userdata.value = r.results
  loadStatuse.value = false
})

// switch card and list view
let pageNumber = ref(sessionStorage.getItem('page') || 1)
watch (pageNumber, (curVal, preVal) => {
  console.log('cur', curVal)
  console.log('pre', preVal)
  sessionStorage.setItem('page', curVal)
}, {
})

let perpage = ref(30)
let perpageOpts = ref([10, 30, 50])
const currentPageItems = computed(() => {
  return userdata.value.slice((pageNumber.value - 1) * parseInt(perpage.value), (pageNumber.value - 1) * parseInt(perpage.value) + parseInt(perpage.value))
})
const totalRows = computed(() => userdata.value.length)

// emit value to pagination
const pageChange = (val) => {
  pageNumber.value=val
}
const updatePerPage = (val) => {
  console.log(currentPageItems.value)
  console.log('updatePerPage', val)
  console.log(currentPageItems.value)
  perpage.value=val
}

</script>

<template>
  <div class="">

    <div
      class="mx-auto max-w-screen-xl p-4 sm:px-6 lg:flex items-center justify-center  lg:p-6"
    >
      <div v-if="loadStatuse" class="text-center">
        <Spinner size="20" color="teal-400" backgroudColor="gray-300" />
      </div>
      <div v-else >
        <div class="flex justify-end gap-1">
          <PageSelect class="col-1 pr-2" :selected="perpage" :options="perpageOpts" @updatePerPage="updatePerPage" />
          <ViewListIcon class="col-1 w-10 h-10 text-gray-100 rounded pointer-cursor hover:bg-sky-700/50"/>
          <ViewGridIcon class="col-1 w-10 h-10 text-gray-100 rounded hover:bg-sky-700/50"/>
        </div>
        <div class=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <Card  v-for="(user, index) in currentPageItems" :key="index" :profile-photo="user.picture.large" :name="user.name" :detail="user" />
        </div>
        <div class="w-full flex items-center justify-center pt-3">
          <Pagination
            :total-items="totalRows"
            :current-page="pageNumber"
            :per-page="perpage"
            @page-changed="pageChange"
            :go-button="false"
            styled="centered"
          />
        </div>
      </div>
    </div>
  </div>
</template>
