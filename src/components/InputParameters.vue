<template>
  <form>
    <Parameter
      @on-input="(value) => (questionsPerMinuteNoAssessments = value)"
      :value="questionsPerMinuteNoAssessments"
      step=".1"
      title="Question rate w/ no
    assessments"
      unitAfter="/min"
    />
    <Parameter
      @on-input="(value) => (questionsPerMinuteAssessments = value)"
      :value="questionsPerMinuteAssessments"
      step=".1"
      title="Question rate w/ assessments"
      unitAfter="/min"
    />
    <Parameter
      @on-input="(value) => (avgTutorHelpTime = value)"
      :value="avgTutorHelpTime"
      step="1"
      title="Average tutor help time"
      unitAfter="mins/question"
    />
    <Parameter
      @on-input="(value) => (labDuration = value)"
      :value="labDuration"
      step="1"
      title="Lab duration"
      unitAfter="mins"
    />
    <Parameter
      @on-input="(value) => (labsPerWeek = value)"
      :value="labsPerWeek"
      step="1"
      title="Labs per week"
    />
    <Parameter
      @on-input="(value) => (tutorSalary = value)"
      :value="tutorSalary"
      step="1"
      title="Tutor salary"
      unitBefore="$"
      unitAfter="/hr"
    />
    <Parameter
      @on-input="(value) => (delayCost = value)"
      :value="delayCost"
      step=".1"
      title="Delay cost"
      unitBefore="$"
      unitAfter="/min"
    />
  </form>
</template>

<script>
import Parameter from "./Parameter.vue";

export default {
  data() {
    return {
      questionsPerMinuteNoAssessments: 0.3,
      questionsPerMinuteAssessments: 0.5,
      avgTutorHelpTime: 3,
      labDuration: 120,
      labsPerWeek: 4,
      tutorSalary: 50,
      delayCost: 0.1,
    };
  },
  components: { Parameter },
};
</script>

<style scoped>
input {
  border: 1px solid lightgrey;
}
</style>
