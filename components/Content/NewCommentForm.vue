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
            <span class="form-submit-error" v-show="error">
                {{ errorText }}
            </span>
            <a class="btn-grad" @click="addComment">
                Dodaj
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Comment from "@/models/Comment";
import CommentsApi from '@/services/comments/CommentsApi';

const emits = defineEmits<{
    (e: 'updateList'),
}>();

const bp = useBreakpoints();

const newComment = ref<Comment>(new Comment());
const error = ref(false);
const errorText = ref('');

const validate = () => {
    if (!newComment.value.author.trim()) {
        error.value = true;
        errorText.value = 'Brak autora!';
    } else if (!newComment.value.message.trim()) {
        error.value = true;
        errorText.value = 'Brak komentarza!';
    } else {
        error.value = false;
        errorText.value = '';
    }
    return !error.value;
}

const addComment = async () => {
    if (validate()){
        try {
            await CommentsApi.createNewComment(newComment.value);
            newComment.value.message = '';
            newComment.value.author = '';
            emits('updateList');
        } catch(e) {
            console.error(e.message);
        }
    }
}

</script>

<style lang="scss" scoped>
@import 'utils/style/_colors';

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
    display: flex;
    justify-content: flex-end;
}
.form-submit-error {
    color: red;
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 0 2rem;
}
.avatar {
  height: 50px;
  width: 50px;
  background-color: $light-grey;
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  margin-top: 20px;
}
.btn-grad {
    background-image: linear-gradient(to right, $darker-blue 0%, $light-blue  40%);
    padding: 0.75rem 1.75rem;
    text-align: center;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px $shadow;
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