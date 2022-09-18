<script>
import sim from "/src/utils/otpimal_allocations.js";

import "@progress/kendo-theme-default/dist/all.css";

import InputParameters from "./components/InputParameters.vue";
import ResultsTable from "./components/ResultsTable.vue";

export default {
  methods: {
    simulate() {
      let vals = [];
      for (let index = 0; index < 10000; index++) {
        vals.push(sim(1, 1 / 5, 5, 120));
      }
      console.log(vals);
    },
  },
  components: {
    InputParameters,
    ResultsTable,
  },
};
</script>

<template>
  <main>
    <div>
      <div className>
        <div className="text-center bg-blue1 mb-5">
          <h1
            className="bold italic justify-self-center text-4xl font-bold py-3"
          >
            Tutor Allocation System+
          </h1>
        </div>
        <div className="grid grid-cols-2 mx-4">
          <div>
            <h2 className="space-x-0 text-2xl font-bold mb-1">Parameters</h2>
            <InputParameters />
          </div>
          <form>
            <h2 className="text-2xl font-bold mb-1">Enter Assessment Dates</h2>
            <div class="flex justify-start pb-2">
              <label className="w-[9.5rem]"> Assignment Name:</label>
              <input
                type="text"
                name="name"
                className="ml-2 rounded-md w-[14.5rem]"
              />
            </div>

            <div class="flex justify-start pb-1">
              <label class="w-40">Start Time:</label>
              <Datepicker v-model="date" :month-year-component="monthYear" />
            </div>

            <div class="flex justify-start pb-1">
              <label class="w-40"> End Time: </label>
              <Datepicker v-model="date" :month-year-component="monthYear" />
            </div>
          </form>

          <ResultsTable />
        </div>
        <div>
          <button
            v-on:click="simulate"
            className="bg-blue1 outline-1 w-30 p-2 italics ml-5"
          >
            Generate results
          </button>
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
