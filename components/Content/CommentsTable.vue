<template>
    <div class="comments-table">
        <div class="comments-title">
            <div class="comments-title-text">
                {{ tableTitle }}
            </div>
            <div class="comments-title-number">
                {{ comments.length }}
            </div>
        </div>
        <div class="comments-content" v-if="comments.length > 0">
            <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
        <div class="no-comments-content" v-else>
            {{ noCommentsInfo }}
        </div>
    </div>
</template>

<script setup lang="ts">
import Comment from '@/models/Comment';

const props = defineProps<{
    tableTitle: string,
    comments: Array<Comment>,
    noCommentsInfo: string,
}>()

</script>

<style lang="scss" scoped>
.comments-table {
    padding: 1rem;
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