import { useLocalStorage } from "@vueuse/core";

export default function useTodos() {
  const todos = useLocalStorage("todos", [
    {
      id: 1,
      content: "待處理事件一",
      isDone: false,
    },
    {
      id: 2,
      content: "待處理事件二",
      isDone: false,
    },
    {
      id: 3,
      content: "待處理事件三",
      isDone: false,
    },
  ]);

  const findTodoIndex = (id) => {
    return todos.value.findIndex((item) => {
      return item.id === id;
    });
  };

  const addTodo = (val) => {
    todos.value.push({
      id: Date.now(),
      content: val,
      isDone: false,
    });
  };

  const updateTodoState = (id, newState) => {
    const index = findTodoIndex(id);
    if (index === -1) return;

    todos.value[index].isDone = newState;
  };

  const deleteTodo = (id) => {
    const index = findTodoIndex(id);
    if (index === -1) return;

    todos.value.splice(index, 1);
  };

  const updateTodo = (id, newContent) => {
    const index = findTodoIndex(id);
    if (index === -1) return;

    if (newContent) {
      todos.value[index].content = newContent;
    } else {
      // 如果在編輯狀態下儲存空字串，就刪除該 todo
      deleteTodo(id);
    }
  };

  return {
    todos,
    addTodo,
    updateTodoState,
    deleteTodo,
    updateTodo,
  };
}
