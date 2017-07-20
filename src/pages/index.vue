<template>
  <div class="content--main">
    <div class="content--main__item account">
      <article class="item__header">
        <header>
          用户概览
          <!-- <div class="posi-abs header__more"></div> -->
        </header>
      </article>
      <div class="item__wrap user--profile is-flex">
        <div class="profile--summary">
          <div class="profile--avatarinfo">
            <img src="" alt="user--avatar">
            <div class="disp-ib">
              <p>JOHN DOE</p>
              <p>1234666688</p>
              <p>邀请码：8888888886</p>
            </div>
            <i class="el-icon-setting posi-abs custom-icon-setting"></i>
          </div>
          <div class="invite--link">
            <p>邀请链接：https://www.douban.com/group/topic/97123912</p>
          </div>
        </div>
        <div class="profile--account is-flex">
          <div class="account--item">
            <img src="../assets/img/Mt.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
          <div class="account--item">
            <img src="../assets/img/hold-account.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
          <div class="account--item">
            <img src="../assets/img/icon-documentary.png" alt="">
            <div class="item-desc">
              <p>持有MT账号</p>
              <p><span>1</span>个</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-flex assets--dealer">
      <div class="content--main__item assets">
        <article class="item__header">
          <header>
            资产概况
            <div class="posi-abs header__more"></div>
          </header>
        </article>
      </div>
      <div class="dealer--entry">
        <div class="content--main__item dealer">
          <article class="item__header">
            <header>
              交易概况
              <div class="posi-abs header__more"></div>
            </header>
          </article>
        </div>
        <div class="is-flex entry--leave">
          <div class="entry"></div>
          <div class="leave"></div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'index',
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
@main-theme-sub: #94959a;

.disp-ib {
  display: inline-block;
}
.posi-abs {
  position: absolute;
}
.text-center {
  text-align: center;
}
.content--main {
  width: 100%;
  height: 100%;
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
    top: 12px;
    right: 12px;
    height: 24px;
    width: 10px;
    background: greenyellow;
  }
}
.item__wrap{
  min-height: 40px;
}

// --------------------

.account {
  margin-bottom: 14px;
}
.user--profile {
  height: 155px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 0 8px 42px;
  > div {
    height: 100%;
    flex-shrink: 1;
    flex-grow: 1;
  }
}

.profile--summary {
  width: 38.22%;
  box-sizing: border-box;
  border-right: 2px solid #1d2027;
  height: 100px;
  position: relative;
  text-align: left;
  > div {
    width: 100%;
  }
}

.profile--avatarinfo {
  margin-bottom: 20px;
  > img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    vertical-align: top;
  }
  div:nth-child(2) {
    margin-left: 20px;
    color: white;
    > p:not(:first-child) {
      color: @main-theme-sub;
    }
  }
}
.invite--link {
  font-size: 14px;
  color: #94959a;
  text-align: left;
}

.custom-icon-setting {
  top: 0;
  right: 12%;
  width: 18px;
  height: 20px;
  color: @main-theme-sub;
}

.profile--account {
  width: 60%;
  justify-content: space-around;
  align-items: center;
  > div {
    flex-basis: 33%;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.account--item {
  .item-desc {
    margin-left: 25px;
    text-align: left;
    p:nth-child(1) {
      font-size: 14px;
      color: @main-theme-sub;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      font-size: 18px;
      color: #ffffff;
      span:first-child {
        font-size: 32px;
        margin-right: 8px;
      }
    }
  }
  > img {
    max-width: 68px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}

// ---------------------

.assets--dealer {
  justify-content: space-between;

}

.assets {
  width: 50%;
  height: 284px;
  margin-right: 16px;
}

.dealer--entry {
  width: 50%;
  height: 284px;
}

.dealer {
  height: 146px;
  margin-bottom: 14px;
}

.entry--leave {
  height: 124px;
  justify-content: space-between;
  > div {
    background: #272a31;
    flex-basis: 50%;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      margin-right: 13px;
    }
  }
}

</style>
