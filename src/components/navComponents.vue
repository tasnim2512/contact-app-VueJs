<template>
  <div class=" bg-blue-300 flex flex-wrap py-10 px-32 text-white font-semibold justify-center items-center">
    <div class="w-8/12 flex justify-start">
      <router-link v-if="create" @click="create=false" class="bg-blue-600 rounded-full p-4 capitalize" to="/create-contact">Create New contact</router-link> 
      <router-link v-else @click="create=true" class="bg-blue-600 rounded-full p-4 capitalize" to="/">Back to Home page</router-link> 
    </div>
    <div class="flex w-4/12 font-semibold items-center space-x-4">
      <router-link  @click="create=true" class="bg-blue-600 rounded-full py-4 px-2 w-4/12 " to="/">Home</router-link> 
      <router-link @click="create=true" :to="{name:'contact-list'}" class="bg-blue-600 rounded-full py-4 px-2 w-4/12 ">Contact-list</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      create: true
    }
  },
}
</script>