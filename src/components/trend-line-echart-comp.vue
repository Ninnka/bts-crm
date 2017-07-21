<template>
  <div class="chart-wrap">
    <chart :options="positionsOptions" ref="chart"></chart>
  </div>
</template>

<script>
export default {
  props: {
    positionsOptions: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="less">
.chart-wrap {
  width: 100%;
  height: 100%;
}
.echarts {
  width: 100% !important;
  height: 100% !important;
}
</style>
