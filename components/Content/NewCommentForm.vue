<template>
    <div class="form">
        <span class="form-title">
            Dodaj komentarz
        </span>
        <div class="form-content">
            <CommonMyAvatar class="form-content-avatar" v-if="bp.lSm"/>
            <form>
                <CommonMyInput label="Autor" v-model="newComment.author"/>
                <CommonMyTextarea label="Komentarz" v-model="newComment.message"/>
            </form>
        </div>
        <div class="form-submit">
            <span class="form-submit-error" v-show="error">
                {{ errorText }}
            </span>
            <a class="button-gradient" @click="addComment">
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
@import 'utils/style/_mixins';

.form {
    @include flex-column;
    padding: 1rem;

    .form-title {
        font-size: 18px;
        padding: 0.5rem 0;
    }

    .form-content {
        display: flex;
        padding-top: 1rem;

        .form-content-avatar {
            margin-top: 20px;
        }

        form {
            @include flex-column;
            flex-grow: 1;
        }
    }

    .form-submit {
        text-align: right;
        padding: 2rem 0;
        display: flex;
        justify-content: flex-end;
        
        .form-submit-error {
            @include flex-align-center;
            color: red;
            font-weight: 600;
            padding: 0 2rem;
        }

        .button-gradient {
            @include button-gradient;
        }
    }
}
</style>