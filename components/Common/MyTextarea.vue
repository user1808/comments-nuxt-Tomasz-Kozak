<template>
    <label class="label">
        <span class="label-content" :class="{'label-active': textareaActive}" v-show="showLabel">
            {{ label }}
        </span>
    </label>
    <textarea
        class="textarea" 
        type="text"
        :rows="rows || '5'"
        :placeholder="label"
        :value="modelValue"
        @input="updateValue"
        @focus="updateShowLabel"
        @blur="updateShowLabel"
    />
</template>

<script setup lang="ts">

const props = defineProps<{
    label: string,
    rows?: number,
    modelValue: string,
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: string),
}>();

const updateValue = (event) => {
    emits('update:modelValue', event.target.value);
}

const showLabel = ref(false);
const textareaActive = ref(false);

const updateShowLabel = () => {
    if (!props.modelValue) {
        showLabel.value = !showLabel.value;
    }
    textareaActive.value = !textareaActive.value;
}

</script>

<style lang="scss" scoped>
@import 'utils/style/_colors';
@import 'utils/style/_inputMixins';

.label {
    @include inputLabel;

    .label-content {
        @include inputInactiveContent;
    }

    .label-active {
        @include inputActiveContent;
    }
}

.textarea {
    @include inputMixin;
    font-family: inherit;
    resize: none;
    border-radius: 1rem;

    &::-webkit-input-placeholder {
        font-family: 'Lato';
    }

    &:focus::placeholder {
        @include inputPlaceholderOnFocus;
    }

    &:focus {
        @include inputBorderOnfocus;
    }
}
</style>