<template>
    <div class="content">
        <ContentNewCommentForm @updateList="fetch"/>
        <ContentCommentsTable 
            tableTitle="Komentarze wspierających" 
            :comments="comments" 
            :noCommentsInfo="noCommentsInfo"/>
    </div>
</template>

<script setup lang="ts">
import Comment from '@/models/Comment';
import CommentsApi from '@/services/comments/CommentsApi';

const comments = ref<Array<Comment>>([]);
const loading = ref(true);
const noCommentsInfo = computed(() => {
    if(loading.value) {
        return 'Ładowanie komentarzy...';
    } else {
        return 'Bądź pierwszym komentującym!'
    }
})

const fetch = async () => {
    try {
        loading.value = true;
        comments.value = await CommentsApi.fetchAllComments();
    } catch(e) {
        console.error(e.message);
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    await fetch();
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