<template>
    <label class="label">
        {{ label }}
    </label>
    <input 
        class="input" 
        type="text" 
        :placeholder="label"
        :value="modelValue"
        @input="updateValue"
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

</script>

<style lang="scss">
.label {
    padding-left: 1rem;
    z-index: 1;
}

.input {
    padding: 1rem;
    font-size: 16px;
    border-radius: 2rem;
    z-index: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border: 1px solid gray;
}
</style>