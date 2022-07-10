import {createRouter, createWebHashHistory} from "vue-router";
import mainPage from "@/pages/mainPage";
import edit from "@/components/edit";
import create from "@/components/create";
import info from "@/components/info";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: mainPage, name: 'post'},
        {path: '/create', component: create, name: 'create.post'},
        {path: '/info/:id', component: info, name: 'post.info'},
        {path: '/edit/:id', component: edit, name: 'edit.post'},
    ]
})