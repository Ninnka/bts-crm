<template>
  <div class="capital-flow">
    <div class="content--main__item manage--record">
      <article class="item__header">
        <header>
          资金管理
        </header>
      </article>
      <div class="record__form">
        <span class="c-el-comp-label">时间范围</span><el-date-picker v-model="recordForm.timeRange" type="datetimerange" placeholder="选择查询的时间范围"></el-date-picker>
        <span class="c-el-comp-label">类型</span><el-select v-model="recordForm.MTAccoutType" placeholder="全部/出金/入金">
          <el-option v-for="item in MTAccountTypeArr" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <span class="c-el-comp-label">账号</span><el-select v-model="recordForm.MTAccount" placeholder="请选择要查询的MT账号">
          <el-option v-for="item in MTAccountArr" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-button type="info">查询</el-button>
        <el-button type="info">导出</el-button>
      </div>
      <div class="record__table">
        <el-table :data="fundSummaryTableData" style="width: 100%" header-align="center" :row-class-name="tableRowClassName">
          <el-table-column prop="account" label="用户/账号"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="availableFund" label="可用资金"></el-table-column>
          <el-table-column prop="positionMount" label="持仓手数"></el-table-column>
          <el-table-column prop="appropriation" label="占用资金"></el-table-column>
          <el-table-column prop="float" label="浮动盈亏"></el-table-column>
          <el-table-column prop="cashGift" label="赠金"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        </el-table>
      </div>
      <div class="record__total">
        <div class="total--currentpage">
          <el-row>
            <el-col :span="6">
              合计：10
            </el-col>
            <el-col :span="6">
              2
            </el-col>
            <el-col :span="6" style="text-align: right;">
              +999.999.00
            </el-col>
            <el-col :span="6" style="text-align: left;">
              <div class="c-lineheight-wrap">
                <p class="c-lineheight">未知：1</p>
                <p class="c-lineheight">成功：9</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="total--allpage">
          <el-row>
            <el-col :span="6">
              总计：10
            </el-col>
            <el-col :span="6">
              6
            </el-col>
            <el-col :span="6" style="text-align: right;">
              +999.999.00
            </el-col>
            <el-col :span="6" style="text-align: left;">
              <div class="c-lineheight-wrap">
                <p class="c-lineheight">未知：0</p>
                <p class="c-lineheight">成功：99</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="record__pagination">
        <el-pagination
          @size-change="recordTabelSizeChange"
          @current-change="recordTabelCurrentChange"
          :current-page="recordTabelCurrentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import tmpFundManageDataMixins from '@mixins/tmp-fund-manage-data-mixins';

import moment from 'moment';

export default {
  name: 'capital-flow',
  mixins: [tmpFundManageDataMixins],
  data () {
    return {
      MTAccountTypeArr: ['全部', '出金', '入金'],
      MTAccountArr: ['127323', '349841', '231852', '609322'],
      recordForm: {
        timeRange: ['', ''],
        MTAccount: '',
        MTAccountType: ''
      },
      recordTabelCurrentPage: 1
    };
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 1) {
        return 'even-row';
      }
      return 'odd-row';
    },
    recordTabelSizeChange () {

    },
    recordTabelCurrentChange () {

    }
  },
  computed: {
  },
  created: function () {
  }
};
</script>

<style lang="less">
@content-item-bg: #272a31;
@content-item-contract-bg: #18191d;
@main-theme-sub: #94959a;

.capital-flow {
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
// -------
.c-el-comp-label {
  color: @main-theme-sub;
  margin-right: 12px;
}
.content--main__item {
  background:#272a31;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 1;
}
.item__header{
  header{
    height: 45px;
    line-height: 45px;
    text-align: left;
    font-size:16px;
    color: #ffffff;
    position: relative;
    &:before{
      content:'';
      display: inline-block;
      vertical-align: top;
      margin-right: 10px;
      width: 4px;
      height: 100%;
      background-image: linear-gradient(-180deg, #00e2b8 0%, #009acd 100%);
    }
  }
  .header__more {
    top: 0;
    right: 16px;
    height: 24px;
    width: 10px;
    i {
      color: #454b58 !important;
      font-size: 24px;
    }
  }
}
.item__wrap{
  min-height: 40px;
  position: relative;
  height: calc(~"100% - 45px");
}

.echarts {
  width: 100% !important;
  height: 100% !important;
}
.el-table {
  background: #272a31 !important;
  text-align: center;
  color: #ffffff;
  border-width: 0;
  *:not(.influence--item) {
    border-width: 0 !important;
  }
}

.el-table .odd-row {
  background: #272a31;
}

.el-table .even-row {
  background: #22252d;
}

.el-table__header .el-dropdown {
  color: @main-theme-sub;
}

.el-table__header tr {
  background-color: #1e2128 !important;
}

.el-table__header tr th {
  background-color: #1e2128 !important;
}

.el-table__header-wrapper thead div {
  background-color: #1e2128 !important;
}

.el-table th>.cell {
  text-align: center;
  color: @main-theme-sub;
}

.el-table td, .el-table th.is-leaf {
  border-width: 0 !important;
}

.el-table::after, .el-table::before {
  background-color: transparent !important;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background: initial;
}

.el-table__row {
  a:hover {
    color: #ffffff;
  }
}

.el-table td, .el-table th {
  padding: 7px 0;
}

.c--middle--button {
  margin: auto;
  line-height: 36px;
  height: 36px;
  width: 90px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

// ------------------------------

.record__form {
  box-sizing: border-box;
  text-align: left;
  // margin: 14px 0;
  padding: 16px;
  > div {
    margin-right: 20px;
  }
}

.record__table {
  padding: 16px;
  box-sizing: border-box;
}

.record__pagination {
  box-sizing: border-box;
  padding: 16px;
  // background: #212227;
}
.record__total {
  box-sizing: border-box;
  padding: 0 16px;
  > div {
    height: 40px;
    line-height: 40px;
    color: @main-theme-sub;
    background: #22232a;
    &:first-child {
      border-bottom: 2px solid #272a31;
    }
  }
}
.c-lineheight-wrap {
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  display: inline-block;
  margin-left: 24px;
}
.c-lineheight {
  line-height: 1.2 !important;
  font-size: 12px;
  padding: 2px 0;
}
</style>
