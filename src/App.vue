<script>
  import sim from '/src/utils/otpimal_allocations.js';

  import "@progress/kendo-theme-default/dist/all.css";

  import InputParameters from "./components/InputParameters.vue";

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
    components:{
      InputParameters,
    }
  }

</script>

<template>
  <main>
    <div>
    <div>
      <div className>
        <div className="text-center bg-blue1 mb-5">
          <h1 className="bold italic justify-self-center text-4xl font-bold py-3">Tutor Allocation System+</h1>
        </div>
          <div className="grid grid-cols-2">
          <div>
            <h2 className="space-x-0 text-2xl font-bold mb-1">Parameters</h2>
            <InputParameters />
          </div>
          <form>
            <h2 className="text-2xl font-bold mb-1">Enter Assessment Dates</h2>
            <div class="flex justify-start pb-2">
              <label className="w-[35]"> Assignment Name:</label>
              <input type="text" name="name" className="ml-2 rounded-md w-60"/>
            </div>

            <div class="flex justify-start pb-1">
              <label className="">Start Time:</label> 
              <Datepicker v-model="date" :month-year-component="monthYear" className="rounded-md" />
            </div>

            <div class="flex justify-start pb-1">
              <label className=""> End Time: </label>
              <Datepicker v-model="date" :month-year-component="monthYear" className="rounded-md" />
            </div>

          </form>

          <div>
            <table>
              <thead>
  <tr>
    <th>Week</th>
    <th>Number of Tutors</th>
    <th>Max. Wait Time</th>
    <th>Av. Wait Time</th>
    <th>Money Spent</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>
</div>

          </div>
          <button v-on:click="simulate" className="flex items-end bg-slate-100 p-5 rounded-md my-5">Crunch the numbers</button>
        </div>
  </div>
</div>
  </main>
</template>

<style scoped>
  input {
  border: 1px solid lightgrey;
}
</style>
