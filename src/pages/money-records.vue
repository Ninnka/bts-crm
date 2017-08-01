<template>
  <div class="money-records">
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
        <el-table :data="moneyRecordsTableData" style="width: 100%" header-align="center" :row-class-name="tableRowClassName">
          <el-table-column prop="recordNumber" label="出入金编号"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="account" label="账号"></el-table-column>
          <el-table-column prop="accountType" label="账号类型"></el-table-column>
          <el-table-column prop="fund" label="原值"></el-table-column>
          <el-table-column prop="fundChange" label="变动金额"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="fundNew" label="新值"></el-table-column>
          <el-table-column prop="remark" label="说明"></el-table-column>
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
  name: 'money-records',
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
.money-records {
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
