<template>
    <div>
        <mt-swipe :auto="0" class="swipe" :show-indicators="false">
            <mt-swipe-item class="swiper_img">
                <a href=""> <img src="http://oowantxlb.bkt.clouddn.com/upload/rear/749b4f2a7cc56b5c0068545718fd24d4.png" alt="">
                </a>
                <div class="swipe_pagination">adsfadsfadsfadsf</div>
            </mt-swipe-item>
            <mt-swipe-item class="swiper_img">
                <a href=""> <img src="http://oowantxlb.bkt.clouddn.com/upload/rear/4bbac18c1f8f6c0521b7b6af2ae8ad6c.png" alt=""></a>
                <div class="swipe_pagination">adsfadsfadsfadsf</div>
            </mt-swipe-item>
            <mt-swipe-item class="swiper_img">
                <a href=""> <img src="http://oowantxlb.bkt.clouddn.com/upload/rear/66e257fe2b5afdbb6acb8ed1127d06c9.png" alt=""></a>
                <div class="swipe_pagination">adsfdsfasdfasd</div>
            </mt-swipe-item>
            <mt-swipe-item class="swiper_img">
                <a href=""> <img src="http://oowantxlb.bkt.clouddn.com/upload/rear/46296e429c7cda71b941b99fa3461fd1.png" alt=""></a>
                <div class="swipe_pagination">adsfadsfadsfadsf</div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import "mint-ui/lib/style.css";
import { Swipe, SwipeItem } from "mint-ui";
export default {
    components: {
        Swipe,
        SwipeItem
    }
};
</script>
<style lang="scss">
// .swipe_pagination {
//     width: 100%;
//     height: 20px;
//     padding-bottom: 30px;
//     border: 1px solid red;
//     position: relative;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     z-index: 21;
//     background-color: #000;
// }
.swipe {
    height: 225px;
    background-color: #ccc;
    display: block;
    width: 100%;
    .swiper_img {
        img {
            display: block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
        }
    }
}
</style>
