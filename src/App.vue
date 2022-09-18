<script setup>
import { Scheduler } from "@progress/kendo-vue-scheduler";
import "@progress/kendo-theme-default/dist/all.css";

import InputParameters from "./components/InputParameters.vue";
import Schedule from "./components/Schedule.vue";
</script>

<template>
  <main>
    <div className="bg-[url('../assets/CFC_Hackathon.png')] w-screen">
    <h1 className="text-4xl font-bold">Tutor Allocation System</h1>
    <InputParameters />
    <h2 className="text-2xl font-bold">Schedule</h2>
    <h2 className="text-2xl font-bold">Enter Assessment Dates</h2>
    <form className="py-3">
      <label className="inline-flex items-baseline mx-3 space-x-3 h-">
        Assignment Name:<br />
        <input type="text" name="name" /><br />
      </label>
      <div className="py-1 flex mx-3 space-x-3">
      <label>
        Start Time:
        <Datepicker v-model="date" :month-year-component="monthYear" />
      </label>
      <label>
        End Time:
        <Datepicker v-model="date" :month-year-component="monthYear" />
      </label>
      </div>
    </form>
    <Schedule/>
  </div>
  </main>
</template>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
