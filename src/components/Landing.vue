<template>
  <div class="landing">
    <div class="top_banner_false"></div>
    <!-- <div :class="[isFixed?'top_banner_false':'top_banner_false']" v-else> -->
    <transition name="fade">
      <div class="top_banner" v-if="isFixed">
        <div class="left_logo">
          <img src="../assets/imgs/banner_logo@2x.png" alt />
        </div>
        <div class="right_btn">Check Eligibility NOW</div>
      </div>
    </transition>
    <div class="first_box">
      <p class="title">
        Equity<span>Mate</span>
      </p>
      <p class="contents">The Aussie way of property ownership with little to zero deposit</p>
      <span class="middle_btn">Check Eligibility NOW</span>
    </div>
    <div class="second_box">
      <div class="left_img_box">
        <img src="../assets/imgs/middle_house_logo@2x.png" alt />
      </div>
      <div class="right_text_box">
        <p class="title">
          <span>About</span>Equity<span>Mate</span>
        </p>
        <p
          class="contents"
        >EquityMate is a dedicated program to assist first home buyers and investors into property ownership with little to zero deposit.</p>
      </div>
    </div>
    <div class="third_box">
      <div class="title">How it works</div>
      <div class="contents">
        <div class="item_img_box">
          <div class="up_img">
            <img src="../assets/imgs/left1_img@2x.png" alt />
          </div>
          <div class="center_title">Apply</div>
          <div class="bottom_text">Fill in a 3-minute survey to confirm your eligibility</div>
        </div>
        <div class="item_img_box">
          <div class="up_img">
            <img src="../assets/imgs/left2_img@2x.png" alt />
          </div>
          <div class="center_title">Meet</div>
          <div class="bottom_text">Have a chat with our experts</div>
        </div>
        <div class="item_img_box">
          <div class="up_img">
            <img src="../assets/imgs/left3_img@2x.png" alt />
          </div>
          <div class="center_title">Confirm</div>
          <div class="bottom_text">Discuss your property options and next steps</div>
        </div>
      </div>
    </div>
    <div class="fouth_box">
      <div class="up_title">Property options</div>
      <div class="middle_img">
        <el-carousel :interval="4000" type="card" height="314px">
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt /> 1-3
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <!-- Block B - Pinnacle Schofields (0-3 $349,990 - $659,990) 4a-8 Isla Street, Schofields New South Wales 2762 -->
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt />
                    <span>1-3</span>
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt />
                    <span>1-3</span>
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt />
                    <span>1-3</span>
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt />
                    <span>1-3</span>
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel_inner_item">
              <div class="img_box">
                <img src="../assets/imgs/properties/BlockA.jpeg" alt />
              </div>
              <div class="text_box">
                <p class="first_text">Block A - Pinnacle Schofields</p>
                <p class="second_text">8 Isla Stree, Schofields New South Wales 2762</p>
                <div class="bottom_text_box">
                  <div class="left_span">
                    <img src="../assets/imgs/icon_img@2x.png" alt />
                    <span>1-3</span>
                  </div>
                  <div class="right_span">$459,990 - $664,990</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div
        class="bottom_text"
      >* The above properties are examples from our wide range of properties to choose from.</div>
    </div>
    <div class="fifth_box">
      <div class="up_title">Success story</div>
      <div class="middle_img">
        <div class="left_img_box">
          <!-- <img src="../assets/imgs/banner_logo@2x.png" alt=""> -->
          <iframe
            class="videoframe"
            src="https://arc-ricp-data.oss-cn-hongkong.aliyuncs.com/equitymate/videos/Testimony%20Video%20720.mp4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="right_text_box">
          <div class="title">1 dollar deposit</div>
          <div class="contents">
            <p>Meet the Pedro Family. The young family with a 1 year old came into our office seeking a solution to the Aussie dream of home ownership.</p>
            <p>Their main obstacle was the deposit.</p>
            <p>Through our program, we helped this family get into their first home for $1.</p>
            <p>To see if you can qualify, please click "Check Eligibility NOW" button.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_box">Copyright 2020 © EquityMate | Privacy Policy</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testdata: "",
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);

      if (scrollTop >= 567) {
        this.isFixed = true;
        console.log(111);
        console.log(this.isFixed);
      } else {
        this.isFixed = false;
        console.log(222);
        console.log(this.isFixed);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.landing {
  width: 1440px;
  margin: 0 auto;
  height: 3500px;

  background-image: url(../assets/imgs/top_home@2x.png);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100% auto;
  position: relative;

  .top_banner {
    height: 100px;
    width: 1440px;
    // background: red;
    // position: relative;
    position: fixed;
    top: 0;
    z-index: 999;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 10px 0 rgba(77, 172, 233, 0.21);
    background-color: rgba(255, 255, 255, 0.5);
    // border: 1px solid pink;
    .left_logo {
      width: 216px;
      height: 51px;
      position: absolute;
      top: 27px;
      left: 103px;
      z-index: 998;
      // border: 1px solid red;
      img {
        margin: 0;
        height: 100%;
        // border: 1px solid red;
      }
    }
    .right_btn {
      position: absolute;
      // left:  1166px;
      right: 92px;
      top: 25px;
      z-index: 999;
      width: 242px;
      height: 49px;
      margin: 0 0 11px;
      padding: 15px 33px 14px;
      border-radius: 6px;
      background-color: #ffb71a;
      color: #fff;
      font-family: Arial;
      font-size: 18px;
    }
    .right_btn:hover {
      cursor: pointer;
    }
  }
  .top_banner_false {
    height: 100px;
  }
  .first_box {
    // height: 54px;
    width: 430px;
    margin-top: 265px;
    margin-left: 104px;
    // border: 1px solid red;
    text-align: left;
    .title {
      font-family: Arial;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #4dace9;
      span {
        color: #214873;
      }
    }
    .contents {
      font-family: Arial;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #11273e;
      margin-top: 20px;
      // border: 1px solid red;
    }
    .middle_btn {
      margin-top: 31px;
      display: inline-block;
      width: 242px;
      height: 49px;
      // padding: 15px 33px;
      border-radius: 6px;
      background-color: #ffb71a;
      text-align: center;
      line-height: 49px;
      color: #fff;
      font-family: Arial;
      font-size: 18px;
      // border: 1px solid pink;
    }
    .middle_btn:hover {
      cursor: pointer;
    }
  }
  .second_box {
    height: 481px;
    // border: 1px solid red;
    margin-top: 268px;
    position: relative;
    .left_img_box {
      display: inline-block;
      position: absolute;
      left: 0;
      height: 481px;
      width: 50%;
      // border: 1px solid red;
      img {
        height: 481px;
      }
    }
    .right_text_box {
      position: absolute;
      right: 0;
      display: inline-block;
      height: 481px;
      width: 49%;
      // border: 1px solid pink;
      padding-top: 250px;
      text-align: left;
      .title {
        font-family: Arial;
        font-size: 40px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4dace9;
        span {
          color: #214873;
        }
      }
      .contents {
        font-family: Arial;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #11273e;
        margin-top: 20px;
        // border: 1px solid red;
      }
    }
  }
  .third_box {
    margin-top: 162px;
    height: 450px;
    // border: 1px solid red;
    position: relative;
    .title {
      height: 44px;
      font-family: Arial;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #214873;
      text-align: center;
      width: 100%;
      // border: 1px solid red;
    }
    .contents {
      .item_img_box {
        // margin-top: 0!important;
        display: inline-block;
        height: 380px;
        width: 33%;
        // background: red;
        text-align: center;
        // border: 1px solid red;
        .up_img {
          width: 266px;
          height: 266px;
          margin: 0 auto;
          img {
            width: 100%;
            // height: 400px;
            // border: 1px solid red;
          }
        }
        .center_title {
          height: 27px;
          font-family: Arial;
          font-size: 24px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #214873;
          margin-top: 18px;
        }
        .bottom_text {
          margin-top: 23px;
          height: 40px;
          width: 247px;
          margin-left: auto;
          margin-right: auto;
          font-family: Arial;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #11273e;
        }
      }
    }
  }
  .fouth_box {
    height: 454px;
    margin-top: 191px;
    text-align: left;
    padding-left: 105px;
    .up_title {
      height: 44px;
      font-family: Arial;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #214873;
    }
    .middle_img {
      height: 314px;
      margin-top: 62px;
      // border: 1px solid red;
      .carousel_inner_item {
        height: 301px;
        width: 379px;
        // border: 1px solid pink;
        .img_box {
          height: 170px;
          img {
            height: 100%;
          }
        }
        .text_box {
          padding-left: 15px;
          text-align: left;
          .first_text {
            height: 20px;
            margin-top: 20px;
            font-family: Arial;
            font-size: 18px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
          }
          .second_text {
            height: 16px;
            margin-top: 20px;
            font-family: Arial;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4a4a4a;
          }
          .bottom_text_box {
            height: 40px;
            margin-top: 10px;
            padding-top: 20px;
            border-top: solid 0.5px #d3d3d3;
            position: relative;
            .left_span {
              position: absolute;
              left: 0;
              height: 20px;
              font-family: Arial;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 20px;
              letter-spacing: normal;
              color: #000000;
              img {
                height: 100%;
              }
              span {
                // border: 1px solid red;
                position: absolute;
                height: 20px;
                width: 50px;
                bottom: 0;
                left: 30px;
              }
            }
            .right_span {
              position: absolute;
              right: 0;
              height: 20px;
              font-family: Arial;
              font-size: 14px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 20px;
              letter-spacing: normal;
              color: #000000;
            }
          }
        }
      }
    }
    .bottom_text {
      height: 16px;
      margin-top: 18px;
      font-family: Arial;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #11273e;
    }
  }
  .fifth_box {
    height: 438px;
    margin-top: 191px;
    text-align: left;
    padding-left: 105px;
    .up_title {
      height: 44px;
      font-family: Arial;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #214873;
    }
    .middle_img {
      height: 314px;
      margin-top: 62px;
      // border: 1px solid red;
      position: relative;
      .left_img_box {
        position: absolute;
        left: 40px;
        display: inline-block;
        height: 314px;
        width: 41.8%;
        background: pink;
        padding: 0;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
      .right_text_box {
        position: absolute;
        right: 40px;
        display: inline-block;
        height: 314px;
        width: 48%;
        .title {
          margin-top: 10px;
          font-family: Arial;
          font-size: 24px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #214873;
        }
        .contents {
          margin-top: 23px;
          font-family: Arial;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #11273e;
          p {
            margin-top: 10px;
          }
        }
      }
    }
  }
  .footer_box {
    padding-left: 105px;
    text-align: left;
    height: 100px;
    width: 100%;
    background-color: #4dace9;
    position: absolute;
    bottom: 0;
    color: #fff;
    line-height: 100px;
  }
}
</style>