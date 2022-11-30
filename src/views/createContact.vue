<template>
<div class="bg-blue-100 h-auto">
  <div class="w-full flex justify-center pb-20 flex-wrap px-32">
    <theHeader header="Create Contact"></theHeader>
    <form @submit.prevent="submit" class="w-4/12 font-2xl space-y-4 flex flex-wrap justify-center text-left">
      <div class="w-full">
        <label class="py-2" for="">First Name</label>
        <custom-input :isInput="true" type="text" v-model="firstName"></custom-input>
      </div>
       <div class="w-full">
        <label class="py-2" for="">Last Name</label>
        <custom-input :isInput="true" type="text" v-model="lastName"></custom-input>
      </div>
       <div class="w-full">
        <label class="py-2" for="">Email</label>
        <custom-input :isInput="true" type="Email" v-model="email"></custom-input>
      </div>
       <div class="w-full">
        <label class="py-2" for="">Phone</label>
        <custom-input :isInput="true" type="text" v-model="phone"></custom-input>
      </div>
      <custom-button @click="submitData" text="Save" inputClass="text-white hover:bg-blue-500"></custom-button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
    }
  },
  methods: {
    submitData(){
      axios.post('http://localhost:3000/user',{
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        phone:this.phone
      }).then(()=>{
        this.$router.push({name:'contact-list'})
      })
    }
  },
}
</script>
