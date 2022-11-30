<template>
  <input v-if="isInput"
  :type="type"
    required
    class="border border-blue-400 w-full px-4 py-3 rounded-lg focus:outline-none"
    :value="modelValue"
    @input="(e)=>$emit('update:modelValue', e.target.value)"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  props:{
    isInput:Boolean,
    type:String,
    modelValue:String,
    placeholder:String,
    required:Boolean
  }
}
</script>