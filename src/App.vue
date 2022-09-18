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
      Scheduler,
      InputParameters,
      Schedule
    }
  }

</script>

<template>
  <main>
    <div style="font-family: 'Architects Daughter', cursive;">
    <div className="bg-[url('../assets/CFC_Hackathon.png')]">
      <div className="ml-5">
        <div className="text-center">
          <h1 className="justify-self-center text-4xl font-bold py-3">Tutor Allocation System</h1>
        </div>
          <div className="grid grid-cols-2">
          <div>
            <h2 className="space-x-0 text-2xl font-bold">Parameters</h2>
            <InputParameters />
          </div>
          <form>
            <h2 className="text-2xl font-bold">Enter Assessment Dates</h2>
            <div class="flex justify-start pb-2">
              <label className="w-[35]"> Assignment Name:</label>
              <input type="text" name="name" class="rounded-md w-60"/>
            </div>

            <div class="flex justify-start pb-1">
              <label className="w-[35]">Start Time:</label> 
              <Datepicker v-model="date" :month-year-component="monthYear" className="rounded-md" />
            </div>

            <div class="flex justify-start pb-1">
              <label className="w-[35]"> End Time: </label>
              <Datepicker v-model="date" :month-year-component="monthYear" className="rounded-md" />
            </div>

          </form>


          </div>
          <h2 className="text-2xl font-bold">Schedule</h2>
          <button v-on:click="simulate" className="flex items-end bg-slate-100 p-5 rounded-md my-5">Crunch the numbers</button>
        </div>
  </div>
</div>
  </main>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
input {
  border: 1px solid lightgrey;
}
</style>
