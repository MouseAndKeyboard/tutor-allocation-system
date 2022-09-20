<script>
export default {
  props: ["step", "title", "unitAfter", "unitBefore", "value"],
  methods: {},
};
</script>
<template>
  <div class="flex justify-start pb-1 space-x-2 w-full">
    <label class="w-5/12">{{ title }}</label>
    <span class="w-[1%]">{{ unitBefore }}</span>
    <input
      id="quesRate1"
      type="number"
      min="0"
      :step="step"
      v-model="value"
      @input="$emit('onInput', value)"
      class="rounded-md border w-1/4"
    />
    <span class="w-1/6">{{ unitAfter }}</span>
  </div>
</template>
