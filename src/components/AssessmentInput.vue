<script></script>

<template>
  <form>
    <label>
      Name:<br />
      <input type="text" name="name" /><br />
    </label>
    <label>
      <table>
        <tr>
          <th>Week</th>
          <th>Assessment</th>
        </tr>
        <tr v-for="num in Array.from({ length: 12 }, (_, i) => i + 1)">
          <td>
            {{ num }}
          </td>
          <td>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Default checkbox</label
              >
            </div>
          </td>
        </tr>
      </table>
    </label>
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
