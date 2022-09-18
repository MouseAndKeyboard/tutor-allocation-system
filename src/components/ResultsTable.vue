<script></script>

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
        <tr v-for="num in Array.from({ length: 12 }, (_, i) => i + 1)">
          <td>
            {{ num }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
