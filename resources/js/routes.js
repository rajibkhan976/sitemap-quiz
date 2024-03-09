import { createRouter, createWebHistory } from "vue-router";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: PostList,
    },
    {
        name: "create",
        path: "/create",
        component: PostForm,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: PostForm,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
