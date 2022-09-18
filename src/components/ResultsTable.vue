<script>
import optimal_allocations from "../utils/otpimal_allocations";
const results = optimal_allocations(
  4,
  [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
  ],
  0.4,
  0.6,
  5,
  120
);
console.log(results);

export default {
  data: () => ({
    results: results,
  }),
  methods: {
    optimal_allocations,
    simulate() {
      this.result = optimal_allocations(
        4,
        [
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          true,
        ],
        0.4,
        0.6,
        5,
        120
      );
      console.log(results);
    },
  },
};
</script>

<template>
  <div>
    <table className="border-collapse border border-slate-400">
      <thead>
        <tr>
          <th
            class="border border-gray-400"
            v-for="header in [
              'Assignment',
              'No. of Tutors',
              'No. of Labs',
              'Total Wait Time',
              'Total Wages Cost',
              'Total Delay Cost',
              'Total Overall Cost',
            ]"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in results">
          <td class="border border-slate-400" v-for="val in row">
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
