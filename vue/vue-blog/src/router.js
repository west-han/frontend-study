import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";
import Home from "./components/Home.vue";
import Error from "./components/Error.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/detail/:id(\\d+)',
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment
            }
        ]
    },
    {
        path: "/:anything(.*)",
        component: Error
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;