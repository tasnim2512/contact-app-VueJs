<template>
  <div class="bg-blue-100 h-auto">
    <div class="w-full flex justify-center pb-20 flex-wrap px-32">
      <theHeader header="Edit Contact"></theHeader>
      <form @submit.prevent="submitData" class="w-4/12 font-2xl space-y-4 flex flex-wrap justify-center text-left">
        <div class="w-full">
          <label class="py-2">First Name</label>
          <custom-input :isInput="true" type="text" v-model="firstName"></custom-input>
        </div>
        <div class="w-full">
          <label class="py-2">Last Name</label>
          <custom-input :isInput="true" type="text" v-model="lastName"></custom-input>
        </div>
        <div class="w-full">
          <label class="py-2">Email</label>
          <custom-input :isInput="true" type="Email" v-model="email"></custom-input>
        </div>
        <div class="w-full">
          <label class="py-2">Phone</label>
          <custom-input :isInput="true" type="text" v-model="phone"></custom-input>
        </div>
        <custom-button @click="editData" text="Save" inputClass="text-white hover:bg-blue-500"></custom-button>
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
    editData(){
      axios.put('http://localhost:3000/user/'+this.$route.params.id ,{
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        phone:this.phone
      }).then(()=>{
        this.$router.push({name:'contact-list'})
      })
    }
  },

   mounted(){
      axios.get("http://localhost:3000/user/"+this.$route.params.id).then((response) => {
      console.log(response.data)
      this.firstName = response.data.firstName
      this.lastName = response.data.lastName
      this.phoneNumber = response.data.phoneNumber
      this.email = response.data.email
    }); 
  }
}
</script>
