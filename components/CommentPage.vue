<template>
    <div class="content">
        <ContentNewCommentForm 
            @updateList="fetch"/>
        <ContentCommentsTable 
            tableTitle="Komentarze wspierających" 
            :comments="comments" 
            :noCommentsInfo="error ? 'Ups... Coś poszło nie tak...' : noCommentsInfo"/>
    </div>
</template>

<script setup lang="ts">
import Comment from '@/models/Comment';
import CommentsApi from '@/services/comments/CommentsApi';

const comments = ref<Array<Comment>>([]);
const loading = ref(true);
const error = ref(false);
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
        error.value = false;
    } catch(e) {
        console.error(e.message);
        error.value = true;
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    await fetch();
})
</script>

<style lang="scss" scoped>
@import 'utils/style/_mixins';

.content {
    @include flex-column;
    margin: 0 auto;
    justify-content: center;
    max-width: 800px;
}
</style>