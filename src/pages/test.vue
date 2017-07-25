<template>
  <div class="test">
    <button class="cold-bg">冷色渐变</button>
    <button class="hot-bg">热色渐变</button>
    <div class="is-flex test-main">
      <article class="region">
      <header>
        模块一
      </header>
      <div class="region-main">

      </div>
      </article>
      <article class="region">
      <header>
        模块二
      </header>
      <div class="region-main">

      </div>
      </article>
    </div>
    <button class="cold-bg" @click="contralPopup">弹出框样式以及表单样式</button>
    <div class="popup" v-show="show">
      <article class="popup-main">
        <header>
          表单全部采用element表单，样式已写好
          <i class="close" @click="contralPopup">×</i>
        </header>
        <div class="popup-content">
          <el-form ref="form" :model="testForm" label-width="100px">
            <el-form-item label="活动名称">
              <el-input v-model="testForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="testForm.region" placeholder="请选择活动区域">
                <el-option label="上海" value="上海"></el-option>
                <el-option label="北京" value="北京"></el-option>
              </el-select>
            </el-form-item>
            <verify :parentVerify.sync="testForm.verify" :parentPhone.sync="testForm.phone" :needPhone="true"></verify>
          </el-form>
          <button class="sure-btn">确认按钮</button>
        </div>
      </article>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import verify from '@comps/verify.vue';
export default {
  name: 'test',
  components: {
    verify
  },
  data () {
    return {
      show: false,
      testForm: {
        verify: '',
        phone: '',
        name: '',
        region: '上海'
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
    contralPopup () {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .test{
    .test-main{
      width: 100%;
      .region{
        flex: 1;
        margin:0 10px;
      }
    }
    button{
      width: 100px;
      height: 40px;
    }
  }
</style>
