<template>
  <div class="flex space-x-2">
    <button
      class="font-semibold transition-colors"
      :class="props.filter === 'all' ? 'text-indigo-600 hover:text-indigo-800' : 'text-indigo-300 hover:text-indigo-400'"
      @click="updateFilter('all')"
    >
      全部
    </button>
    <button
      class="font-semibold transition-colors"
      :class="props.filter === 'unDone' ? 'text-indigo-600 hover:text-indigo-800' : 'text-indigo-300 hover:text-indigo-400'"
      @click="updateFilter('unDone')"
    >
      未完成
    </button>
    <button
      class="font-semibold transition-colors"
      :class="props.filter === 'isDone' ? 'text-indigo-600 hover:text-indigo-800' : 'text-indigo-300 hover:text-indigo-400'"
      @click="updateFilter('isDone')"
    >
      已完成
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  filter: String,
});

const emit = defineEmits(['update-filter'])

const updateFilter = (val) => {
  emit('update-filter', val)
}
</script>
