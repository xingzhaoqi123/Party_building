<template>
    <div class="photo">
        <head_common :title='title'></head_common>
        <div v-for="(item,index) in newList" :key="item.index" class="anytimephoto">
            <div class="photo_content">
                <div class="photo_img"><img :src="item.pic" alt=""></div>
                <div class="photo_p">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import head_common from "../../components/head_common";
import { Loadmore, Spinner, Indicator } from "mint-ui";
export default {
    components: { head_common ,"mt-loadmore": Loadmore, Spinner },
    data() {
        return {
            title: "123",
            newList: [],
              param: {
                page: 1,
                rows: 10,
                type: 0
            },
            total: "",
        };
    },
    methods: {
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
        // this.title = this.$route.params.title;
        this.param.type = this.$route.params.type;
    }
};
</script>
    
<style lang="scss" scoped>
.anytimephoto{
    display: flex;

}
.photo {
    width: 100%;
    height: 100%;
    position: relative;
    .photo_content {
        margin-top: 44px;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 16px;
        .photo_img{
            width: 155px;
            height: 157px;  
            img{
                 width: 155px;
            height: 116px; 
            }
        }
    }
}
</style>

    