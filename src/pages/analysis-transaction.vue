<template>
  <div class="analysis-transaction">
    <div class="region">
      <article class="nav">
        <header>
            <span>
              交易记录
            </span>
        </header>
        <div></div>
      </article>
      <div class="table">
          <div class="analysis-transaction-hold">
            <!--搜索框-->
            <div class="lists-table">
              <!-- <form action="" class="el-form">
                  <div class="el-form-item">
                    <span for="">时间范围</span>
                    <div class="el-form-item__label">
                      <el-col :span="11">
                        <el-date-picker type="date" :placeholder="inputText[0]" v-model="form.date" style="width: 100%;" format></el-date-picker>
                      </el-col>
                    </div>
                  </div>
                  <div class="el-form-item">
                    <span for="">交易种类</span>
                    <div class="el-form-item__label">
                      <el-col :span="12">
                        <el-select v-model="form.category" :placeholder="inputText[1]">
                          <el-option v-for="item in categorySearch" :key="item" label="item" value="item">
                            {{ item }}
                          </el-option>
                        </el-select>
                      </el-col>
                    </div>
                  </div>
                  <div class="el-form-item">
                    <span for="">交易账号</span>
                    <div class="el-form-item__label">
                      <el-col :span="12">
                        <el-select v-model="form.category" :placeholder="inputText[1]">
                          <el-option v-for="item in accountSearch" :key="item" label="item" value="item">
                            {{ item }}
                          </el-option>
                        </el-select>
                      </el-col>
                    </div>
                  </div>
                  <div class="el-form-item">
                    <span for="">平仓类型</span>
                    <div class="el-form-item__label">
                      <el-select v-model="form.type" :placeholder="inputText[3]">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="持仓中" value="is"></el-option>
                        <el-option label="已平仓" value="over"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="item-solid" style="padding: 11px 12px 11px 0;">
                    <el-button icon="search" class="search-btn" @click="tableSearch">搜索
                    </el-button>
                  </div>
              </form> -->
              <el-form class="form--wrap" label-width="80px">
                <el-form-item label="时间范围">
                  <el-date-picker type="date" :placeholder="inputText[0]" v-model="form.date" style="width: 100%;" format></el-date-picker>
                </el-form-item>
                <el-form-item label="交易种类">
                  <el-select v-model="form.category" :placeholder="inputText[1]">
                    <el-option v-for="item in categorySearch" :key="item" label="item" value="item">
                      {{ item }}
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="交易账号">
                  <el-select v-model="form.category" :placeholder="inputText[1]">
                    <el-option v-for="item in accountSearch" :key="item" label="item" value="item">
                      {{ item }}
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="平仓类型">
                  <el-select v-model="form.type" :placeholder="inputText[3]">
                    <el-option label="全部" value="all"></el-option>
                    <el-option label="持仓中" value="is"></el-option>
                    <el-option label="已平仓" value="over"></el-option>
                  </el-select>
                </el-form-item>
                <el-button icon="search" class="search-btn item-init-max" @click="tableSearch">搜索</el-button>
              </el-form>
              <!--搜索框 结束-->

              <!--查询按钮-->
              <div class="query-btns">
                <!-- <el-button type="primary" icon="search" @click="tableSearch">搜索
                </el-button> -->
                <el-button type="primary" icon="upload2">导出
                </el-button>
                <!--下拉选择列-->
                <list-options :sourceList="tableColsStatus" @update:displayList="updateTableColsStatus"></list-options>
                <!-- <el-dropdown trigger="hover" :hide-on-click="false">
                  <el-button type="primary">
                  列表选项<i class="el-icon-caret-bottom el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <el-checkbox :indeterminate="cloumnChoose.isIndeterminate" v-model="cloumnChoose.checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                      <div style="margin: 15px 0;"></div>
                    </el-dropdown-item>
                    <el-dropdown-item v-for="field in cloumnChoose.lists" :key="field">
                      <el-checkbox-group v-model="cloumnChoose.checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox :label="field" :key="field">{{field}}</el-checkbox>
                      </el-checkbox-group>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown> -->
                <!--下拉选择列 over-->
              </div>
              <!--查询按钮 结束-->
              <!--数据表格-->
              <div class="table-list has-total">
                <template>
                  <el-table :data="pageTable" style="width: 100%">
                    <el-table-column v-for="col in tableUsableCols" :key="col.key" :prop="col.key" :label="col.label" :width="col.width ? col.width : '120'">
                      <template scope="scope">
                        <span>{{ scope.row[col.key] ? scope.row[col.key] : '' }}</span>
                      </template>
                    </el-table-column>
                    <!-- <el-table-column prop="id" label="交易编号"  width="130">
                    </el-table-column>
                    <el-table-column prop="userName" label="交易用户"  width="120">
                    </el-table-column>
                    <el-table-column prop="userId" label="MT账号"  width="120">
                    </el-table-column>
                    <el-table-column prop="category" label="类型 "  width="120">
                    </el-table-column>
                    <el-table-column prop="type" label="交易种类"  width="120">
                    </el-table-column>
                    <el-table-column prop="playDate" label="开仓时间"  width="120">
                    </el-table-column>
                    <el-table-column prop="playPrice" label="开仓价格"  width="120">
                    </el-table-column>
                    <el-table-column prop="number" label="手数"  width="120">
                    </el-table-column>
                    <el-table-column prop="win.profit" label="止损／盈亏"  width="120">
                    </el-table-column>
                    <el-table-column prop="unwindDate" label="平仓时间"  width="120">
                    </el-table-column>
                    <el-table-column prop="unwindPrice" label="平仓价格"  width="120">
                    </el-table-column>
                    <el-table-column prop="accrual" label="利息"  width="120">
                    </el-table-column>
                    <el-table-column prop="poundage" label="手续费/外佣"  width="120">
                    </el-table-column>
                    <el-table-column prop="obtain" label="盈亏"  width="120">
                    </el-table-column> -->
                  </el-table>
                  <!--合计总计-->
                  <!-- <div class="table-sum">
                    <div>
                        <span>合计</span>
                        <span>{{  pageSum.mtNum }}</span>
                        <span>买{{ pageSum.buy }}</span>
                        <span>卖{{ pageSum.sell }}</span>
                        <span></span>
                        <span>开仓：{{ pageSum.play }}/</span>
                        <span>已平： {{ pageSum.unwind }}/</span>
                        <span>未平：{{ pageSum.unknown }}</span>
                        <span>{{ pageSum.interest }}</span>
                        <span>{{ pageSum.poundage }}</span>
                        <span>{{ pageSum.obtain }}</span>
                    </div>
                    <div>
                      <span>总计</span>
                      <span>{{  sum.mtNum }}</span>
                      <span>买{{ sum.buy }}</span>
                      <span>卖{{ sum.sell }}</span>
                      <span></span>
                      <span>开仓：{{ sum.play }}/</span>
                      <span>已平： {{ sum.unwind }}/</span>
                      <span>未平：{{ sum.unknown }}</span>
                      <span>{{ sum.interest }}</span>
                      <span>{{ sum.poundage }}</span>
                      <span>{{ sum.obtain }}</span>
                    </div>
                  </div> -->
                  <!--合计总计 结束-->
                  <!-- 分页-->
                  <div class="record__pagination">
                    <!-- <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="pageMax"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="tableLength">
                    </el-pagination> -->
                    <paging :sourceData="tableData2" @update:displayData="currentPageChanged"></paging>
                  </div>
                  <!-- 分页 结束-->
                </template>
              </div>
              <!--数据表格 结束-->
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import paging from '@comps/paging';
import listOptions from '@comps/list-options';

var tableField = ['交易编号', '交易用户', 'MT账号', '类型', '交易种类', '开仓时间', '开仓价格', '手数', '止损／盈亏', '平仓时间', '平仓价格', '利息', '手续费/外佣', '盈亏'];
export default {
  name: 'AnalysisTransaction',
  components: {
    paging,
    listOptions
  },
  data () {
    return {
      inputText: [
        '请选择需要查询的时间范围',
        '请选择需要查询的交易种类',
        '请选择需要查询的MT账号',
        '全部／持仓中／已平仓'
      ],
      cloumnChoose: {
        isIndeterminate: true,
        checkedCities: tableField,
        lists: tableField,
        checkAll: true
      },
      pageMax: 5,
      pageStart: 0,
      accountPrompt: [],
      categoryPrompt: [],
      tableData2: [],
      formInline: {
        user: '',
        region: ''
      },
      form: {
        date: '',
        category: '',
        account: '',
        type: ''
      },
      currentPage: 1,
      tableUsableCols: [],
      tableColsStatus: [{
        show: true,
        label: '交易编号',
        key: 'id',
        canSelect: false,
        width: '130'
      }, {
        show: true,
        label: '交易用户',
        key: 'userName',
        canSelect: true
      }, {
        show: true,
        label: 'MT账号',
        key: 'userId',
        canSelect: true
      }, {
        show: true,
        label: '类型',
        key: 'category',
        canSelect: true
      }, {
        show: true,
        label: '交易种类',
        key: 'type',
        canSelect: true
      }, {
        show: true,
        label: '开仓时间',
        key: 'playDate',
        canSelect: true
      }, {
        show: true,
        label: '开仓价格',
        key: 'playPrice',
        canSelect: true
      }, {
        show: true,
        label: '手数',
        key: 'number',
        canSelect: true
      }, {
        show: true,
        label: '止损／盈亏',
        key: 'win.profit',
        canSelect: true
      }, {
        show: true,
        label: '平仓时间',
        key: 'unwindDate',
        canSelect: true
      }, {
        show: true,
        label: '平仓价格',
        key: 'unwindPrice',
        canSelect: true
      }, {
        show: true,
        label: '利息',
        key: 'accrual',
        canSelect: true
      }, {
        show: true,
        label: '手续费/外佣',
        key: 'poundage',
        canSelect: true
      }, {
        show: true,
        label: '盈亏',
        key: 'obtain',
        canSelect: true
      }],
      pageTable: []
    };
  },
  computed: {
    tableLength: function () {
      // 获取显示一共有多少条数据
      return this.tableData2.length;
    },
    sum: function () {
      // 总计
      let mtNum = 0;
      let buy = 0;
      let sell = 0;
      let play = 0;
      let unwind = 0;
      let unknown = 0;
      let interest = 0;
      let poundage = 0;
      let obtain = 0;
      let data = this.tableData2;
      let j = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].category === '买') {
          buy += data[i].number;
        };
        if (data[i].category === '卖') {
          sell += data[i].number;
        };
        play += data[i].number;
        if (data[i].unwindPric !== '持仓中') {
          unwind += data[i].number;
        } else {
          unknown += data[i].number;
        }
        interest += data[i].accrual;
        poundage += data[i].poundage;
        obtain += data[i].obtain;
        j = i + 1;
        if (j === data.length) {
          j = i;
        };
        if (data[i].userId !== data[j].userId) {
          mtNum += 1;
        } else {
          mtNum += 0;
        }
      }
      if (mtNum !== 0) {
        mtNum += 1;
      };
      return {
        mtNum,
        buy,
        sell,
        play,
        unwind,
        unknown,
        interest,
        poundage,
        obtain
      };
    },
    // pageTable: function () {
    //   // 当前页显示的数据
    //   return this.tableData2.slice(this.pageStart, this.pageMax);
    // },
    pageSum: function () {
      // 合计
      let mtNum = 0;
      let buy = 0;
      let sell = 0;
      let play = 0;
      let unwind = 0;
      let unknown = 0;
      let interest = 0;
      let poundage = 0;
      let obtain = 0;
      let data = this.pageTable;
      let j = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === '买') {
          buy += data[i].number;
        };
        if (data[i].category === '卖') {
          sell += data[i].number;
        };
        play += data[i].number;
        if (data[i].unwindPric !== '持仓中') {
          unwind += data[i].number;
        } else {
          unknown += data[i].number;
        }
        interest += data[i].accrual;
        poundage += data[i].poundage;
        obtain += data[i].obtain;
        j = i + 1;
        if (j === data.length) {
          j = i;
        };
        if (data[i].userId !== data[j].userId) {
          mtNum += 1;
        } else {
          mtNum += 0;
        }
      }
      if (mtNum !== 0) {
        mtNum += 1;
      };
      return {
        mtNum,
        buy,
        sell,
        play,
        unwind,
        unknown,
        interest,
        poundage,
        obtain
      };
    }
  },
  methods: {
    handleCheckAllChange (event) {
      // 点击全选的方法
      this.cloumnChoose.checkedCities = event.target.checked ? tableField : [];
      this.cloumnChoose.isIndeterminate = false;
    },
    handleCheckedCitiesChange (value) {
      // 点击多选框的方法
      // console.log(value);
      let checkedCount = value.length;
      this.cloumnChoose.checkAll = checkedCount === this.cloumnChoose.lists.length;
      this.cloumnChoose.isIndeterminate = checkedCount > 0 && checkedCount < this.cloumnChoose.lists.length;
    },
    handleSizeChange (val) {
      // 控制当前显示数据的方法
      this.pageMax = Number(val);
    },
    handleCurrentChange (val) {
      // 获取点击下一页数的方法
      this.pageStart = Number(val) - 1;
    },
    tableSearch () {
      // 按下搜索框后调用的方法
      let date = '';
      let type = this.form.type;
      let category = this.form.category;
      let account = this.form.account;
      let lists = this.tableDateAll();
      if (this.form.date) {
        let Y = this.form.date.getFullYear() + '-';
        let M = (this.form.date.getMonth() + 1 < 10 ? '0' + (this.form.date.getMonth() + 1) : this.form.date.getMonth() + 1) + '-';
        let D = '0' + this.form.date.getDate();
        date = Y + M + D;
        lists = lists.filter(this.tableSearchFilter('date', date));
      };
      lists = category ? lists.filter(this.tableSearchFilter('category', category)) : lists;
      lists = account ? lists.filter(this.tableSearchFilter('account', account)) : lists;
      if (type) {
        if (type === 'is') {
          lists = lists.filter(this.tableSearchFilter(type, type));
        } else {
          lists = lists.filter(this.tableSearchFilter(type, type));
        }
      };
      if (date || type === 'all' || category || account || type) {
        this.tableData2 = lists;
      } else {
        this.tableData2 = this.tableDateAll();
      }
    },
    tableSearchFilter (column, value) {
      if (column === 'date') {
        return n => {
          let flag = false;
          if (n.playDate === value) {
            flag = true;
          };
          return flag;
        };
      };
      if (column === 'category') {
        return n => {
          let flag = false;
          if (n.type === value) {
            flag = true;
          };
          return flag;
        };
      };
      if (column === 'account') {
        return n => {
          let flag = false;
          if (n.userId === value) {
            flag = true;
          };
          return flag;
        };
      };
      if (column === 'is') {
        return n => {
          let flag = false;
          if (n.unwindPrice === '持仓中') {
            flag = true;
          };
          return flag;
        };
      };
      if (column === 'over') {
        return n => {
          let flag = false;
          if (n.unwindPrice >= 0.000) {
            flag = true;
          };
          return flag;
        };
      };
    },
    accountSearch (queryString, cb) {
      // 交易账号输入提示方法
      var tradingPrompt = this.accountPrompt;
      var results = queryString ? tradingPrompt.filter(this.createFilter(queryString)) : tradingPrompt;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    categorySearch (queryString, cb) {
      // 交易种类输入提示方法
      let categoryPrompt = this.categoryPrompt;
      let results = queryString ? categoryPrompt.filter(this.createFilter(queryString)) : categoryPrompt;
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toUpperCase()) === 0);
      };
    },
    loadAll () {
      return {
        category: [
        { 'value': 'USDJPY' },
        { 'value': 'USDCNY' }
        ],
        account: [
        { 'value': '9527' },
        { 'value': '9817' }
        ]
      };
    },
    tableDateAll () {
      return [
        {
          playDate: '2016-05-02',
          userName: '王小虎',
          userId: '9527',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-04',
          userName: '王小虎',
          userId: '9527',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '未平仓',
          unwindPrice: '持仓中',
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-01',
          userName: '王小虎',
          userId: '9817',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '未平仓',
          unwindPrice: '持仓中',
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-01',
          userName: '王小虎',
          userId: '9517',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-02',
          userName: '王小虎',
          userId: '9517',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-01',
          userName: '王小虎',
          userId: '9517',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-01',
          userName: '王小虎',
          userId: '9517',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-01',
          userName: 'ljh',
          userId: '9717',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPrice: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }, {
          playDate: '2016-05-03',
          userName: '王小虎',
          userId: '9537',
          category: '买',
          type: 'USDJPY',
          playPrice: 1.0032,
          number: 2,
          win: {
            profit: '止损1.0000止盈1.0050'
          },
          unwindDate: '2017-03-01 10:00:00',
          unwindPric: 1.0050,
          accrual: 99999.00,
          poundage: 30,
          obtain: 99999.00,
          id: 'JY000000001'
        }
      ];
    },
    categorySelect (item) {
      console.log('选中啦');
      console.log('当前' + this.form.category);
      console.log(item);
    },
    accountSelect (item) {
      console.log('选中啦');
      console.log('当前' + this.form.account);
      console.log(item);
    },
    currentPageChanged (data) {
      let resData = data;
      let currentTotal = {
        objSymbol: 'currentTotal',
        id: '合计'
      };
      let allTotal = {
        objSymbol: 'allTotal',
        id: '总计'
      };
      resData.push(currentTotal);
      resData.push(allTotal);
      this.pageTable = resData;
    },
    updateTableColsStatus (param) {
      this.tableUsableCols = param;
    }
  },
  mounted () {
    this.accountPrompt = this.loadAll().account;
    this.categoryPrompt = this.loadAll().category;
  },
  created () {
    this.tableData2 = this.tableDateAll();
  }
};
</script>

<style lang="less" scoped>
.analysis-transaction{
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
}
// .nav{
//   background:#272a31;
//   width:100%;
//   height:49px;
//   width: 100%;
//   header{
//     width: 200px;
//     height: 100%;
//     span{
//       font-family:PingFangSC-Medium;
//       font-size:14px;
//       letter-spacing:0;
//       color:#52e3ff;
//       letter-spacing:0;
//       height: 100%;
//       display: inline-block;
//       h2{
//         width: 100px;
//         padding-top: 15px;
//         margin-right: 50px;
//       }
//     }
//   }
//   div{
//      background-image:linear-gradient(-90deg, #00e2b8 0%, #009acd 100%);
//      width:100%;
//      height:2px;
//    }
// }
.analysis-transaction-hold{
  width: 100%;
  height: 100%;
  position: relative;
  background:#272a31;
  // form{
  //   margin-bottom: 10px;
  //   display: -webkit-flex;
  //   display: -moz-flex;
  //   display: -ms-flex;
  //   display: -o-flex;
  //   display: flex;
  //   flex-wrap: wrap;
  //   .el-form-item{
  //     flex-grow: 1;
  //     flex-shrink: 1;
  //     margin-right: 20px;
  //     margin-bottom: 5px;
  //     display: flex;
  //     span{
  //       margin: auto 20px;
  //       font-size: 14px;
  //       font-family:PingFangSC-Regular;
  //       font-size:14px;
  //       color:#ffffff;
  //       letter-spacing:0;
  //     }
  //     div{
  //       width: 220px;
  //       height: 38px;
  //       box-sizing: content-box;
  //     }
  //   }
  }
  .form-button{
    display: flex;
    float: right;
    margin-bottom: 20px;
    button{
      background:#444b5b;
      border-radius:4px;
      border:none;
      margin-right: 20px;
      &:hover{
        background:#17191d;
        border-color: #17191d;
      }
      &:focus{
        background:#17191d;
        border-color: #17191d;
      }
      &:active{
        background:#17191d;
        border-color: #17191d;
      }
    }

  }
  .table-list{
    margin: 0 10px;
    .table-sum{
      color: #ffffff;
      margin-top: 30px;
      div:nth-of-type(1){
        background-color: #622332;
        display: -webkit-flex; /* Safari */
        display: flex;
        span:nth-child(1){ width: 15%;}
        span:nth-child(2){ width: 80px;}
        span:nth-child(3){ margin-left: 30px; width: 50px;}
        span:nth-child(5){ width: 30%;}
        span:nth-child(9){ margin-left: 20px; width: 100px;}
        span:nth-child(10){ margin-left: 20px; width: 80px;}
      }
      div:nth-of-type(2){
        background-color: #0b415b;
        display: -webkit-flex; /* Safari */
        display: flex;
          span:nth-child(1){ width: 15%;}
          span:nth-child(2){ width: 80px;}
          span:nth-child(3){ margin-left: 30px; width: 50px;}
          span:nth-child(5){ width: 30%;}
          span:nth-child(9){ margin-left: 20px; width: 100px;}
          span:nth-child(10){ margin-left: 20px; width: 80px;}
      }
      span{
        display: inline-block;
        font-family:PingFangSC-Regular;
        font-size:14px;
        letter-spacing:0;
        margin-top: 18px;
        margin-bottom: 22px;
        float: left;
      }
      div{
        height: 56px;
      }
    }
  }
  div.block{
    float: right;
    margin: 50px 20px;
    input{
      background-color: #212227;
    }
    button{
      background-color: #212227;
    }
  }
div.table{
  margin-top: 20px;
  background:#272a31;
}

.form--wrap {
  display: flex;
  .el-form-item, .el-button {
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: nowrap;
    margin-right: 20px;
    text-align: left;
    &.item-init-max {
      flex-grow: 0;
      width: auto !important;
    }
  }
}


</style>
