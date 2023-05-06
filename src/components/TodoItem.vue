<template>
  <li class="bg-white rounded-md flex justify-between">
    <div class="flex items-center px-5 py-2">
      <input
        type="checkbox"
        :checked="props.isDone"
        @change="updateState"
        class="mr-2 text-indigo-600 rounded-full w-5 h-5 focus:ring-0 focus:ring-offset-0"
      />
      <div
        v-if="!isEditing"
        class="p-1 text-indigo-700"
        :class="props.isDone ? 'line-through' : ''"
        @dblclick="editTodo"
      >
        {{ content }}
      </div>
      <input
        v-else
        type="text"
        v-model="content"
        ref="editInput"
        @keyup.enter="updateTodo"
        @keyup.esc="cancelEdit"
        class="p-1 border-transparent border-none focus:ring-indigo-600 rounded-md text-indigo-700"
      />
    </div>
    <button
      class="px-5 py-3 text-indigo-300 hover:text-red-600"
      @click="deleteTodo"
    >
      <TrashIcon class="w-5 h-5" />
    </button>
  </li>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { TrashIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  id: Number,
  content: String,
  isDone: Boolean,
});
const emit = defineEmits(["update-state", "delete-todo", "update-todo"]);

const isEditing = ref(false);
const content = ref(props.content);
const editInput = ref(null);
const isCancel = ref(false)

const updateState = (e) => {
  emit("update-state", props.id, e.target.checked);
};

const deleteTodo = () => {
  emit("delete-todo", props.id);
};

const editTodo = () => {
  isEditing.value = true;

  // 要操作 DOM 就必須要使用 `nextTick()`，等待 Vue 更新完 DOM
  nextTick(() => {
    // 聚焦輸入框
    editInput.value.focus();
  });
};

const cancelEdit = () => {
  isCancel.value = true
  content.value = props.content
  // 關閉編輯狀態
  isEditing.value = false
}

const updateTodo = () => {
  if(isCancel.value){
    isCancel.value = false
    return
  }
  if(!isEditing.value) return

  emit("update-todo", props.id, content.value);
  isEditing.value = false;
};
</script>
