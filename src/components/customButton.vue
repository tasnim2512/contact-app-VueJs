<template>
  <button :type="type" :class="inputClass" class="bg-blue-600 p-2 rounded-full text-lg font-bold mx-2 w-32">
    {{ text }}
  </button>
</template>

<script>
export default {
  props:{
    type:String,
    text: String,
    inputClass:[String, Array]
  }
}
</script>