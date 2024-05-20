import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chatStore', () => {
  const chatList = ref([])
  const scroll = ref()
  const imgUrls = ref([])
  const addChat = (param) => {
    chatList.value.push(param)
  }
  const updateChat = (text) => {
    chatList.value.at(-1).text = text
  }
  const addUrl = (url)=>{
    imgUrls.value.push(url)
  }
  return {
    scroll,
    chatList,
    addChat,
    updateChat,
    imgUrls,
    addUrl
  }
})

export const store = createPinia()
export const setupStore = (app)=>{
  app.use(store)
}


