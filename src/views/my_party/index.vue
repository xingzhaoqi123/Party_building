<template>
    <div>
        <div class="head_wrap">
            <div class="head_title">我的党建</div>
        </div>
        <div class="party_content">
            <div class="head_port">
                <div class="head_top"></div>
                <div class="head_port_img">
                    <img :src=" $store.state.userinfo.header" alt="" v-if="$store.state.userinfo.header">
                    <img v-else src="../../images/bt_bg.png" alt="">
                </div>
                <div class="login_mes">{{$store.state.token == '' ? '你还没有登录，请登录' : $store.state.userinfo.username}}</div>
            </div>
            <div class="per_msg">
                <ul>
                    <li class="per_item" @click="$router.push({name:'info'})">
                        <div class="item_img fll"><img src='../../images/person.png' alt=""></div>
                        <div class="item_title fll">个人信息</div>
                        <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
                    </li>
                    <li class="per_item" @click="$router.push({name:'score'})">
                        <div class="item_img fll"><img src='../../images/lxjf.png' alt=""></div>
                        <div class="item_title fll">个人量化积分</div>
                        <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
                    </li>
                    <li class="per_item" @click="$router.push({name:'uppass'})">
                        <div class="item_img fll"><img src='../../images/xgmm.png' alt=""></div>
                        <div class="item_title fll">修改密码</div>
                        <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
                    </li>
                    <li class="per_item" @click="$router.push({name:'pay'})">
                        <div class="item_img fll"><img src='../../images/icon3.png' alt=""></div>
                        <div class="item_title fll">党费缴纳</div>
                        <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
                    </li>
                </ul>
            </div>
            <div class="logout" v-show="this.$store.state.token">
                <button class="logout_btn" @click="logout">退出登录</button>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import foot from "../../components/footer";
import head_common from "../../components/head_common";
export default {
    components: { foot, head_common },
    methods: {
        logout() {
            this.$store.commit("DEL_TOKEN");
        }
    }
};
</script>

<style lang="scss" scoped>
.logout {
    height: 87px;
    padding: 10px;
}
.logout_btn {
    width: 100%;
    font-size: 16px;
    transform: translateY(50%);
    height: 47px;
    margin: 10px auto;
    background-color: #ef473a;
    border: none;
    color: #fff;
    border-radius: 3px;
}
.party_content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-top: 43px;
    .head_port {
        height: 141px;
        background-color: #c50206;
        position: relative;
        .head_top {
            content: "";
            height: 38px;
        }
        .head_port_img {
            margin: 0 auto;
            top: 38px;
            width: 62.5px;
            height: 62.5px;
            border-radius: 50%;
            img {
                width: 62.5px;
                border-radius: 50%;
                height: 62.5px;
            }
        }
        .login_mes {
            margin-top: 5px;
            text-align: center;
            color: #fff;
        }
    }
}
.head_wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #c50206;
    height: 44px;
    .head_title {
        margin: 0 auto;
        line-height: 44px;
        text-align: center;
        font-weight: 300;
        font-size: 19px;
        color: #fff;
    }
}
.per_msg {
    .per_item {
        height: 52px;
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
                width: 32px;
                height: 32px;
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

