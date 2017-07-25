<template>
  <div class="account-center">
    <article class="region user-overview">
      <header>用户概览</header>
      <div class="user-msg">
        <lable>
          <div class="title">用户头像：</div>
          <div class="content">
            <div class="headshot">
            </div>
          </div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
        <lable>
          <div class="title">交易账号：</div>
          <div class="content">JOHN DOE</div>
        </lable>
        <lable>
          <div class="title">昵称：</div>
          <div class="content">方砖</div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
        <lable>
          <div class="title">密码：</div>
          <div class="content">********</div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
        <lable>
          <div class="title">手机号码：</div>
          <div class="content">13600000000</div>
        </lable>
        <lable>
          <div class="title">邮箱地址：</div>
          <div class="content">molehe_1024@163.com</div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
      </div>
      <div class="line"></div>

      <div class="card-info">
        <lable>
          <div class="title">姓名：</div>
          <div class="content">谢霆锋</div>
        </lable>
        <lable>
          <div class="title">证件编号：</div>
          <div class="content">[身份证]440111111111111111</div>
        </lable>
        <lable>
          <div class="title">证件有效期：</div>
          <div class="content">2025年3月1日</div>
        </lable>
        <lable>
          <div class="title">证件照片：</div>
          <div class="content">
            <div class="card-front"></div>
            <div class="card-back"></div>
          </div>
        </lable>
        <lable>
          <div class="title">投递地址：</div>
          <div class="content">广东省 广州市 荔湾区1850创意园</div>
          <button class="modify-btn" type="submit">修改</button>
        </lable>
      </div>
      <div class="line"></div>

      <div class="bind-card">
        <lable>
          <div class="title">银行卡：</div>
          <div class="content">已绑定2张</div>
        </lable>
      </div>
    </article>

    <article class="region my-mt-account">
      <header>我的MT账号</header>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        class="el-table">
        <el-table-column
          prop="accountNumber"
          label="账号">
        </el-table-column>
        <el-table-column
          prop="lever"
          label="杠杆">
        </el-table-column>
        <el-table-column
          label="主账号">
          <template scope="scope">
            <el-switch v-model="scope.row.mainAccountNumber" on-text="" off-text="" off-color="#999" on-color="#00cc00"></el-switch>
          </template>
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

      value1: true,
      tableData: [
        {
          accountNumber: '56735678',
          lever: '1:100',
          mainAccountNumber: true,
          del: ''
        },
        {
          accountNumber: '56735678',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735678',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        },
        {
          accountNumber: '56735678',
          lever: '1:100',
          mainAccountNumber: false,
          del: ''
        }
      ]
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
    .user-overview{
      text-align: center;
      .line {
        margin: 0 auto;
        background-color: #22232a;
        width: 90%;
        height:2px;
      }
    }
  }
  .user-overview{
    width: 50%;
    .user-msg{
      padding: 30px;
      lable {
        font-family: PingFangSC-Regular;
        display: flex;
        flex-direction: row;
        padding: 5px 0px;
        .title {
          display: inline-block;
          width: 90px;
          text-align: right;
          font-size: 14px;
          color: #94959a;
          letter-spacing: 0;
        }

        .content {
          flex: 1;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;

          .headshot {
            border-radius: 50%;
            width: 70px;
            height: 70px;
            background-color: #fff;
          }
        }
        button {
          border: 1px solid #94959a;
          width: 50px;
          height: 25px;
          background: #272a31;
          color: #94959a;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }

  .card-info {
    padding: 30px;
    lable {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      display: flex;
      flex-direction: row;
      padding: 5px 0px;
      .title{
        display: inline-block;
        width: 90px;
        text-align: right;
        color: #94959a;
        letter-spacing: 0;
      }
      .content {
        flex: 1;
        flex-direction: row;
        color: #ffffff;
        letter-spacing: 0;
        text-align: left;
        .card-front,.card-back {
          display: inline-block;
          border:1px solid #94959a;
          width:205px;
          height:128px;
          border-radius: 8px;
        }
        .card-back {
          margin-left: 30px;
        }
      }
      button {
        border: 1px solid #94959a;
        width: 50px;
        height: 25px;
        background: #272a31;
        color: #94959a;
        border-radius: 4px;
        font-size: 12px;
      }
    }
  }

  .my-mt-account {
    width: 50%;
    .el-table th {
      background-color: #18191d;
    }

  }
</style>
