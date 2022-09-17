<script setup></script>

<template>
  <main>
    <h1 className="text-4xl font-bold">Tutor Allocation System</h1>
    <h2 className="text-2xl font-bold">Enter Assessment Dates</h2>
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
  </main>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
