<template>
    <div class="photo">
        <head_common :title='title'></head_common>
        <mt-loadmore :bottom-method="this.loadBottom" :bottom-all-loaded="allLoaded" :bottomLoadingText='txt' :bottomPullText='txt' :auto-fill="true" ref="loadmore">
            <div>
                <div v-for="(item,index) in newList" :key="item.index" class="anytimephoto">
                    <div class="photo_content fll" @click="skip(item.newsId)">
                        <div class="photo_img"><img :src="item.pic" alt=""></div>
                        <div class="photo_p">
                            <p>{{item.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more" v-if="!more">
                --我也是有底线的--
            </div>
        </mt-loadmore>
    </div>
</template>
    
<script>
import head_common from "../../components/head_common";
import { Loadmore, Spinner, Indicator } from "mint-ui";
export default {
    components: { head_common, "mt-loadmore": Loadmore, Spinner },
    data() {
        return {
            title: "随时随地拍",
            newList: [],
            allLoaded: false,
            scrollMode: "auto",
            param: {
                page: 1,
                rows: 10,
                type: 7
            },
            total: "",
            more: true,
            txt: ""
        };
    },
    methods: {
        skip(id) {
            this.$router.push({
                path: `/newsDetail/${id}`,
                query: {
                    title: this.title
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
    // margin-bottom: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}
.anytimephoto {
    margin-top: 44px;
}
.photo {
    width: 100%;
    height: 100%;
    position: relative;
    .photo_content {
        display: flex;
        flex-direction: column;
        margin: -1;
        padding: 16px;
        .photo_img {
            width: 50%;
            img {
                width: 155px;
                height: 128px;
            }
        }
        .photo_p {
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            width: 155px;
            height: 36px;
        }
    }
}
</style>

    