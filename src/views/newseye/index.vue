<template>
    <div>
        <head_common :title='title'></head_common>
        <div class="neweye" :style="{'-webkit-overflow-scrolling': this.scrollMode}">
            <mt-loadmore :bottom-method="this.loadBottom" :bottom-all-loaded="allLoaded" :bottomLoadingText='txt' :bottomPullText='txt' :auto-fill="true" ref="loadmore">
                <div>
                    <div v-for="(item,index) in newList" :key="item.index">
                        <div class="news_content" @click="skip(item.newsId)">
                            <div class="left_pic fll">
                                <img :src="item.pic" alt="">
                            </div>
                            <div class="right_title fll">
                                <p class="title">{{item.title}}</p>
                                <p> <span class="time fll">{{gettime(item.updateTime)}}</span>
                                    <span class="lookcount flr clearfix">
                                        <img src="../../images/浏览.png" alt="" class="fll">
                                        <span class="fll">{{item.count}}
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <mt-spinner  class="spinner" type="fading-circle" color='#3778B7' :size="60"></mt-spinner> -->
                <div class="more" v-if="!more">
                    --我也是有底线的--
                </div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Loadmore, Spinner, Indicator } from "mint-ui";
export default {
    components: { head_common, "mt-loadmore": Loadmore, Spinner },
    data() {
        return {
            title: "",
            newList: [],
            allLoaded: false,
            scrollMode: "auto",
            param: {
                page: 1,
                rows: 10,
                type: 0
            },
            total: "",
            more: true,
            txt: ""
        };
    },
    methods: {
        skip(id) {
            this.$router.push({
                name: `newsDetail`,
                params: {
                    title: this.title,
                    id: id,
                    type: ""
                }
            });
        },
        loadBottom() {
            if (this.param.page == this.total) {
                this.allLoaded = true;
                this.more = false;
            } else {
                this.param.page = this.param.page + 1;
                this.getnewList();
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        gettime(time) {
            let date = new Date(time);
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();

            let hour = date.getHours();
            let min = date.getMinutes();
            let second = date.getSeconds();
            return `${year}-${month}-${day} ${hour}:${min}:${second}`;
        },
        getnewList() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/news/newsList.do", this.param)
                .then(res => {
                    if (res.code == 1) {
                        this.newList.push(...res.rows);
                        this.total = Math.ceil(res.total / 10);
                        Indicator.close();
                    }
                })
                .catch(err => {
                    Indicator.open({
                        text: "Loading...",
                        spinnerType: "fading-circle"
                    });
                });
        }
    },
    created() {
        this.param.type = this.$route.params.type;
        this.title = this.$route.params.title;
        this.getnewList();
    }
};
</script>

<style lang="scss" scoped>
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
.neweye {
    margin-top: 44px;
    overflow: auto;
    touch-action: none;
}
.news_content {
    height: 100px;
    border-bottom: 1px solid #ddd;
    display: flex;
    text-decoration: none;

    .left_pic {
        width: 80px;
        height: 80px;
        padding: 10px;
        img {
            display: block;
            width: 80px;
            height: 80px;
        }
    }
    .right_title {
        padding: 10px;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #000;
        .title {
            font-size: 16px;
            height: 48px;
            line-height: 24px;
            max-height: 48px;
            width: 265px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
}
.lookcount {
    img {
        display: block;
        width: 25px;
        height: 23px;
        margin-right: 6px;
    }
    span {
        height: 23px;
        line-height: 23px;
    }
}
</style>

