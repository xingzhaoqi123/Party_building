<template>
    <div>
        <head_common :title='title'></head_common>
        <div class="detail">
            <ul :style="{'-webkit-overflow-scrolling': this.scrollMode,'overflow': 'scroll'}">
                <mt-loadmore :bottom-method="this.loadBottom" :bottom-all-loaded="allLoaded" :bottomDropText='bottomDropText' :bottomLoadingText='txt' :bottomPullText='txt' :auto-fill="true" ref="loadmore">

                    <li class="detail_item" v-for="(item,index) in newList " :key="item.index">
                        <div class="item">
                            <div class="left fll">
                                <p class="left_type">{{item.typeName}}</p>
                                <p class="left_time">{{item.timeFormat}}</p>
                            </div>
                            <div class="right flr">
                                <p class="right_single">+{{item.singleDesc}}</p>
                            </div>
                        </div>
                    </li>

                    <div class="more" v-if="!more">
                        --我也是有底线的--
                    </div>
                </mt-loadmore>
            </ul>
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
            param: {
                page: 1,
                rows: 10
            },
            total: "",
            more: true,
            allLoaded: false,
            scrollMode: "auto",
            newList: [],
            bottomDropText: "↓",
            txt: ""
        };
    },
    methods: {
        hasmore() {
            if (this.param.page == this.total) {
                this.more = false;
            } else {
                this.more = true;
            }
        },
        loadBottom() {
            if (this.param.page == this.total) {
                this.allLoaded = true;
                this.more = false;
            } else {
                this.param.page = this.param.page + 1;
                this.getdetail();
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        getdetail() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/integral/integralList.do", this.param)
                .then(res => {
                    this.newList.push(...res.rows);
                    this.total = Math.ceil(res.total / 10);
                    Indicator.close();
                })
                .catch(err => {
                    Indicator.open({
                        text: "Loading...",
                        spinnerType: "fading-circle"
                    });
                });
        }
    },
    mounted() {
        this.getdetail();
    },
    created() {
        this.title = this.$route.meta.name;
        this.hasmore();
    }
};
</script>
<style>
.mint-loadmore-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
}
</style>

<style lang="scss" scoped>
.detail {
    margin-top: 44px;
    width: 100%;
    height: auto;
    position: relative;
    .detail_item {
        height: 45px;
        border-bottom: 1px solid #ddd;
        padding: 16px;
        .item {
            display: flex;
            justify-content: space-between;
        }
        .left {
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .left_type {
                font-size: 18px;
            }
            .left_time {
                font-size: 14px;
            }
        }
        .right_single {
            line-height: 45px;
            color: red;
            font-size: 16px;
        }
    }
}
</style>

