<template>
    <div>
        <head_common :title='title'></head_common>
        <div class="newsContent">
            <p class="title">{{this.newsData.title}}</p>
            <p v-html="this.newsData.content" class="content"></p>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Indicator } from "mint-ui";
export default {
    components: { head_common },
    data() {
        return {
            title: "",
            param: {
                newsId: ""
            },
            newsData: {}
        };
    },
    methods: {
        getnewsContent() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/news/newsContent.do", this.param)
                .then(res => {
                    if (res.code == 1) {
                        Indicator.close();
                        this.newsData = res.data;
                    }
                    console.log(res);
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
        this.param.newsId = this.$route.params.id;
        this.getnewsContent();
        this.title = this.$route.params.title;
    }
};
</script>

<style lang="scss">
.newsContent {
    height: 100%;
    margin-top: 44px;
    padding: 10px;
    position: relative;
    font-family: -apple-system, Helvetica Neue, Roboto, Segoe UI, sans-serif;
    .title {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .content {
        p {
            line-height: 2;
            margin-bottom: 10px;
        }

        h4 {
            font-size: 18px;
            font-weight: 500;
            margin: 10px auto;
            color: #000;
        }
        span {
            font-size: 18px;
            font-weight: 500;
            line-height: 37px;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>

