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
    <table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Assignment</th>
          <th>No. of Tutors</th>
          <th>No. of Labs</th>
          <th>Total Wait Time</th>
          <th>Total Wages Cost</th>
          <th>Total Delay Cost</th>
          <th>Total Overall Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in results">
          <td v-for="val in row">
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
