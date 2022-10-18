<template>
    <div class="content">
        <ContentNewCommentForm />
        <ContentCommentsTable 
            tableTitle="Komentarze wspierających" 
            :comments="comments" 
            :noCommentsInfo="noCommentsInfo"/>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import Comment from '@/models/Comment';

const comments = ref<Array<Comment>>([]);
const loading = ref(true);
const noCommentsInfo = computed(() => {
    if(loading.value) {
        return 'Ładowanie komentarzy...';
    } else {
        return 'Bądź pierwszym komentującym!'
    }
})

onMounted(async () => {
    const response = await axios.get<Array<Comment>>('http://localhost:3000/comments');
    loading.value = true;
    comments.value = response.data.sort(
        (a: Comment, b: Comment) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    loading.value = false;
})
</script>

<style lang="scss" scoped>
.content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
}
</style>