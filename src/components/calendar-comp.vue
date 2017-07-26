<template>
  <div class="calendar--wrap">
    <div class="is-flex calendar--control">
      <div class="control control__left">
        <i class="el-icon-d-arrow-left" @click="preYear"></i>
        <i class="el-icon-arrow-left" @click="preMonth"></i>
      </div>
      <div class="control__month_year">
        <span class="year">{{ currentYear }}年 </span>
        <span class="month">{{ currentMonth }}月</span>
      </div>
      <div class="control control__right">
        <i class="el-icon-arrow-right" @click="nextMonth"></i>
        <i class="el-icon-d-arrow-right" @click="nextYear"></i>
      </div>
    </div>
    <div class="is-flex calendar--table table--head">
      <li class="calendar--table--cell" v-for="(day, index) in days" :key="this.date + index">
         <div>{{ day }}</div> 
      </li>
    </div>
    <div class="is-flex calendar--table table--content">
      <li class="calendar--table--cell table-cell--wrap" v-for="num in fills" :key="num"></li>
      <li class="calendar--table--cell table-cell--wrap" v-for="date in monthLength" :key="this.date + date">
        <div class="table-cell__date" :class="getSchemeLevel(date)">
          <el-popover v-if="tmpObj[getSymbolStr(date)] !== undefined" popper-class="el-popover__extend" placement="top" width="200" trigger="click">
            <div slot="reference">{{ date }}</div>
            <div class="extend__content is-flex">
              <div :class="tmpObj[getSymbolStr(date)].className"></div>
              {{ tmpObj[getSymbolStr(date)].theme }}</div>
          </el-popover>
          <div v-else slot="reference">{{ date }}</div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: {
      type: Date,
      default: new Date()
    },
    newsTableData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data () {
    return {
      dateToSet: this.date,
      days: ['日', '一', '二', '三', '四', '五', '六'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthLength: 31,
      fills: 4,
      tmpObj: {}
      // scheme: [
      //   {
      //     time: 1500220800,
      //     level: 3
      //   },
      //   {
      //     time: 1500566400,
      //     level: 5
      //   },
      //   {
      //     time: 1501084800,
      //     level: 4
      //   }
      // ]
    };
  },
  methods: {
    getFillsAndMonthLength () {
      let year = this.dateToSet.getFullYear();
      let month = this.dateToSet.getMonth();
      let days = new Date(year, month).getDay();
      this.fills = days; // === 0 ? 6 : days - 1;
      this.monthLength = this.getDaysInOneMonth(year, month + 1);
    },
    getSymbolStr (date) {
      return String(date) + new Date(this.dateToSet.getFullYear(), this.dateToSet.getMonth());
    },
    getSchemeLevel (date) {
      // NOTE:
      let nd = new Date(this.dateToSet.getFullYear(), this.dateToSet.getMonth(), date);

      // 在scheme中寻找对应的level
      for (let item of this.newsTableData) {
        if (item.time === moment(nd).unix()) {
          let symbolStr = this.getSymbolStr(date);
          let to = {
            theme: item.theme
          };
          this.tmpObj[symbolStr] = to;
          switch (item.level) {
            case 3:
              this.tmpObj[symbolStr].className = 'normal';
              return 'normal';
            case 4:
              this.tmpObj[symbolStr].className = 'warn';
              return 'warn';
            case 5:
              this.tmpObj[symbolStr].className = 'crucial';
              return 'crucial';
            default:
              return '';
          }
        }
      }
      return '';
    },
    getDaysInOneMonth (year, month) {
      month = parseInt(month, 10);
      let d = new Date(year, month, 0);
      return d.getDate();
    },
    preYear () {
      this.dateToSet = new Date(this.dateToSet.getFullYear() - 1, this.dateToSet.getMonth());
      this.getFillsAndMonthLength();
    },
    preMonth () {
      if (this.dateToSet.getMonth() >= 1) {
        this.dateToSet = new Date(this.dateToSet.getFullYear(), this.dateToSet.getMonth() - 1);
      } else {
        this.dateToSet = new Date(this.dateToSet.getFullYear() - 1, 11);
      }
      this.getFillsAndMonthLength();
    },
    nextYear () {
      this.dateToSet = new Date(this.dateToSet.getFullYear() + 1, this.dateToSet.getMonth());
      this.getFillsAndMonthLength();
    },
    nextMonth () {
      if (this.dateToSet.getMonth() <= 10) {
        this.dateToSet = new Date(this.dateToSet.getFullYear(), this.dateToSet.getMonth() + 1);
      } else {
        this.dateToSet = new Date(this.dateToSet.getFullYear() + 1, 0);
      }
      this.getFillsAndMonthLength();
    }
  },
  computed: {
    currentMonth () {
      return this.dateToSet.getMonth() + 1;
    },
    currentYear () {
      return this.dateToSet.getFullYear();
    }
  },
  created () {
    this.getFillsAndMonthLength();
  }
};
</script>

<style lang="less">
@main-theme-sub: #94959a;
li {
  list-style: none;
}
.calendar--wrap {
  height: 100%;
}
.calendar--control {
  height: 50px;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  > div {
    flex-grow: 1;
    flex-shrink: 1;
    width: 30%;
  }
  .control {
    color: #979797;
    cursor: pointer;
    > i {
      &:first-child {
        margin-right: 28px;
      }
    }
  }
  .control__month_year {
    font-size: 16px;
  }
}

.calendar--table {
  color: @main-theme-sub;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
}

.calendar--table--cell {
  width: 14.285%;
  height: 32px;
  margin-bottom: 8px;
  > div.table-cell__date {
    margin: 0 auto;
    width: 32px;
    height: 100%;
    line-height: 32px;
    border-radius: 100%;
    &.crucial {
      background-color: #ff3b6a;
      color: #ffffff;
    }
    &.warn {
      background-color: #ff9e22;
      color: #ffffff;
    }
    &.normal {
      background-color: #00dfb9;
      color: #333333;
    }
  }
  &.table-cell--wrap {
    max-width: 14.285%;
    flex-basis: 65.55px;
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.el-popover__extend {
  border-width: 0 !important;
  background: #3b3c48 !important;
  border-radius: 4px !important;
  width: 172px !important;
  height: 45px !important;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
}
.el-popover[x-placement^=top] .popper__arrow {
  border-top-color: #3b3c48 !important;
}
.el-popover__extend[x-placement^=top] .popper__arrow::after {
  border-top-color: #3b3c48 !important;
}
.extend__content {
  justify-content: flex-start;
  align-items: flex-start;
  > div:nth-child(1) {
    flex-grow: 0;
    flex-shrink: 0;
    margin-top: 6px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    margin-right: 8px;
  }
  > div:nth-child(2) {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .crucial {
    background-color: #ff3b6a;
  }
  .warn {
    background-color: #ff9e22;
  }
  .normal {
    background-color: #00dfb9;
  }
}
</style>

