<template>
    <label class="label">
        <span class="label-content" :class="{'label-active': inputActive}" v-show="showLabel">
            {{ label }}
        </span>
    </label>
    <input 
        class="input" 
        type="text" 
        :placeholder="label"
        :value="modelValue"
        @input="updateValue"
        @focus="updateShowLabel"
        @blur="updateShowLabel"
    >
</template>

<script setup lang="ts">

const props = defineProps<{
    label: string;
    modelValue: string;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: string),
}>();

const updateValue = (event) => {
    emits('update:modelValue', event.target.value);
}

const showLabel = ref(false);
const inputActive = ref(false);

const updateShowLabel = () => {
    if (!props.modelValue) {
        showLabel.value = !showLabel.value;
    }
    inputActive.value = !inputActive.value;
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

.input {
    @include inputMixin;
    border-radius: 2rem;

    &:focus::-webkit-input-placeholder {
        @include inputPlaceholderOnFocus;
    }

    &:focus {
        @include inputBorderOnfocus;
    }
}
</style>