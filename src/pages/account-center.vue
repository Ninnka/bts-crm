<template>
  <div class="account-center">
    <article class="region user-overview">
      <header>用户概览</header>
      <form class="user-msg">
        <lable >
          用户头像：
          <div>
            <div class="headshot">
            </div>
          </div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
        <lable>
          交易账号：
          <div>
            <span>
              JOHN DOE
            </span>
          </div>
        </lable>
        <lable>
          昵称：
          <div>
            <span>
              方砖
            </span>
          </div>
        </lable>
      </form>
    </article>

    <article class="region my-mt-account">
      <header>我的MT账号</header>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="account-number"
          label="账号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="lever"
          label="杠杆"
          width="180">
        </el-table-column>
        <el-table-column
          prop="main-account-number"
          label="主账号">
        </el-table-column>
        <el-table-column
          prop="del"
          label="操作">
        </el-table-column>
      </el-table>

    </article>
  </div>
</template>

<script>
export default {
  name: 'AccountCenter',
  data () {
    return {

    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
  .account-center {
    padding: 20px;
  }
  .user-overview{
    width: 647px;
    .user-msg{
      /*display: flex;*/
      /*flex-direction: column;*/
      padding: 40px;
      lable {
        font-size: 14px;
        color: #94959a;
        display: flex;
        flex-direction: row;
        div{
          display: inline-block;
          flex: 1;
          text-align: left;
          .headshot{
            border-radius: 50%;
            width: 70px;
            height: 70px;
            background-color: #fff;

          }
        }
        button {
          border: 1px solid #94959a;
          width: 60px;
          height: 30px;
          background: #272a31;
          color: #94959a;
          border-radius: 4px;
          font-size: 14px;
        }
      }
    }
  }

  .my-mt-account {

  }
</style>
