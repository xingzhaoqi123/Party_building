<template>
    <div>
        <head_common :title='title'></head_common>
        <div class="score">
            <div class="score_img">
                <p>{{score}}</p>
            </div>
        </div>
        <div class="per_item"  @click="$router.push({name:'scoredetail'})">
            <div class="item_img fll"><img src='../../images/lxjf.png' alt=""></div>
            <div class="item_title fll">积分明细</div>
            <div class="item_right flr"><img src="../../images/right.png" alt=""></div>
        </div>
        <ul class="score_list">
            <li class="per_score rule">
                <p class="rule_p">积分规则</p><img src="../../images/wenhao.png" class="right" alt="">
            </li>
            <li class="per_score">
                <p class="left">登录APP</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">完善个人信息</p>
                <p class="right">2</p>
            </li>
            <li class="per_score">
                <p class="left">查看积分</p>
                <p class="right">1</p>
            </li>
            <li class="per_score">
                <p class="left">按时缴纳党费</p>
                <p class="right">10</p>
            </li>
            <li class="per_score">
                <p class="left">查看通知</p>
                <p class="right">2</p>
            </li>
            <li class="per_score">
                <p class="left">了解学院工作动态</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">上交思想汇报经审核通过</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">主动学习相关文件</p>
                <p class="right">10</p>
            </li>
            <li class="per_score">
                <p class="left">认真撰写心得总结并上交，经审核通过</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">提交个人总结，并参与评议</p>
                <p class="right">2</p>
            </li>
            <li class="per_score">
                <p class="left">积极参与互动</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">学习党建知识</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">学习党史</p>
                <p class="right">10</p>
            </li>
            <li class="per_score">
                <p class="left">创先争优事迹</p>
                <p class="right">10</p>
            </li>
            <li class="per_score">
                <p class="left">学党章，学习习近平总书记系列讲话</p>
                <p class="right">10</p>
            </li>
            <li class="per_score">
                <p class="left">用镜头记录两学一做过程中令人感动的人和事</p>
                <p class="right">3</p>
            </li>
            <li class="per_score">
                <p class="left">关注并积极参与特色活动</p>
                <p class="right">5</p>
            </li>
            <li class="per_score">
                <p class="left">制度化、常态化建设</p>
                <p class="right">5</p>
            </li>
        </ul>
        <footer></footer>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: "",
            score: ""
        };
    },
    methods: {
        getscore() {
            this.$axios
                .get("/user/userInfo.do")
                .then(res => {
                    if (res.code === 1) {
                        this.score = res.data.totalScore;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getscore();
    },
    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style lang="scss" scoped>
.score_list {
    margin-bottom: 46px;
    .rule {
        background-color: #eee;
        .rule_p {
            color: #000;
            float: left;
        }
    }
    .per_score {
        img {
            width: 18px;
            height: 18px;
            float: right;
            transform: translateY(50%);
        }
        height: 34px;
        padding: 0 10px;
        border-bottom: 1px solid #ddd;
        color: #444;
        font-size: 14px;
        line-height: 34px;
        .left {
            float: left;
            color: rgb(153, 153, 153);
        }
        .right {
            float: right;
            color: red;
        }
    }
}
footer {
    height: 46px;
    width: 100%;
    position: fixed;
    background-color: #efeff4;
    bottom: 0;
    right: 0;
    left: 0;
}
.score {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 43px;
    .score_img {
        width: 100%;
        height: 145px;
        background-image: url("../../images/jifen.png");
        background-size: cover;
        p {
            color: #fff;
            text-align: center;
            line-height: 145px;
            font-size: 16px;
        }
    }
}
.per_item {
    margin-top: 5px;
    height: 52px;
    display: flex;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    border-top: 1px solid #ddd;
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
</style>

