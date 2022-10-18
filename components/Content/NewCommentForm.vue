<template>
    <div class="form">
        <span class="form-title">
            Dodaj komentarz
        </span>
        <div class="form-content">
            <span class="avatar" v-if="bp.lSm"/>
            <form>
                <CommonMyInput label="Autor" v-model="newComment.author"/>
                <CommonMyTextarea label="Komentarz" v-model="newComment.message"/>
            </form>
        </div>
        <div class="form-submit">
            <a class="btn-grad">
                Dodaj
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Comment from "@/models/Comment";


const bp = useBreakpoints();

const newComment = ref<Comment>(new Comment());

</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.form-title {
    font-size: 18px;
    padding: 0.5rem 0;
}
.form-content {
    display: flex;
    padding-top: 1rem;
}
form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.form-submit {
    text-align: right;
    padding: 2rem 0;
}
.avatar {
  height: 50px;
  width: 50px;
  background-color: #e8e8e8;
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  margin-top: 20px;
}
.btn-grad {
    background-image: linear-gradient(to right, #1669c4 0%, #1980f6  40%);
    padding: 0.75rem 1.75rem;
    text-align: center;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 2rem;
    white-space: nowrap;
    cursor: pointer;
}
.author-input {
    padding: 1rem;
    font-size: 16px;
    border-radius: 2rem;
    z-index: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border: 1px solid gray;
}
</style>