<template>
  <div class="app-product-detail tw-flex tw-flex-col tw-gap-5 tw-pb-4">
    <BreadScrumb />
    <Container class="tw-flex tw-gap-8 tw-flex-col">
      <div class="product-name">
        <p>
          Điện thoại iPhone 15 Pro Max 256GB
        </p>
      </div>
      <div class="product-main">
        <div class="product-swiper">
          <swiper :spaceBetween="10" :pagination="true" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules" class="swiper-view">
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(2).jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(4).jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(7).jpg" />
            </swiper-slide>
          </swiper>
          <swiper @swiper="setThumbsSwiper" :navigation="true" :spaceBetween="10" :slidesPerView="8" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="swiper-slider">
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(2).jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(4).jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-img">
              <img src="https://cdn.tgdd.vn/Products/Images/42/305658/Slider/vi-vn-iphone-15-pro-max-256gb--(7).jpg" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="product-info">
          <div class="product-rating">
            <div class="rating">
              <span class="title"> Đánh giá: </span>
              <span> 4.9 </span>
              <font-awesome-icon icon="star" />
            </div>
            <div class="sold">Sold 125</div>
          </div>
          <div class="product-price">
            <span>
              29.000.000đ
            </span>
          </div>
          <div class="product-options">
            <div class="option-specs">
              <div class="title">Bộ nhớ:</div>
              <!-- <div :class="[
                selectProduct.option.attribute._id === att._id
                  ? 'active'
                  : '',
                'spec',
              ]" @click="selectProductOption({ att })" v-for="att in product.options.attribute" :key="att._id">
                {{ att.value }}
              </div> -->
              <!-- <div>
                                {{ selectProduct.option.attribute.quantity }}
                            </div> -->
            </div>
            <div class="option-colors">
              <h3 class="title">Màu sắc:</h3>
              <!-- <span :style="{ 'background-color': color.value }" :class="[
                selectProduct.option.color.value === color.value
                  ? 'active'
                  : '',
                'color',
              ]" @click="selectProductOption({ color })" v-for="color in product.options.colors" :key="color.value">
              </span> -->
            </div>
          </div>
          <div class="product-benefit">
            <h3 class="title">
              <span>Khuyến mãi:</span>
            </h3>
            <div class="desc-coupon">
              <ul>
                <li>Tặng phiếu mua hàng trị giá 500k</li>
                <li>Tặng phiếu mua hàng trị giá 500k</li>
                <li>Tặng phiếu mua hàng trị giá 500k</li>
                <li>Tặng phiếu mua hàng trị giá 500k</li>
              </ul>
            </div>
          </div>
          <div class="product-accept-payment">
            <h3 class="title">Thanh toán:</h3>
            <ul>
              <li>Giảm 5% khi thanh toán với VNPay</li>
              <li>Thanh toán khi nhận hàng</li>
            </ul>
          </div>
          <div class="product-btn">
            Mua ngay
          </div>
        </div>
      </div>
      <div class="product-desc-technical">
        <div class="title">Thông số kỹ thuật</div>
        <div class="desc">
          <ul class="technical">
            <li v-for="n in 8" :key="n">
              <h5>Màn hình:</h5>
              <div>AMOLED 6.7'Full HD+</div>
            </li>
          </ul>
          <div class="introduce">
            <span>Giới thiệu</span>
            <p>
              OPPO Reno10 Pro 5G là một trong những sản phẩm của OPPO được ra mắt trong 2023. Với thiết kế đẹp mắt, màn
              hình lớn và hiệu năng mạnh mẽ, Reno10 Pro chắc chắn sẽ là lựa chọn đáng cân nhắc dành cho những ai đang tìm
              kiếm chiếc máy tầm trung để phục vụ tốt mọi nhu cầu. Thiết kế của Reno10 Pro 5G trông rất ấn tượng với kiểu
              thiết kế bo cong ở mặt lưng và màn hình, điều này mang lại trải nghiệm cầm nắm thoải mái khi sử dụng để
              không cảm thấy bị cấn, phần viền màn hình vì thế cũng trông mỏng hơn giúp tạo nên một tổng thể sang trọng và
              cực kỳ bắt mắt.
            </p>
          </div>
        </div>
      </div>
      <div class="product-similar tw-flex tw-gap-5 tw-flex-col">
        <Heading toptitle="Sản phẩm" title="Sản phẩm tương tự" :allowViewAll="true" />
        <div class="list-product">
          <swiper :modules="modules" :slides-per-view="4.5" :navigation="true" :space-between="24" id="swiper-slider"
            :breakpoints="breakpoints">
            <swiper-slide class="swiper-item" v-for="n in 8" :key="n">
              <ProductItem />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </Container>

  </div>
</template>
  
<script lang="ts" setup>
import Container from "@components/base/Container.vue";
import BreadScrumb from "@/components/base/BreadScrumb.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SwiperModule, SwiperOptions, Swiper as SwiperClass } from "swiper/types";
import { breakpoints } from "@utils/breackpoints"
import ProductItem from "@/components/product/ProductItem.vue";
import Heading from "@/components/base/Heading.vue";

const thumbsSwiper = ref<any>(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const modules: SwiperModule[] = [FreeMode, Navigation, Thumbs, Pagination];

</script>
<route lang="yaml">
  name: iPhone 15 Pro Max
  meta:
    layout: "default"
</route>
<style lang="scss">
.app-product-detail {

  .product-name {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    padding-bottom: 16px;
    border-bottom: 1px solid $border-section;
  }

  .product-main {
    display: flex;
    gap: 24px;
    width: 100%;
    flex-direction: column;

    @include min-lg {
      flex-direction: row;
    }

    .product-swiper {
      user-select: none;
      width: 100%;
      background-color: $light-primary;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;

      @include min-lg {
        width: 60%;
      }

      .swiper-button-prev,
      .swiper-button-next {
        &.swiper-button-disabled {
          display: none;
        }
      }

      .swiper-button-prev:after,
      .swiper-button-next:after {
        padding: 10px;
        font-size: 20px;
        border-radius: 10px;
        font-weight: 600;
        background-color: $light-primary;
        color: $gray;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        &:hover {
          color: red !important;
        }
      }

      .swiper-view {
        .swiper-img {
          display: flex;
          align-items: center;
        }

        width: 100%;

        img {
          width: 100%;
        }
      }

      .swiper-slider {
        display: flex;
        align-items: center;
        max-width: 100%;
        // width: 100%;

        // .swiper-wrapper {
        //     display: flex;
        //     justify-content: center !important;
        // }
        .swiper-slide-thumb-active {
          background: #0000002d;
        }

        .swiper-img {
          cursor: pointer;
          height: 80px;
          width: 80px !important;
          padding: 5px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid $border-section;

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }

    .product-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 32px;

      @include min-lg {
        width: 40%;
      }

      .product-rating {
        display: flex;
        gap: 32px;
        font-size: 14px;

        .rating {
          display: flex;
          gap: 5px;
          font-weight: 600;
          color: $orange;

          .title {
            color: $black;
          }
        }

        .sold {
          color: $gray;
        }
      }

      .product-desc-short {
        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      }
    }

    .product-price {
      padding: 15px;
      color: red;
      font-size: 28px;
      font-weight: 700;
      background-color: rgba($yellow, 0.4);
      border-radius: 8px;
    }

    .product-options {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .option-specs {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        .title {
          align-self: center;
          font-weight: 600;
        }

        .spec {
          padding: 10px;
          border-radius: 8px;
          border: 2px solid $border-section;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

          &:hover,
          &.active {
            border: 2px solid $red;
          }
        }
      }

      .option-colors {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        .title {
          align-self: center;
          font-weight: 600;
        }

        .color {
          height: 36px;
          width: 36px;
          border-radius: 50%;
          background-color: $azure;
          position: relative;
          cursor: pointer;

          &.active::after {
            content: "";
            width: 46px;
            height: 46px;
            border: 2px solid #000;
            position: absolute;
            box-sizing: border-box;
            border-radius: 50%;
            left: -5px;
            top: -5px;
          }
        }
      }
    }

    .product-benefit {
      display: flex;
      gap: 16px;
      flex-direction: column;
      background-color: $light-blue;
      padding: 20px;
      border-radius: 10px;
      position: relative;

      .icon {
        position: absolute;
        width: 80px;
        top: -35px;
        left: -10px;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
      }

      .desc-coupon {
        ul {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }

    .product-accept-payment {
      border: 1px solid $gray;
      padding: 10px 20px;
      border-radius: 8px;
      background-color: $light-bg-secondary;

      .title {
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
      }

      ul {
        li {
          line-height: 150%;
          font-size: 14px;
        }
      }
    }

    .product-btn {
      background-color: $red;
      color: $white;
      font-size: 16px;
      font-weight: 600;
      padding: 22px;
      cursor: pointer;
      border-radius: 8px;
      text-align: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .product-desc-technical {
    display: flex;
    gap: 24px;
    flex-direction: column;

    .title {
      font-size: 16px;
      font-weight: 600;
      color: $blue;
    }

    .desc {
      display: flex;
      flex-direction: column;
      gap: 32px;

      @include min-lg {
        flex-direction: row;
      }

      .technical {
        @include min-lg {
          width: 50%;
        }

        li {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;

          @include min-lg {
            flex-direction: row;
            gap: 0;

            h5 {
              overflow: hidden;
              display: inline-block;
              width: 140px;
              white-space: normal;
              text-overflow: ellipsis;
              overflow: hidden;
              font-weight: 600;
            }

            div {
              width: calc(100% - 140px);
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }

        li:nth-child(odd) {
          background-color: #f5f5f5;
        }
      }

      .introduce {
        span {
          font-size: 25px;
          font-weight: 600;
          padding-bottom: 20px;
        }

        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
          line-height: 150%;
        }

        @include min-lg {
          width: 50%;
        }
      }
    }
  }


  .product-similar {
    .swiper{
      padding: 0 6px;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      background-color: $white;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 15px;
      box-shadow: $box-shadow-prd;
      border-radius: 50%;
      color: $gray;
    }
  }
}
</style>