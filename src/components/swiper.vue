<template>
    <div>
        <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item class="swiper_img" v-for="(item,index) in swiper" :key="index">
                <div @click="skip(item.url)">
                    <div> <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="swipe_pagination">{{item.title}}</div>
                </div>
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
    },
    data() {
        return {
            title: "随时随地学",
            param: {
                type: 0
            },
            swiper: []
        };
    },
    methods: {
        skip(id) {
            this.$router.push({
                name: `newsDetail`,
                params: {
                    title: this.title,
                    id: id
                }
            });
        },
        getswiper() {
            this.$axios
                .get("/carousel/carouselList.do", this.param)
                .then(res => {
                    if (res.code == 1) {
                        this.swiper = res.rows;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        this.getswiper();
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
    height: 187.5px;
    background-color: #ccc;
    display: block;
    width: 100%;
    overflow: auto;
    cursor: pointer;
    .swiper_img {
        // overflow: hidden;
        background-size: cover;
        background-position: 50%;
        img {
            display: block;
            width: 100%;
            height: 100%;
            height: auto;
        }
    }
}
</style>
