<script setup>
import TodoInput from "./components/TodoInput.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoItem from "./components/TodoItem.vue";

import useTodos from "./composables/useTodos";
import useFilteredTodos from "./composables/useFilteredTodos";

const { todos, addTodo, updateTodoState, deleteTodo, updateTodo } = useTodos();
const { filter, filteredTodos, updateFilter } = useFilteredTodos(todos);

</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-tr from-indigo-600 to-purple-500 py-20"
  >
    <h1 class="text-center text-5xl font-bold text-white">TODOLIST</h1>
    <div class="bg-indigo-50 mt-6 max-w-sm m-auto p-6 rounded-lg shadow-lg">
      <TodoInput @add-todo="addTodo" />
      <TodoFilter :filter="filter" @update-filter="updateFilter" class="mt-6" />
      <transition-group
        tag="ul"
        class="mt-4 space-y-3"
        enter-active-class="transition transform"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <TodoItem
          v-for="item in filteredTodos"
          :key="item.id"
          v-bind="item"
          @update-state="updateTodoState"
          @delete-todo="deleteTodo"
          @update-todo="updateTodo"
        />
      </transition-group>
    </div>
  </div>
</template>

<style scoped></style>
