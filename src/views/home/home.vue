<template>
    <div>
        <div class="head_wrap">
            <div class="head_contain ">
                <div class="head_logo fll">
                    <img src="../../images/logo.png" alt="党建e家">
                </div>
                <div class="login flr">
                    <router-link to="/login" style='text-decoration: none'>
                        <p>登录</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="swiper">
            <swiper></swiper>
        </div>
        <div class="menuList">
            <div class="table_row">
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_01.png" alt="信工新闻眼" class="menuItem_img">
                        <p class="menuItem_title">信工新闻眼</p>
                    </div>
                </a>
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_03.png" alt="掌上组织生活" class="menuItem_img">
                        <p class="menuItem_title">掌上组织生活</p>
                    </div>
                </a>
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_05.png" alt="党员云互动" class="menuItem_img">
                        <p class="menuItem_title">党员云互动</p>
                    </div>
                </a>
            </div>
            <div class="table_row">
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_04.png" alt="党建一点通" class="menuItem_img">
                        <p class="menuItem_title">党建一点通</p>
                    </div>
                </a>
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_06.png" alt="党员亮身份" class="menuItem_img">
                        <p class="menuItem_title">党员亮身份</p>
                    </div>
                </a>
                <a href="">
                    <div class="menuItem">
                        <img src="../../images/icon_02.png" alt="党史上的今天" class="menuItem_img">
                        <p class="menuItem_title">党史上的今天</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="banner">
            <img src="../../images/banner01.png" alt="">
        </div>
        <div class="table">
            <div class="table_left nav"></div>
            <div class="table_mid nav">
                <a href="" class="table_item"></a>
                <a href="" class="table_item"></a>
            </div>
            <div class="table_right nav">
                <a href="" class="table_item"></a>
                <a href="" class="table_item"></a>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import swiper from "../../components/swiper";
import foot from "../../components/footer";
export default {
    components: { swiper, foot },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.table {
    margin-top: -3px;
    position: relative;
    height: 165px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-image: url("../../images/tese.png");
    background-size: cover;
    z-index: -1;
    margin-bottom: 46px;
    .nav {
        flex: 1;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .table_item {
            flex: 1;
        }
    }
}
.banner {
    img {
        width: 100%;
    }
}
.menuList {
    height: 197px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: url("../../images/bt_bg.png");
    background-size: cover;
    z-index: -1;
    .table_row {
        a {
            text-decoration: none;
            color: #666;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .menuItem {
            text-align: center;
            .menuItem_img {
                width: 50px;
                height: 50px;
            }
        }
    }
}
.swiper {
    margin-top: 44px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: -1;
}
.head_wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #c50206;
    height: 44px;
    .head_contain {
        padding: 5px;
        .head_logo {
            img {
                width: 133px;
            }
        }
        .login {
            p {
                cursor: pointer;
                padding-right: 2px;
                padding-left: 2px;
                font-weight: 300;
                font-size: 17px;
                padding-top: 8px;
                color: #fff;
            }
        }
    }
}
</style>

