<template>
  <main>
    <div>
      <div class="bg-[#FAF9F6] h-screen w-screen">
        <div className="text-center bg-blue1 mb-5">
          <h1
            className="bold italic justify-self-center text-4xl font-bold py-3"
          >
            Tutor Allocation System+
          </h1>
        </div>
        <div className="grid grid-cols-2 px-4 gap-x-8 w-full">
          <div class="border-r-2 border-lightgrey">
            <h2 className="space-x-0 text-2xl font-bold mb-1">Parameters</h2>
            <InputParameters ref="inputs" />
          </div>
          <div>
            <h2 class="space-x-0 text-2xl font-bold mb-1">Assessment Input</h2>
            <AssessmentInput ref="assessmentInput" />
          </div>
        </div>
        <ResultsTable ref="results" />
        <div>
          <button
            @click="getResults"
            className="bg-blue1 outline-1 w-30 p-2 italics ml-5"
          >
            Generate results
          </button>
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
    getResults() {
      let questionsPerMinuteNoAssessments =
        this.$refs.inputs.questionsPerMinuteNoAssessments;
      let questionsPerMinuteAssessments =
        this.$refs.inputs.questionsPerMinuteAssessments;
      let labsPerWeek = this.$refs.inputs.labsPerWeek;
      let labDuration = this.$refs.inputs.labDuration;
      let delayCost = this.$refs.inputs.delayCost;
      let tutorSalary = this.$refs.inputs.tutorSalary;
      let tutorhelptime = this.$refs.inputs.avgTutorHelpTime;
      let assessmentWks = this.$refs.assessmentInput.assessmentWks;
      console.log(assessmentWks);
      this.$refs.results.simulate(
        tutorSalary,
        delayCost,
        labsPerWeek,
        assessmentWks,
        questionsPerMinuteNoAssessments,
        questionsPerMinuteAssessments,
        tutorhelptime,
        labDuration
      );
      console.log("hey", questionsPerMinuteNoAssessments);
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
