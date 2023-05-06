<template>
  <form class="relative" @submit.prevent="handleAddTodo">
    <input
      type="text"
      v-model="newTodo"
      class="w-full rounded-full focus:ring-0 border-none shadow-lg pl-5"
    />
    <button
      class="absolute right-0 inset-y-0 w-10 h-10 rounded-full text-white bg-gradient-to-t from-indigo-600 to-purple-500"
    >
      +
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(['add-todo'])

const newTodo = ref('')

const handleAddTodo = () => {
  if(!newTodo.value) return
  
  emit('add-todo', newTodo.value)

  newTodo.value = ''
}
</script>

<style></style>
