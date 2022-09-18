<script></script>

<template>
  <form>
    <label>
      Name:<br />
      <input type="text" name="name" /><br />
    </label>
    <label>
      <ul
        class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          v-for="num in Array.from({ length: 12 }, (_, i) => i + 1)"
          class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="vue-checkbox"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >Week {{ num }}</label
            >
          </div>
        </li>
      </ul>
    </label>
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
