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
      unitAfter="mins"
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
      avgTutorHelpTime: 0,
      delayCost: 0,
      labDuration: 120,
      labsPerWeek: 0,
      questionsPerMinuteNoAssessments: 0,
      questionsPerMinuteAssessments: 0,
      tutorSalary: 50,
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
