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
            <img src="../assets/img/index-avatar.png" alt="user--avatar">
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
        <div class="item__wrap">
          <pie-echart-comp ref="positionStructureComp" :pieOption="positionsStructureOption"></pie-echart-comp>
          <div class="posi-abs asset--status">
            <p>总资产</p>
            <p>$888,888,888</p>
          </div>
          <div class="posi-abs asset--money">
            <p class="">$123,123,212</p>
            <p class="">$453,465</p>
            <p class="">$548,343</p>
            <p class="">$12,213</p>
          </div>
        </div>
      </div>
      <div class="dealer--entry">
        <div class="content--main__item dealer">
          <article class="item__header">
            <header>
              交易概况
              <div class="posi-abs header__more"></div>
            </header>
          </article>
          <div class="is-flex dealer--content">
            <div class="">
              <p>总开仓数：12</p>
              <p>$999,999.00</p>
            </div>
            <div class="">
              <p>总平仓数：13</p>
              <p>$999,999.00</p>
            </div>
          </div>
        </div>
        <div class="is-flex entry--leave">
          <div class="entry">
            <p>出金总数：$6,545.00</p>
            <div class="entry--btn">出金</div>
          </div>
          <div class="leave">
            <p>入金总数：$6,545.00</p>
            <div class="leave--btn">入金</div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-flex positions--commission">
      <div class="content--main__item positions">
        <article class="item__header">
          <header>
            持仓概况
            <div class="posi-abs header__more"></div>
          </header>
        </article>
        <div class="positions--summary">
          <p>
            <span>占用保证金：$222,222.00</span>
            <span>跟单手数：$22,222.00</span>
          </p>
          <p>浮动盈亏：<span class="positions--summary--hightlight">$88,888.00</span></p>
        </div>
        <div class="positions-chart">
          <trend-line-echart-comp :positionsOptions="positionsOptions"></trend-line-echart-comp>
        </div>
      </div>
      <div class="commission--activity">
        <div class="content--main__item commission">
          <article class="item__header">
            <header>
              我的佣金
              <div class="posi-abs header__more"></div>
            </header>
          </article>
          <div class="is-flex commission__promote--distribution">
            <div class="promote">
              <p>推广赠金</p>
              <p>$888,788.00</p>
            </div>
            <div class="distribution">
              <p>分销赠金</p>
              <p>$88,788.00</p>
            </div>
          </div>
        </div>
        <div class="content--main__item activity">
          <article class="item__header">
            <header>
              最新活动
              <div class="posi-abs header__more"></div>
            </header>
          </article>
          <div class="activity--wrap">
            <swiper :options="activitySwiperOption">
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <swiper-slide><img src="../assets/img/index-activity-banner.png" alt=""></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>

    <div class="content--main__item calendar--news__wrap">
      <article class="item__header">
        <header>
          时事日历
          <div class="posi-abs header__more"></div>
        </header>
      </article>
      <div class="item__wrap is-flex calendar--news">
        <div class="calendar__wrap"></div>
        <div class="news__wrap">
          <el-table id="news-table" :data="newsTableData" style="width: 100%" header-align="center" :row-class-name="tableRowClassName">
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="country" label="国家/地区"></el-table-column>
            <el-table-column prop="theme" label="指标名称"></el-table-column>
            <el-table-column prop="influence" label="影响"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="content--main__item dealer--detail__wrap">
      <article class="item__header">
        <header>
          交易行情
          <!-- <div class="posi-abs header__more"></div> -->
          <div class="posi-abs add--more">
            <span>添加行情</span>
            <i class="el-icon-plus"></i>
          </div>
        </header>
      </article>
      <div class="item__wrap is-flex dealer--detail">
        <div>
          <trend-line-echart-comp :positionsOptions="dealerDetailOption"></trend-line-echart-comp>
        </div>
        <div>
          <trend-line-echart-comp :positionsOptions="dealerDetailOption"></trend-line-echart-comp>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import pieEchartComp from '@comps/pie-echart-comp';
import trendLineEchartComp from '@comps/trend-line-echart-comp';

import tmpDataMixin from '@mixins/tmp-data-mixin';

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    pieEchartComp,
    trendLineEchartComp
  },
  mixins: [tmpDataMixin],
  data () {
    return {
    };
  },
  computed: {
  },
  created: function () {
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 1) {
        return 'even-row';
      }
      return 'odd-row';
    }
  }
};
</script>

<style lang="less">
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
  position: relative;
  height: calc(~"100% - 45px");
}

.echarts {
  width: 100% !important;
  height: 100% !important;
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
  margin-bottom: 14px;
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

.asset--status {
  top: 80px;
  left: 120px;
  color: #ffffff;
  > p{
    &:first-child {
      font-size: 14px;
    }
    &:last-child {
      font-size: 24px;
      max-width: 120px;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
}

.asset--money {
  top: 50px;
  right: 90px;
  color: #ffffff;
  p {
    margin-bottom: 20px;
  }
}

.dealer--content {
  box-sizing: border-box;
  justify-content: space-between;
  padding-bottom: 10px;
  height: 101px;
  text-align: left;
  > div {
    width: 50%;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      border-right: 2px solid #1d2027;
    }
  }
  p {
    &:first-child {
      font-size: 18px;
      color: #00dfb9;
      margin-left: 41px;
      margin-bottom: 12px;
    }
    &:last-child {
      font-size: 32px;
      color: #ffffff;
      margin-left: 63px;
    }
  }
}

.entry--leave {
  height: 124px;
  justify-content: space-between;
  color: #ffffff;
  > div {
    background: #272a31;
    flex-basis: 50%;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      margin-right: 13px;
    }
    > p {
      font-size: 18px;
      margin: 22px 0 22px;
    }
  }
}

.entry--btn {
  background-image:linear-gradient(-90deg, #00e2b8 0%, #009acd 100%);
  border-radius:4px;
  width:100px;
  height:40px;
  line-height: 40px;
  margin: auto;
}

.leave--btn {
  background-image:linear-gradient(-90deg, #ff5862 0%, #e54f9a 100%);
  border-radius:4px;
  width:100px;
  height:40px;
  line-height: 40px;
  margin: auto;
}

// -------------------------

.positions--commission {
  justify-content: space-between;
  margin-bottom: 14px;
}

.positions {
  width: 50%;
  height: 465px;
  margin-right: 16px;
  text-align: left;
}

.positions--summary {
  box-sizing: border-box;
  margin-top: 12px;
  padding-left: 35px;
  color: #ffffff;
  p {
    font-size: 14px;
    &:first-child {
      margin-bottom: 26px;
      span:first-child {
        margin-right: 60px;
      }
    }
  }
  &--hightlight {
    color: red;
  }
}

.positions-chart {
  height: 340px;
}

.commission--activity {
  width: 50%;
  height: 465px;
}

.commission {
  height: 146px;
  margin-bottom: 13px;
}

.commission__promote--distribution {
  height: 101px;
  justify-content: space-between;
  text-align: left;
  box-sizing: border-box;
  padding-bottom: 9px;
  > div {
    height: 100%;
    width: 50%;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
    &:first-child {
      border-right: 2px solid #1d2027;
    }
    p {
      margin-left: 53px;
      &:first-child {
        font-size: 14px;
        color: @main-theme-sub;
        margin-bottom: 9px;
      }
      &:last-child {
        color: #ffffff;
        font-size: 32px;
      }
    }
  }
}

.activity {
  height: 307px;
}

.activity--wrap {
  height: 262px;
  box-sizing: border-box;
  padding: 17px 11px 14px;
}

.swiper-container {
  height: 100% !important;
}
.swiper-slide {
  img {
    width: 100%;
    height: 100%;
  }
}

// --------------------------

.calendar--news__wrap {
  height: 420px;
  margin-bottom: 14px;
}

.calendar--news {
  height: calc(~"100% - 45px");
  box-sizing: border-box;
  padding: 22px 51px 0 57px;
  justify-content: space-between;
  > div {
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.calendar__wrap {
  // margin-right: 125px;
  flex-basis: 27.61%;
  max-width: 27.61%;
}

.news__wrap {
  flex-basis: 61.34%; 
  max-width: 61.34%;
}

.el-table {
  background: #272a31 !important;
  text-align: center;
  color: #ffffff;
  border-width: 0;
  * {
    border-width: 0 !important;
  }
}

.el-table .odd-row {
  background: #272a31;
}

.el-table .even-row {
  background: #22252d;
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

.el-table__row {
  &:hover {
    color: #333;
  }
}

// --------------------------

.dealer--detail__wrap {
  min-height: 465px;
}

.dealer--detail {
  min-height: calc(~"100% - 45px");
  justify-content: space-between;
  margin-top: 20px;
  > div {
    margin: 0 27px 30px;
    flex-basis: 50%;
    flex-shrink: 1;
    flex-grow: 1;
    height: 360px;
  }
}

.add--more {
  right: 38px;
  top: 13px;
  color: @main-theme-sub;
  * {
    vertical-align: middle;
  }
  span {
    font-size: 14px;
  }
  i {
    font-size: 11px;
    margin-left: 9px;
  }
}

</style>
