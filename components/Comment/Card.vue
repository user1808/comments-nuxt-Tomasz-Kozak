<template>
    <div class="comment-card">
        <CommonMyAvatar />
        <div class="comment-card-content">
            <div class="comment-card-title">
                <span class="comment-card-header">{{ comment.author }}</span>
                <span class="comment-card-subheader">
                    {{ formatTimeDiff(new Date(comment.createdAt)) }} temu
                </span>
            </div>
            <div class="comment-card-text">
                {{ comment.message }}
            </div>
            <div class="comment-card-actions">
                <a>Odpowiedz</a>
                <a class="vertical-line">Edytuj</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Comment from "@/models/Comment";
import { formatTimeDiff } from "@/utils/time"

const props = defineProps<{
    comment: Comment
}>();

</script>

<style lang="scss" scoped>
@import 'utils/style/_colors';

a {
    color: $darker-blue;
    padding: 0 1rem;
    cursor: pointer;
}
.comment-card {
    display: flex;
    background: white;
    margin: 1rem 0;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
.comment-card-header {
    font-size: 14px;
    padding: 2px 0;
}
.comment-card-subheader {
    font-size: 12px;
    color: grey;
    padding: 2px 0;
}
.comment-card-content {
    flex-grow: 1;
}
.comment-card-title {
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: center;
}
.comment-card-text {
    padding: 1.5rem 0;
    font-size: 12px;
}
.comment-card-actions {
    text-align: end;
}
.vertical-line {
    border-left: 1px solid grey;
}
</style>