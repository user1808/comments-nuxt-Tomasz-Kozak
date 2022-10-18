<template>
    <div class="comments-table">
        <div class="comments-title">
            <div class="comments-title-text">
                Komentarze wspierających
            </div>
            <div class="comments-title-number">
                {{ comments.length }}
            </div>
        </div>
        <div class="comments-content" v-if="comments.length > 0">
            <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
        <div class="no-comments-content" v-else>
            Bądź pierwszym komentującym!
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
.comments-table {
    padding: 1rem;
    width: 100%;
}
.comments-content {
    padding: 2rem 0;
}
.comments-title {
    display: flex;
}
.comments-title-text {
    display: flex;
    align-items: center;
    font-size: 18px;
}
.comments-title-number {
    border-radius: 50%;
    width: 23px;
    height: 23px;

    border: 2px solid #1669c4;
    color: #1669c4;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 0.5rem;
}
.no-comments-content {
    padding: 2rem 0;
    text-align: center;
    font-size: 24px;
    color: grey;
}
</style>