<template>
    <div>
        <head_common :title='title'></head_common>
        <div class="life">
            <div class="life_img"><img src="../../images/timg.jpg" alt=""></div>
            <div class="life_nav">
                <div class="rows">
                    <router-link :to="{name:'study',params:{title:'政治学习',type:'8'}}">
                        <a href="">
                            <div class="rows_p"><img src="../../images/icon1.png" alt="">
                                <p>政治学习</p>
                            </div>
                        </a>
                    </router-link>
                    <div class="rows_p"><img src="../../images/icon2.png" alt="">
                        <p>思想汇报</p>
                    </div>
                    <div class="rows_p"><img src="../../images/icon3.png" alt="">
                        <p>心得体会</p>
                    </div>
                </div>
                <div class="rows">
                    <div class="rows_p"><img src="../../images/icon4.png" alt="">
                        <p>民主评议</p>
                    </div>
                    <div class="rows_p"><img src="../../images/icon5.png" alt="">
                        <p>流动党员找组织</p>
                    </div>
                    <div class="last"><img src="../../images/icon1.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: "掌上组织生活"
        };
    }
};
</script>

<style lang="scss" scoped>
.last {
    visibility: hidden;
}
.life {
    margin-top: 44px;
    width: 100%;
    height: 100%;
    position: relative;
    .life_img {
        img {
            width: 100%;
        }
    }
    .life_nav {
        display: flex;
        flex-direction: column;
        .rows {
            display: flex;
            justify-content: space-around;
            height: 146px;
            align-items: center;
            text-decoration: none;
            a {
                text-decoration: none;
            }
            .rows_p {
                text-align: center;
                color: #666;
                font-size: 14px;
            }
            img {
                width: 85px;
                height: 85px;
                margin-bottom: 5px;
            }
        }
    }
}
</style>

