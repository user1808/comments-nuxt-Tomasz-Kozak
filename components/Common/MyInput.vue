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
.label {
    padding: 1rem 0 0 1.5rem;
    z-index: 2;
    font-size: 10px;
    margin-bottom: -6px;
    height: 10px;

    .label-content {
        background-color: white;
        border: 1px solid grey;
        padding: 0 4px;
        border-radius: 1rem;
    }

    .label-active {
        border: 1px solid #19b0f6;
        color: #19b0f6;
    }
}

.input {
    padding: 1rem;
    font-size: 16px;
    border-radius: 2rem;
    z-index: 1;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border: 1px solid gray;

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    &:focus {
        border: 1px solid #19b0f6;
        outline: none;
    }
}
</style>