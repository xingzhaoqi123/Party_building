<template>
    <div class="page">
        <head_common :title='title'></head_common>
        <div class="pay">
            <div class="title frame">请选择支付方式</div>
            <div class="wx per_item" @click="(wxshow = true,show = true)">
                <div class="item_img fll"><img src='../../images/微信icon.png' alt=""></div>
                <div class="item_title fll">微信</div>
                <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
            </div>
            <div class="alipay per_item" @click="(alipayshow = true,show = true)">
                <div class="item_img fll"><img src='../../images/支付宝icon.png' alt=""></div>
                <div class="item_title fll">支付宝</div>
                <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
            </div>
        </div>
        <div class="photo" v-show="wxshow" @click="noshow">
            <div class="photo_title">微信支付</div>
            <div class="photo_img"><img src="../../images/wechat.png" alt=""></div>
        </div>
        <div class="photo" v-show="alipayshow" @click="noshow">
            <div class="photo_title">支付宝支付</div>
            <div class="photo_img"><img src="../../images/alipay.png" alt=""></div>
        </div>
        <div class="cover" @click="noshow" v-show="show"></div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: "",
            show: false,
            wxshow: false,
            alipayshow: false
        };
    },
    methods: {
        noshow() {
            this.show = false;
            this.wxshow = false;
            this.alipayshow = false;
        }
    },
    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    height: 100%;
    position: absolute;
}
.cover {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    background-color: #666666;
    width: 100%;
    filter: alpha(opacity=30);
    opacity: 0.3;
    z-index: 2;
}
.photo {
    width: 300px;
    height: 340px;
    position: relative;
    background-color: #fff;
    z-index: 3;
    margin: 0 auto;
    transform: translateY(-11%);
    .photo_title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
    }
    .photo_img {
        margin: 0 auto;
        img {
            width: 300px;
            height: 300px;
        }
    }
}
.pay {
    margin-top: 44px;
    .frame {
        width: 100%;
        height: 62px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
        line-height: 62px;
    }
    .per_item {
        height: 62px;
        display: flex;
        border-bottom: 1px solid #ddd;
        justify-content: space-between;
        .item_img {
            width: 54px;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                display: block;
                width: 40px;
                height: 40px;
            }
        }
        .item_title {
            position: relative;
            margin: 16px 0;
            height: 20px;
            width: 100%;
            width: 267px;
            text-align: left;
            color: #666;
            font-size: 16px;
        }
        .item_right {
            margin: 16px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                display: block;
                width: 8px;
                height: 12px;
                margin-right: 20px;
            }
        }
    }
}
</style>

