<template>
    <div class="page">
        <head_common :title='title'></head_common>
        <div class="page_body">
            <div class="reply">
                <div class="content">
                    <div class="item_top">
                        <div class="head"><img :src="params.header" alt="" v-if="params.header"><img v-else src="../../images/头像.png" alt=""></div>
                        <div class="msg">
                            <div class="username">{{params.username}}</div>
                            <div class="time">
                                <div class="fll "><img src="../../images/时间.png" alt=""></div>
                                <div class="fll ml">
                                    <p>{{params.time}}</p>
                                </div>
                                <div class="fll ml"><img src="../../images/声音.png" alt=""></div>
                                <div class="fll ml">
                                    <p>公开</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item_mid">{{params.content}}</div>
                </div>
                <div class="foot">
                    <div class="foot_frame">
                        <input type="text" class="field" placeholder="评论内容">
                    </div>
                    <div class="comment">评论</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Field } from "mint-ui";
export default {
    components: { head_common, Field },
    data() {
        return {
            params: {
                header: "",
                username: "",
                time: "",
                content: "",
                forumId: ""
            }
        };
    },
    created() {
        this.title = this.$route.meta.name;
        this.params = this.$route.params;
    }
};
</script>

<style lang="scss" scoped>
.content {
    z-index: 333;
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
}
.page {
    width: 100%;
    height: 100%;
    background-color: #efeff4;
    position: fixed;
    z-index: -998;
    .page_body {
        margin-top: 54px;
    }
    .reply {
        margin: 10px;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        z-index: -111;
        .foot {
            z-index: 111;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            background-color: #fff;
            .foot_frame {
                width: 100%;
                flex: 7;
                padding: 8px;
            }
            .field {
                border: 1px solid #c50206;
                border-radius: 3px;
                height: 29px;
                font-size: 14px;
                width: 100%;
            }
            .comment {
                flex: 1;
                width: 34px;
                margin-right: 10px;
                height: 31px;
                background: #c50206;
                color: #fff;
                font-size: 15px;
                border-radius: 3px;
                text-align: center;
                line-height: 31px;
                transform: translateY(25%);
            }
        }
    }
}
</style>

