<script setup>
import { ElDialog } from 'element-plus';
import { computed,ref } from 'vue'
const props = defineProps({
    inversion: {
        type: Boolean,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    isImage:{
        type:Boolean,
        default:false,
    },
    url:{
        tpye:String,
        default:''
    }
})
const isShow = ref(false)
//最外层包装的样式
const wrapClass = computed(() => {
    return [
        "text-wrap",
        "min-w-[20px]",
        "rounded-md",
        "px-3 py-2",
        props.inversion ? "bg-[#d1e9f9]" : "bg-[#f4f6f8]",
    ]
})
const handleShow = (e)=>{
    isShow.value = true;
}

</script>

<template>
    <div class="res max-w-lg" :class="wrapClass">
        <div v-if="inversion" class="whitespace-pre-wrap">
            <p class="max-w-lg" v-if="!isImage" v-text="text"></p>
        </div>
        <div v-else class="whitespace-pre-wrap">
            <p v-if="!isImage" style="word-wrap:break-word;  word-break:break-all; " class="max-w-lg" v-text="text"></p>
            <img v-if="isImage" class="cursor-zoom-in" :src="url" alt="图片" @click="handleShow">
            <ElDialog v-model="isShow">
                <img :src="url" alt="" class="cursor-zoom-out" draggable="false">
            </ElDialog>
        </div>
    </div>
</template>