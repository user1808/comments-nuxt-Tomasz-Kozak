<template>
    <label class="label">
        {{ label }}
    </label>
    <textarea
        class="textarea" 
        type="text"
        :rows="rows || '5'"
        :placeholder="label"
        :value="modelValue"
        @input="updateValue"
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

</script>

<style lang="scss" scoped>
.label {
    padding-left: 1.5rem;
    z-index: 1;
}

.textarea {
    padding: 1rem;
    font-size: 16px;
    font-family: inherit;
    resize: none;
    border-radius: 1rem;
    z-index: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border: 1px solid gray;

    &::-webkit-input-placeholder {
        font-family: 'Lato';
    }

    &:focus::placeholder {
        color: transparent;
    }
}
</style>