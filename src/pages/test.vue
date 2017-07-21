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
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="上海" value="上海"></el-option>
                <el-option label="北京" value="北京"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <button class="sure-btn">确认按钮</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      show: false,
      form: {
        name: '',
        region: '上海'
      }
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
