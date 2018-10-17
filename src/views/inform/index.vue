<template>
    <div class="inform">
        <div class="head_wrap">
            <div class="head_title">{{title}}</div>
        </div>
        <div class="inform_table">
            <div class="inform_content" v-for="(item,index) in inform" :key='index' @click="skip(item.newsId)">
                <div class="inform_notice">
                    <img src="../../images/iconfont_gonggaotongzhi.png" alt="">
                </div>
                <div class="inform_title">
                    <span class="title">{{item.title}}</span>
                    <span class="time">{{gettime(item.updateTime)}}</span>
                </div>
            </div>
        </div>
        <span class="no_data" v-if="">没有数据了</span>
        <foot></foot>
    </div>
</template>

<script>
import foot from "../../components/footer";
import axios from "axios";
import { Indicator } from "mint-ui";
export default {
    components: { foot },
    data() {
        return {
            title:'通知早知道',
            inform: [],
            param: {
                page: 1,
                rows: 10,
                type: 2
            }
        };
    },
    methods: {
        skip(id){
            this.$router.push({
                name:'newsDetail',
                params:{
                    id:id,
                    title:this.title
                }
            })
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
        getinform() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            this.$axios
                .get("/news/newsList.do", this.param)
                .then(res => {
                    this.inform = res.rows;
                    Indicator.close();
                })
                .catch(err => {
                    console.log(err);
                    Indicator.open({
                        text: "Loading...",
                        spinnerType: "fading-circle"
                    });
                });
        }
    },
    created() {
        this.getinform();
    }
};
</script>

<style lang="scss" scoped>
.head_wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #c50206;
    height: 44px;
    .head_title {
        margin: 0 auto;
        line-height: 44px;
        text-align: center;
        font-weight: 300;
        font-size: 19px;
        color: #fff;
    }
}
.no_data {
    display: block;
    width: 100%;
    text-align: center;
    margin: 10px auto;
    color: #666;
}
.inform {
    overflow: hidden;
}
.inform_notice {
    flex: 1;
    img {
        width: 35px;
        height: 37px;
        display: block;
        margin: 0 auto;
        transform: translateY(50%);
    }
}
.inform_title {
    flex: 4;
    padding: 5px;
    display: flex;
    flex-direction: column;
    .title {
        flex: 2;
        font-size: 15px;
        padding-right: 10px;
    }
    .time {
        flex: 1;
    }
}
.inform_table {
    margin-top: 46px;
}
.inform_content {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    height: 76px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>

