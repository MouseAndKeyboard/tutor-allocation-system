<script></script>

<template>
  <form>
    <label>
      Name:<br />
      <input type="text" name="name" /><br />
    </label>
    <label>
      Start Time:
      <Datepicker v-model="date" :month-year-component="monthYear" />
    </label>
    <label>
      End Time:
      <Datepicker v-model="date" :month-year-component="monthYear" />
    </label>
  </form>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
