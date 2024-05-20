import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/index.vue'
// import header from '@/components/message/header.vue'
//import Aside from '@/components/message/aside.vue'
// import mainChat from '@/components/message/mainChat.vue'
// import mainChatBody from '@/components/message/mainChat/text.vue'
import chat from '@/views/chat.vue'
import test from '@/views/test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/login',
        components:{
          'login':Index,
        }
      },
      {
        path:'/register',
        components:{
          'login':Index,
        }
      },
      {
        path:'/index',
        name:'index',    
        component:chat,  
      },
      {
        path:'/test',
        name:"test",
        component:test,
      },
      {
        path:'/',
        redirect:'/login',
      },
  ]
})

export default router
