<template>
    <div class="comments-table">
        <div class="comments-title">
            <span>Komentarze wspierających</span>
            <div>Liczba</div>
        </div>
        <div class="comments-content">
            <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Comment from '@/models/Comment';

const comments: Array<Comment> = [{
    id: 1,
    message: 'Dobra giera',
    author: 'Przykładowy',
    createdAt: new Date(),
},{
    id: 2,
    message: 'Komentarz',
    author: 'Wspierający',
    createdAt: new Date(),
},{
    id: 3,
    message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ipsa, blanditiis earum iusto nemo nam? Voluptatem pariatur deserunt dolor fugiat reiciendis eveniet similique laborum repellat mollitia, esse saepe maiores non',
    author: 'Przykładowy',
    createdAt: new Date(),
}];
</script>

<style lang="scss" scoped>
.comments-content {
    padding: 2rem 0;
}
</style>