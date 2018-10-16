<template>
    <div class="foot foot-current">
        <nav class="bar bar-tab">
            <div :class=" '/' === $route.path ?'tab-item active' : 'tab-item'" @click="$router.push('/')">
                <span class="icon icon-home">
                    <img :src="'/' === $route.path ?tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
                </span>
                <span class="tab-label xzq">首页</span>
            </div>
            <div :class=" '/inform' === $route.path ?'tab-item active' : 'tab-item'" @click="$router.push('/inform')">
                <span class="icon icon-inform">
                    <img :src="'/inform' === $route.path ?tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="">
                </span>
                <span class="tab-label">通知早知道</span>
            </div>
            <div :class=" '/my_party' === $route.path ?'tab-item active' : 'tab-item'" @click="$router.push('/my_party')">
                <span class="icon icon-mine">
                    <img :src="'/my_party' === $route.path ?tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="">
                </span>
                <span class="tab-label">我的党建</span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabBarImgArr: [
                {
                    normal: require("../images/党_grey.png"),
                    selected: require("../images/党_red.png")
                },
                {
                    normal: require("../images/消息_grey.png"),
                    selected: require("../images/消息_red.png")
                },
                {
                    normal: require("../images/会员_grey.png"),
                    selected: require("../images/会员_red.png")
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.foot {
    background-color: #fff;
    height: 46px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1111;
    .bar {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .tab-item {
            text-decoration: none;
            padding-top: 4px;
            font-size: 10px;
            line-height: 14px;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            color: #999;
        }
        .icon {
            img {
                display: block;
                margin: 0 auto;
                width: 21px;
                height: 21px;
            }
        }
    }
    .tab-label {
        display: block;
        text-decoration: none;

        text-align: center;
        margin-top: 6px;
    }
}
.active {
    margin-top: -2px;
    border: 0 solid #ef473a;
    border-top-width: 2px;
    span {
        color: #ef473a;
    }
}
</style>
