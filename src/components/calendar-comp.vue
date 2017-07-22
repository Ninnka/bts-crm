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
        <div>{{day}}</div>
      </li>
    </div>
    <div class="is-flex calendar--table table--content">
      <li class="calendar--table--cell table-cell--wrap" v-for="num in fills" :key="num"></li>
      <li class="calendar--table--cell table-cell--wrap" :class="getSchemeLevel(date)" v-for="date in monthLength" :key="this.date + date">
        <div>{{date}}</div>
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
    }
  },
  data () {
    return {
      dateToSet: this.date,
      days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthLength: 31,
      fills: 4,
      scheme: [
        {
          date: '',
          level: 2
        },
        {
          date: '',
          level: 1
        },
        {
          date: '',
          level: 0
        }
      ]
    };
  },
  methods: {
    getFillsAndMonthLength () {
      let year = this.dateToSet.getFullYear();
      let month = this.dateToSet.getMonth();
      let days = new Date(year, month).getDay();
      this.fills = days === 0 ? 6 : days - 1;
      this.monthLength = this.getDaysInOneMonth(year, month + 1);
    },
    getSchemeLevel (date) {
      // TODO:
      // 根据对应日期创建date

      // 在scheme中寻找对应的level

      // 根据level返回类名
    },
    getDaysInOneMonth (year, month) {
      try {
        month = parseInt(month, 10);
        var d = new Date(year, month, 0);
      } catch (e) {
        console.error('getDaysInOneMonth', e);
      }
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
  mounted () {
  },
  created () {
    this.getFillsAndMonthLength();
  }
};
</script>

<style lang="less" scoped>
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
  > div {
    margin: 0 auto;
    width: 32px;
    height: 100%;
    line-height: 32px;
    border-radius: 100%;
    &.crucial {
      background-color: #ff3b6a;
    }
    &.warn {
      background-color: #ff9e22;
    }
    &.normal {
      background-color: #00dfb9;
    }
  }
  &.table-cell--wrap {
    max-width: 14.285%;
    flex-basis: 65.55px;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>

