<template >
  <div class="bg-blue-100 h-auto">
    <div class="w-full justify-center flex">
      <div class="w-8/12">
      <theHeader header="Contact List"></theHeader>
        <custom-input @input="searchContact" :isInput="true" placeholder="Search by First Name" v-model="searchValue"></custom-input>
        <div class="w-full overflow-x-auto pt-10">
            <table id="table" class="w-full">
              <thead class="text-white bg-blue-600">
                <tr class="">
                  <th class="p-3">Name</th>
                  <th class="p-3">Email</th>
                  <th class="p-3">Phone Number</th>
                  <th class="p-3">Actions</th>
                </tr>
              </thead>
              <tbody class="">
                <tr v-for="(data, index) in contactList" :key="index" class="">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">{{data.firstName}} {{data.lastName}}</td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{data.email}}</td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{data.phone}}</td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 hover:font-medium cursor-pointer">
                    <router-link :to="{ name: 'edit-contact', params: { id: data.id }}" class="text-green-700 bg-transparent" text="Edit"></router-link>
                    <custom-button @click="deleteContact(data.id)" inputClass="text-red-500 bg-transparent" text="Delete"></custom-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  data() {
    return {
      contactList:[],
      searchValue:'',
    }
  },
  methods:{
    searchContact(){
      if(this.searchValue!==''){
        axios.get("http://localhost:3000/user").then((response) => {
        this.contactList = response.data
        let nameArray='';
        let newArray=[];
        for (let i = 0; i < this.contactList.length; i++) {
          nameArray=this.contactList[i].firstName.toLowerCase()
          if(nameArray.search(this.searchValue.toLowerCase())>-1){
            newArray.push(this.contactList[i])
          }
        }
        this.contactList=newArray
        })
      }
      else{
         axios.get("http://localhost:3000/user").then((response) => {
          this.contactList = response.data
      })
      }
    },
    deleteContact(id){
      axios.delete("http://localhost:3000/user/" +id).then(() => {
          this.contactList = this.contactList.filter(row=>row.id != id);
      })
    }
  },
    mounted(){
      axios.get("http://localhost:3000/user", ).then((response) => {
          this.contactList=response.data;
      });
    },
}
</script>
