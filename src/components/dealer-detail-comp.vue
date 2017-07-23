<template>
  <div>
    <trend-line-echart-comp :positionsOptions="getDealerDetailOption" ref="chartCompWrap"></trend-line-echart-comp>
    <el-dropdown class="posi-abs dealer--detail--dropdown" trigger="click">
      <span class="el-dropdown-link">
        {{ compOption.selectedInterval }} <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
         <el-dropdown-item v-for="item in intervalArr" :key="item.value">{{ item.label }}</el-dropdown-item> 
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import trendLineEchartComp from '@comps/trend-line-echart-comp';

// import tmpDataMixin from '@mixins/tmp-data-mixin';

export default {
  components: {
    trendLineEchartComp
  },
  // mixins: [tmpDataMixin],
  props: {
    compOption: {
      type: Object,
      default: () => {
        return {
          selectedInterval: '1M',
          yAxisName: '美元/日元'
        };
      }
    },
    dealerDetailOption: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data () {
    return {
      selectedInterval: '1M',
      intervalArr: [
        {
          label: '1M',
          value: 1
        },
        {
          label: '5M',
          value: 2
        },
        {
          label: '1H',
          value: 3
        }
      ]
    };
  },
  computed: {
    getDealerDetailOption () {
      let nddp = JSON.parse(JSON.stringify(this.dealerDetailOption));
      nddp.yAxis[0].name = this.compOption.yAxisName;
      return nddp;
    }
  }
};
</script>

<style lang="less">

</style>

