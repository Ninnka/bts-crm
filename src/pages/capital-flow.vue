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
        <el-button icon="search" class="search-btn">查询</el-button>
      </div>
      <div class="query-btns">
        <el-button type="info">导出</el-button>
        <!--下拉选择列-->
        <list-options :sourceList="tableColsStatus" @update:displayList="updateTableColsStatus"></list-options>
      </div>
      <div class="record__table has-total">
        <el-table :data="tableData" style="width: 100%" header-align="center" :row-class-name="tableRowClassName">
          <el-table-column v-for="col in tableUsableCols" :key="col.key" :prop="col.key" :label="col.label">
            <template scope="scope">
              <div v-if="col.key === 'status' && typeof scope.row[col.key] === 'object'">
                <p>未知：{{ scope.row[col.key]['unknow'] }}</p>
                <p>成功：{{ scope.row[col.key]['success'] }}</p>
              </div>
              <span v-else>{{ scope.row[col.key] }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="recordNumber" label="出入金编号"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="account" label="账号"></el-table-column>
          <el-table-column prop="accountType" label="账号类型"></el-table-column>
          <el-table-column prop="fundType" label="资金类型"></el-table-column>
          <el-table-column prop="fundChange" label="变动金额"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="fundNew" label="新值"></el-table-column>
          <el-table-column prop="remark" label="说明"></el-table-column> -->
        </el-table>
      </div>
      <!-- <div class="record__total">
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
      </div> -->
      <div class="record__pagination">
        <!-- <el-pagination
          @size-change="recordTabelSizeChange"
          @current-change="recordTabelCurrentChange"
          :current-page="recordTabelCurrentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="50">
        </el-pagination> -->
        <paging :sourceData="capitalFlowTableData" @update:displayData="currentPageChanged"></paging>
      </div>
    </div>
  </div>
</template>

<script>
import tmpFundManageDataMixins from '@mixins/tmp-fund-manage-data-mixins';

import paging from '@comps/paging';
import listOptions from '@comps/list-options';

import moment from 'moment';

export default {
  name: 'capital-flow',
  mixins: [tmpFundManageDataMixins],
  components: {
    paging,
    listOptions
  },
  data () {
    return {
      MTAccountTypeArr: ['全部', '出金', '入金'],
      MTAccountArr: ['127323', '349841', '231852', '609322'],
      recordForm: {
        timeRange: ['', ''],
        MTAccount: '',
        MTAccountType: ''
      },
      recordTabelCurrentPage: 1,
      tableData: [],
      allTotalData: {},
      tableUsableCols: [],
      tableColsStatus: [{
        show: true,
        label: '出入金编号',
        key: 'recordNumber',
        canSelect: false
      }, {
        show: true,
        label: '时间',
        key: 'time',
        canSelect: true
      }, {
        show: true,
        label: '类型',
        key: 'type',
        canSelect: true
      }, {
        show: true,
        label: '账号',
        key: 'account',
        canSelect: true
      }, {
        show: true,
        label: '账号类型',
        key: 'accountType',
        canSelect: true
      }, {
        show: true,
        label: '原值',
        key: 'fund',
        canSelect: true
      }, {
        show: true,
        label: '变动金额',
        key: 'fundChange',
        canSelect: true
      }, {
        show: true,
        label: '状态',
        key: 'status',
        canSelect: true
      }, {
        show: true,
        label: '新值',
        key: 'fundNew',
        canSelect: true
      }, {
        show: true,
        label: '说明',
        key: 'remark',
        canSelect: true
      }]
    };
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 1) {
        return 'even-row';
      }
      return 'odd-row';
    },
    currentPageChanged (data) {
      if (this.allTotalData.objSymbol === undefined) {
        this.setAllTotal();
      }
      let resData = data;
      let total = {
        objSymbol: 'currentTotal',
        recordNumber: '合计',
        account: 0,
        fundChange: 0,
        status: {
          unknow: 0,
          success: 0
        }
      };
      resData.push(this.getSummary(data, total));
      resData.push(this.allTotalData);
      this.tableData = resData;
    },
    updateTableColsStatus (param) {
      this.tableUsableCols = param;
    },
    setAllTotal () {
      let resData = this.capitalFlowTableData;
      let total = {
        objSymbol: 'allTotal',
        recordNumber: '总计',
        account: 0,
        fundChange: 0,
        status: {
          unknow: 0,
          success: 0
        }
      };
      this.allTotalData = this.getSummary(resData, total);
    },
    getSummary (data, total) {
      let accounts = [];
      data.forEach((element, index, array) => {
        if (accounts.indexOf(element.account) === -1) {
          accounts.push(element.account);
        }
        total.fundChange += element.fundChange;
        total.status.unknows += element.status === '未知' ? 1 : 0;
        total.status.success += element.status === '成功' ? 1 : 0;
        if (index === array.length - 1) {
          total.account = accounts.length;
        }
      });
      return total;
    }
  },
  computed: {
  },
  created: function () {
  }
};
</script>

<style lang="less">
.capital-flow {
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
