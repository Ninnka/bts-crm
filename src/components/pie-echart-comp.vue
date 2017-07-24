<template>
  <div class="chart-wrap">
    <chart :options="pieOption" ref="chart"></chart>
    <slot name="pieContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'pie-echarts',
  data () {
    return {
    };
  },
  props: {
    pieOption: {
      type: Object,
      default: {}
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