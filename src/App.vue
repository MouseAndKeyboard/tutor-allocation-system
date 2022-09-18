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
            <InputParameters ref="inputs" />
          </div>
          <AssessmentInput />
          <ResultsTable ref="results" />
        </div>
        <div>
          <button
            @click="simulate"
            className="bg-blue1 outline-1 w-30 p-2 italics ml-5"
          >
            Generate results
          </button>
          <button @click="test">test</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import sim from "/src/utils/otpimal_allocations.js";

import "@progress/kendo-theme-default/dist/all.css";

import InputParameters from "./components/InputParameters.vue";
import ResultsTable from "./components/ResultsTable.vue";
import AssessmentInput from "./components/AssessmentInput.vue";

export default {
  methods: {
    simulate() {
      let questionsPerMinuteNoAssessments =
        this.$refs.inputs.questionsPerMinuteNoAssessments;
      let questionsPerMinuteAssessments =
        this.$refs.inputs.questionsPerMinuteAssessments;
      let labsPerWeek = this.$refs.inputs.labsPerWeek;
      let labDuration = this.$refs.inputs.labDuration;
      let delayCost = this.$refs.inputs.delayCost;
      let tutorSalary = this.$refs.inputs.tutorSalary;
      let tutorhelptime = this.$refs.inputs.avgTutorHelpTime;
      this.$refs.results.simulate(
        labsPerWeek,
        [true, false],
        questionsPerMinuteNoAssessments,
        questionsPerMinuteAssessments,
        tutorhelptime,
        labDuration
      );
      console.log("hey", tutorhelptime);
      // let vals = [];
      // let test = [];
      // console.log(vals);
      // test.push(document.getElementById("quesRate1").value);
      // test.push(document.getElementById("quesRate2").value);
      // test.push(document.getElementById("avgTutorHelpTime").value);
      // console.log(test);
    },
  },
  components: {
    InputParameters,
    ResultsTable,
    AssessmentInput,
  },
};
</script>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
