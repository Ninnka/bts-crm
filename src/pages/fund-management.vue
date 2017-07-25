<template>
  <div class="fund-management">
    <div class="content--main__item fund--summary">
      <article class="item__header">
        <header>
          资金总结
        </header>
      </article>
      <div class="summay__table">
        <el-table :data="fundSummaryTableData" style="width: 100%" max-height="200" header-align="center" :row-class-name="tableRowClassName">
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
    </div>

    <div class="content--main__item fund--manage">
      <article class="item__header">
        <header>
          资金管理
        </header>
      </article>
      <div class="is-flex manag__transfer">
        <div class="transfer--account transfer__form">
          <el-form ref="form" :model="outAccountForm" label-width="80px">
            <el-form-item label="转出账户">
              <el-select v-model="outAccountForm.outAccount" placeholder="请选择账户">
                <el-option v-for="(item, index) in outAccountForm.outAccountArr" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="资金类型">
              <el-select v-model="outAccountForm.fundType" placeholder="请选择资金类型">
                <el-option v-for="(item, index) in outAccountForm.fundTypeArr" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
            <el-row>
              <el-col :span="14">
                <el-form-item label="转出金额">
                  <el-input v-model="outAccountForm.outAmount" placeholder="请填写转出金额"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10"><div class="form--solidheight right">可用：{{ outAccountForm.availableAmount }}</div></el-col>
            </el-row>
            <el-form-item>
              <!-- <el-button @click="ensureTransfer">转账</el-button> -->
              <div class="hot-bg c--middle--button" @click="ensureTransfer">转账</div>
            </el-form-item>
          </el-form>
        </div>
        <div class="transfer--icon--wrap">
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="transfer--account transfer__form">
          <el-form ref="form" :model="inAccountForm" label-width="80px">
            <el-form-item label="转出账户">
              <el-select v-model="inAccountForm.inAccount" placeholder="请选择账户">
                <el-option v-for="(item, index) in inAccountForm.inAccountArr" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="资金类型">
              <el-select v-model="inAccountForm.fundType" placeholder="请选择资金类型">
                <el-option v-for="(item, index) in inAccountForm.fundTypeArr" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="转出金额">
              <el-row>
                <el-col :span="10"><div class="form--solidheight left">当前：{{ inAccountForm.currentAmount }}</div></el-col>
                <el-col :span="14">
                    <el-input v-model="inAccountForm.inAmount" placeholder="请填写转出金额"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="content--main__item manage--record">
      <article class="item__header">
        <header>
          资金管理
        </header>
      </article>
      <div class="record__form">
        <el-date-picker v-model="recordForm.timeRange" type="datetimerange" placeholder="选择查询的时间范围"></el-date-picker>
        <el-select v-model="recordForm.MTAccount" placeholder="请选择">
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
  name: 'fund-management',
  mixins: [tmpFundManageDataMixins],
  data () {
    return {
      outAccountForm: {
        outAccount: '用户：方砖/MT账号：54321',
        outAccountArr: [
          {
            label: '用户：方砖/MT账号：54321',
            value: 1
          }
        ],
        fundType: '可用资金/赠金',
        fundTypeArr: [
          {
            label: '可用资金/赠金',
            value: 1
          }
        ],
        outAmount: '',
        availableAmount: '999,999.00'
      },
      inAccountForm: {
        inAccount: '用户：方砖/MT账号：54321',
        inAccountArr: [
          {
            label: '用户：方砖/MT账号：54321',
            value: 1
          }
        ],
        fundType: '可用资金/赠金',
        fundTypeArr: [
          {
            label: '可用资金/赠金',
            value: 1
          }
        ],
        inAmount: '',
        currentAmount: '999,999.00'
      },
      MTAccountArr: ['127323', '349841', '231852', '609322'],
      recordForm: {
        timeRange: ['', ''],
        MTAccount: ''
      },
      recordTabelCurrentPage: 1
    };
  },
  computed: {
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 1) {
        return 'even-row';
      }
      return 'odd-row';
    },
    ensureTransfer () {
      console.log('click ensureTransfer');
    },
    recordTabelSizeChange () {

    },
    recordTabelCurrentChange () {

    }
  },
  created: function () {
  }
};
</script>

<style lang="less">
@content-item-bg: #272a31;
@content-item-contract-bg: #18191d;
@main-theme-sub: #94959a;

.fund-management {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 16px;
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

.fund--summary {
  margin-bottom: 20px;
  .summay__table {
    margin: 16px 0;
    box-sizing: border-box;
    padding: 0 16px;
  }
}

// ------------------------------
.fund--manage {
  margin-bottom: 20px;
  .manag__transfer {
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    > div.transfer--account {
      height: 236px;
      flex-basis: 36%;
      flex-grow: 0;
      flex-shrink: 1;
      margin: 0 12px;
    }
    .transfer--icon--wrap {
      width: 24px;
      height: 30px;
      flex-grow: 0;
      flex-shrink: 0;
      color: #ffffff;
      font-size: 24px;
    }
    .transfer__form {
      color: #ffffff;
      .el-button {
        width: 100px !important;
        height: 36px !important;
        // line-height: 36px !important;
        color: #333;
      }
    }
    .form--solidheight {
      height: 36px;
      line-height: 36px;
      background: #202228;
      font-size: 14px;
      &.left {
        margin-right: 12px;
      }
      &.right {
        margin-left: 12px;
      }
    }
  }
}
// ----------------------------
.manage--record {

}

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

</style>
