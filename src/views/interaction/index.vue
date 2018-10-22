<template>
    <div :class="show == true ? 'page  active' : 'page'">
        <head_common :title='title'></head_common>
        <div class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="30">
            <div class="item" v-for="(item,index) in newsList" :key="item.index">
                <div class="item_content">
                    <div class="item_top">
                        <div class="head"><img :src="item.header" alt="" v-if="item.header"><img v-else src="../../images/头像.png" alt=""></div>
                        <div class="msg">
                            <div class="username">{{item.username}}</div>
                            <div class="time">
                                <div class="fll "><img src="../../images/时间.png" alt=""></div>
                                <div class="fll ml">
                                    <p>{{item.currentTime}}</p>
                                </div>
                                <div class="fll ml"><img src="../../images/声音.png" alt=""></div>
                                <div class="fll ml">
                                    <p>公开</p>
                                </div>
                            </div>
                        </div>
                        <div class="label">
                            <div class="inter">党员互动</div>
                        </div>
                    </div>
                    <div class="item_mid">{{item.content}}</div>
                    <div class="item_bottom" @click="skip(item.header,item.username,item.currentTime,item.content,item.forumId)">
                        <p class="flr reply">回复</p><img src="../../images/回复.png" class="flr" alt="">
                    </div>
                </div>
            </div>
            <div class="more" v-if="!more">
                --我也是有底线的--
            </div>
        </div>
        <div class="issue" @click="show = true;">
            <img src="../../images/发布btn.png" alt="">
        </div>
        <div class="box" v-show="show">
            <div class="box_sore">
                <div class="txt">
                    <mt-field type="textarea" rows="4" v-model='issue.content'></mt-field>
                </div>
                <div class="box_bt">
                    <div class="btn_red fll btn" @click="fabu">发布</div>
                    <div class="btn_gray flr btn" @click="show = false,issue.content = ''">取消</div>
                </div>
            </div>
        </div>
        <div class="cover" v-show="show" @click="show = false">

        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { InfiniteScroll, Field, Toast, Indicator } from "mint-ui";
export default {
    components: { head_common, InfiniteScroll, Field, Toast, Indicator },
    data() {
        return {
            issue: {
                content: "",
                type: 1
            },
            show: false,
            more: true,
            title: "",
            newsList: [
                // {
                //     content: "1111",
                //     currentTime: "2018-10-20 16:41:34",
                //     header:
                //         "http://oowantxlb.bkt.clouddn.com/upload/front/997fa0fd69fb772c56ab2669115f0036.png",
                //     username: "QQ群"
                // },
                // {
                //     content: "3333",
                //     currentTime: "2018-10-20 16:41:34",
                //     header:
                //         "http://oowantxlb.bkt.clouddn.com/upload/front/997fa0fd69fb772c56ab2669115f0036.png",
                //     username: "QQ群"
                // },
                // {
                //     content: "55555",
                //     currentTime: "2018-10-20 16:41:34",
                //     header:
                //         "http://oowantxlb.bkt.clouddn.com/upload/front/997fa0fd69fb772c56ab2669115f0036.png",
                //     username: "QQ群"
                // }
            ],
            per_msg: {},
            loading: false,
            total: 1,
            param: {
                page: 0,
                rows: 10,
                type: 0,
                cates: 0
            },
            myMsg: {
                commentCount: null,
                content: "123666666666",
                createTime: 1540034281000,
                currentTime: "2018-10-20 19:18:01",
                forumId: "687CEDD4328A4E7696645ACC470F112C",
                header:
                    "http://oowantxlb.bkt.clouddn.com/upload/front/13df66aca85c6fb85a656b21e5904cc9.png",
                isPriv: 0,
                type: 1,
                userId: 2,
                username: "12388"
            }
        };
    },
    methods: {
        skip(header, username, currentTime, content, forumId) {
            this.$router.push({
                name: "interactionDetail",
                params: {
                    header: header,
                    username: username,
                    time: currentTime,
                    content: content,
                    forumId: forumId
                }
            });
        },
        fabu() {
            // this.myMsg = res.data;
            // console.log(this.issue);
            // console.log(this.newsList);
            // this.newsList.unshift(this.myMsg);
            var formData = new FormData();
            formData.append("content", this.issue.content);
            formData.append("type", this.issue.type);
            this.$axios.post("/forum/saveForum.do", formData).then(res => {
                // console.log(res.data.data);
                this.newsList.unshift(res.data.data);
                Toast({
                    message: "发布成功"
                });
                // this.myMsg = res.data;
            });
            this.show = false;
            this.issue.content = "";
            //     console.log(this.newsList);
        },
        loadMore() {
            if (this.param.page == this.total) {
                this.loading = true;
                this.more = false;
            } else {
                this.param.page = this.param.page + 1;
                this.getinteraction();
            }
        },
        getinteraction() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/forum/forumList.do?", this.param)
                .then(res => {
                    if (res.code == 1) {
                        this.newsList.push(...res.rows);
                        Indicator.close();
                        this.total = Math.ceil(res.total / 10);
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
    mounted() {
        this.getinteraction();
    },
    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style lang="scss" scoped>
.active {
    position: fixed;
    overflow: hidden;
}
.cover {
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100%;
    background-color: #666666;
    width: 100%;
    filter: alpha(opacity=60);
    opacity: 0.6;
    z-index: 995;
}
.box {
    width: 100%;
    height: 181px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: #f1f1f1;
    z-index: 998;
    .box_sore {
        display: flex;
        flex-direction: column;
        padding: 16px;
        margin: 0 auto;
        .txt {
            textarea {
                height: 100px;
            }
        }
        .box_bt {
            margin-top: 10px;
            .btn {
                width: 38px;
                height: 31px;
                text-align: center;
                line-height: 31px;
                font-size: 14px;
                border-radius: 3px;
            }
            .btn_red {
                background-color: #ef473a;
                color: #fff;
                text-align: center;
                line-height: 31px;
                font-size: 14px;
                border-radius: 3px;
            }
            .btn_gray {
                color: #7f7f7f;
                background-color: #fff;
            }
        }
    }
}
.issue {
    position: fixed;
    bottom: 60px;
    right: 12px;
}
.more {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .spinner {
        width: 100%;
        height: 50px;
    }
}
.page {
    width: 100%;
    height: 100%;
    background-color: #efeff4;
    z-index: -11;
    color: rgb(68, 68, 68);
    .content {
        margin-top: 44px;
    }
}
.item {
    margin-bottom: 15px;
    height: 140px;
    width: 100%;
    background-color: #fff;
    .item_content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item_top {
            flex: 2;
            display: flex;
            flex-direction: row;
            .head {
                flex: 1;
                img {
                    height: 33px;
                    width: 33px;
                }
            }
            .msg {
                flex: 7;
                margin-left: 10px;
                .username {
                    font-size: 18px;
                    text-align: left;
                }
                .time {
                    font-size: 12px;

                    .ml {
                        margin-left: 5px;
                    }
                    img {
                        width: 12px;
                        height: 12px;
                    }
                }
            }
            .label {
                flex: 2;
                width: 66px;
                height: 26px;
                border: 1px solid red;
                color: red;
                border-radius: 13px;
                text-align: center;
                line-height: 26px;
            }
        }
        .item_mid {
            flex: 1;
            font-size: 16px;
            text-align: left;
            margin-top: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .item_bottom {
            flex: 1;
            font-size: 14px;
            text-align: right;
            margin-top: 10px;
            .reply {
                font-size: 14px;
                margin-left: 10px;
                height: 20px;
                line-height: 20px;
            }
            img {
                height: 16px;
                width: 16px;
                transform: translateY(26%);
            }
        }
    }
}
</style>

