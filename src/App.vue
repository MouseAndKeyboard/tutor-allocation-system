<script>
  import sim from '/src/utils/otpimal_allocations.js';

  export default {
    methods: {
      simulate() {
        let vals = [];
        for (let index = 0; index < 10000; index++) {
          vals.push(sim(1, 1/5, 5, 120)); 
        }
        console.log(vals);
      }
    },
  }

</script>

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
    <button v-on:click="simulate">Crunch the numbers</button>
  </main>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
