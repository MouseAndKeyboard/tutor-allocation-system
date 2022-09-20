<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: ["step", "title"],
  methods: {},
};
</script>
<template>
  <div class="flex justify-start pb-1">
    <label class="w-80">{{ title }}</label>
    <input
      id="quesRate1"
      type="number"
      min="0"
      :step="step"
      v-model="value"
      @input="$emit('onInput', value)"
      class="rounded-md border"
    />
  </div>
</template>
