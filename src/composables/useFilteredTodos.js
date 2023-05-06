import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
  const filter = ref("all");

  const filteredTodos = computed(() => {
      if (filter.value === "isDone") {
        return todos.value.filter((item) => {
          return item.isDone;
        });
      } else if (filter.value === "unDone") {
        return todos.value.filter((item) => {
          return !item.isDone;
        });
      }
      return todos.value;

    // return {
    //     all: todos.value,
    //     isDone: todos.value.filter((item) => item.isDone),
    //     unDone: todos.value.filter((item) => !item.isDone),
    //   }[filter.value];
  });

  const updateFilter = (newFilter) => {
    filter.value = newFilter;
  };

  return {
    filter,
    filteredTodos,
    updateFilter,
  };
}
