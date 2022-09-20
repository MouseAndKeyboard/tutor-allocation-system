<script>
import { reactive } from "vue";
const assessmentWks = reactive(new Array(12).fill(false));
export default {
  data() {
    return {
      assessmentWks,
    };
  },
};
</script>

<template>
  <form class="grid grid-cols-2">
    <ul
      class="w-48 text-sm font-medium text-gray-900 rounded-lg divide-y divide-lightgrey dark:text-white"
    >
      <li
        v-for="num in Array.from({ length: 6 }, (_, i) => i + 1)"
        class="w-full"
      >
        <div class="flex items-center pl-3">
          <input
            id="vue-checkbox"
            type="checkbox"
            v-model="assessmentWks[num]"
            class="w-4 h-4 text-blue-600"
          />
          <label
            for="vue-checkbox"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Week {{ num }}</label
          >
        </div>
      </li>
    </ul>
    <ul
      class="w-48 text-sm font-medium text-gray-900 divide-y divide-lightgrey dark:text-white"
    >
      <li
        v-for="num in Array.from({ length: 6 }, (_, i) => i + 7)"
        class="w-full"
      >
        <div class="flex items-center pl-3">
          <input
            id="vue-checkbox"
            type="checkbox"
            v-model="assessmentWks[num]"
            class="w-4 h-4 text-blue-600"
          />
          <label
            for="vue-checkbox"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Week {{ num }}</label
          >
        </div>
      </li>
    </ul>
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
