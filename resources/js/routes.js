import { createRouter, createWebHistory } from "vue-router";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: TodoList,
    },
    {
        name: "create",
        path: "/create",
        component: TodoForm,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: TodoForm,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
