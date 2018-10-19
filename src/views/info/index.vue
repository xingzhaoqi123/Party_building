<template>
    <div>
        <head_common :title='title' :txt="$router.path == '/info' ? '编辑':'保存'"></head_common>
        <ul class="per_info_list">
            <li class="per_info">
                <p class="left">头像</p><img :src="per_info.header" alt="">
            </li>
            <li class="per_info">
                <p class="left">姓名</p>
                <p class="right">{{per_info.username}}</p>
            </li>
            <li class="per_info">
                <p class="left">身份证</p>
                <p class="right">{{per_info.idCard}}</p>
            </li>
            <li class="per_info">
                <p class="left">家庭住址</p>
                <p class="right">{{per_info.hometown}}</p>
            </li>
            <li class="per_info">
                <p class="left">工作地址</p>
                <p class="right">{{per_info.address}}</p>
            </li>
            <li class="per_info">
                <p class="left">民族</p>
                <p class="right">{{per_info.nation}}</p>
            </li>
            <li class="per_info">
                <p class="left">微信号</p>
                <p class="right">{{per_info.wxNum}}</p>
            </li>
            <li class="per_info">
                <p class="left">qq号</p>
                <p class="right">{{per_info.qqNum}}</p>
            </li>
            <li class="per_info">
                <p class="left">性别</p>
                <p class="right">{{per_info.sex = 1 ? '男':'女'}}</p>
            </li>
            <li class="per_info">
                <p class="left">最高学历</p>
                <p class="right">{{per_info.education}}</p>
            </li>
            <li class="per_info">
                <p class="left">职称</p>
                <p class="right">{{per_info.jobRank}}</p>
            </li>
            <li class="per_info">
                <p class="left">薪资水平</p>
                <p class="right">{{per_info.salary}}</p>
            </li>
            <li class="per_info">
                <p class="left">入党时间</p>
                <p class="right">{{per_info.joinPartyTime}}</p>
            </li>
            <li class="per_info">
                <p class="left">党费最后缴纳时间</p>
                <p class="right">{{per_info.lastPayTime}}</p>
            </li>
            <li class="per_info">
                <p class="left">当前身份</p>
                <p class="right">{{per_info.partyStatus = 0 ? '党员':(per_info.partyStatus = 1 ? '预备党员':'积极分子')}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Indicator } from "mint-ui";
export default {
    components: { head_common, Indicator },
    data() {
        return {
            title: "",
            per_info: {}
        };
    },
    methods: {
        getinfo() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/user/userInfo.do")
                .then(res => {
                    if (res.code === 1) {
                        Indicator.close();
                        this.per_info = res.data;
                    }
                })
                .catch(err => {
                    Indicator.open({
                        text: "Loading...",
                        spinnerType: "fading-circle"
                    });
                    console.log(err);
                });
        }
    },
    created() {
        this.getinfo();
        this.title = this.$route.meta.name;
        console.log(this.$route.path)
    }
};
</script>

<style lang="scss" scoped>
.per_info_list {
    margin-top: 44px;
    width: 100%;
    height: 100%;
    position: relative;
    .per_info {
        img {
            width: 28px;
            height: 28px;
            float: right;
            transform: translateY(50%);
        }
        height: 50px;
        padding: 0 10px;
        border-bottom: 1px solid #ddd;
        color: #444;
        font-size: 14px;
        line-height: 50px;
        .left {
            float: left;
        }
        .right {
            float: right;
        }
    }
}
</style>
