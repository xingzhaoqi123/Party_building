<template>
    <div>
        <head_common :title='title' :per_info='xzq' v-on:editor="editor"></head_common>
        <ul class="per_info_list">
            <li class="per_info">
                <p class="left">头像</p>
                <input class="file" type="file" ref="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" v-bind:disabled="ifEditor">
                <img :src="header" alt="" v-if="header != '' ">
                <img src="../../images/头像.png" v-else alt="">
            </li>
            <li class="per_info">
                <p class="left">姓名</p>
                <p class="right">
                    <input type="text" v-model="per_info.username" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">身份证</p>
                <p class="right">
                    <input type="text" v-model="per_info.idCard" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">家庭住址</p>
                <p class="right">
                    <input type="text" v-model="per_info.hometown" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">工作地址</p>
                <p class="right">
                    <input type="text" v-model="per_info.address" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">民族</p>
                <p class="right">
                    <input type="text" v-model="per_info.nation" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">微信号</p>
                <p class="right">
                    <input type="text" v-model="per_info.wxNum" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">qq号</p>
                <p class="right">
                    <input type="text" v-model="per_info.qqNum" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">性别</p>
                <p class="right">
                    <input type="radio" v-model="per_info.sex" value="1" />男
                    <input type="radio" v-model="per_info.sex" value="0" />女
                </p>
            </li>
            <li class="per_info">
                <p class="left">最高学历</p>
                <p class="right">
                    <input type="text" v-model="per_info.education" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">职称</p>
                <p class="right">
                    <input type="text" v-model="per_info.jobRank" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">薪资水平</p>
                <p class="right">
                    <input type="text" v-model="per_info.salary" v-bind:disabled="ifEditor">
                </p>
            </li>
            <li class="per_info">
                <p class="left">入党时间</p>
                <p class="right">
                    <input v-model="per_info.joinPartyTime" type="date" v-bind:disabled="ifEditor" disableClear></input>
                </p>
            </li>
            <li class="per_info">
                <p class="left">党费最后缴纳时间</p>
                <p class="right">
                    <input v-model="per_info.lastPayTime" type="date" v-bind:disabled="ifEditor" disableClear></input>
                </p>
            </li>
            <li class="per_info">
                <p class="left">当前身份</p>
                <p class="right">
                    <select v-model="per_info.partyStatus">
                        <option v-for="item  in partyStatus" :name="item.name" :value="item.id">{{item.name}}</option>
                    </select>
                    <!-- {{per_info.partyStatus = 0 ? '党员':(per_info.partyStatus = 1 ? '预备党员':'积极分子')}} -->
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Indicator, Field } from "mint-ui";
export default {
    components: { head_common, Indicator, Field },
    data() {
        return {
            ifEditor: false,
            title: "",
            per_info: {},
            header: "",
            xzq: {
                a: 123,
                b: 111
            },
            partyStatus: [
                {
                    id: "0",
                    name: "党员"
                },
                {
                    id: "1",
                    name: "预备党员"
                },
                {
                    id: "2",
                    name: "积极分子"
                }
            ]
        };
    },
    methods: {
        editor: function(data) {
            this.ifEditor = data;
        },
        changeImage: function(e) {
            let file = e.target.files[0];
            let imgDataUrl = this.getObjectURL(file);
            // console.log(imgDataUrl);
            this.header = imgDataUrl;
            let formData = new FormData();
            formData.append("myFile", file);
            this.$axios.post("/image/uploadBase64.do", formData).then(res => {
                // console.log(res.data);
                this.per_info.header = res.data.url;
            });
        },
        getObjectURL(file) {
            let url = null;
            if (window.createObjectURL != undefined) {
                // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                // webkit or chrome
                url = window.URL.createObjectURL(file);
            } else if (window.URL != undefined) {
                // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            }
            return url;
        },

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
                        this.header = res.data.header;
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
    },
    watch: {
        data: function(value, oldvalue) {
            console.log(value);
        }
    }
};
</script>

<style lang="scss" scoped>
select {
    outline: none;
    border: none;
}
input {
    background-color: #fff;
    text-align: right;
    outline: none;
    border: none;
}
.per_info_list {
    margin-top: 44px;
    width: 100%;
    height: 100%;
    position: relative;
    .per_info {
        .file {
            height: 28px;
            width: 10px;
            outline: none;
            background-color: transparent;
            opacity: 0;
            position: absolute;
            right: 70px;
            filter: alpha(opacity=0);
            transform: translateY(50%);
            z-index: 111;
            float: right;
        }
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
