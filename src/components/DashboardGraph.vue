<template>
  <section class="dashboard full-grow">
    <div class="flex">
      <span class="dashboard--title">Company age</span>
      <BubbleChart :chartData="getChartData.chartData" :options="getChartData.chartOptions" style="width: 100%" />
    </div>
    <span>Number of Employees</span>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { BubbleChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default defineComponent({
  name: 'dashboard-graph',
  props: {
    companies: Array,
    company: Object,
  },
  components: { BubbleChart },
  data() {
    return {
      selectedCompany: null,
      chartData: {
        datasets: [
          {
            label: 'All Companies',
            backgroundColor: '#f87979',
            data: this.companies.map((company) => {
              return { x: company.employee_count, y: new Date().getFullYear() - company.founded, r: 7 }
            }),
          },
          {
            label: 'Choosen Company',
            backgroundColor: '#7C8CF8',
            data: [],
          },
        ],
      },
    }
  },
  computed: {
    getChartData() {
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
      }
      return { chartData: this.chartData, chartOptions }
    },
  },
  watch: {
    company: {
      handler(company) {
        this.selectedCompany = company
        if (company) {
          this.chartData.datasets[1].data = [
            { x: company.employee_count, y: new Date().getFullYear() - company.founded, r: 15 },
          ]
        }
      },
      deep: true,
      immediate: true,
    },
  },
})
</script>
