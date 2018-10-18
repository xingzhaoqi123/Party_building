<template>
    <div>
        <head_common :title='title'></head_common>
        <div v-html="this.content" class="today"></div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
import { Indicator } from "mint-ui";
import axios from "axios";
export default {
    components: { head_common },
    data() {
        return {
            title: "",
            content: ""
        };
    },
    methods: {
        getnewsContent() {
            Indicator.open({
                text: "Loading...",
                spinnerType: "fading-circle"
            });
            axios
                .get(
                    "http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70504%2Findex.html"
                )
                .then(res => {
                    Indicator.close();
                    this.content = res.data;
                    console.log(res.data);
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
        this.getnewsContent();
        this.title = this.$route.query.title;
    }
};
</script>

<style lang='scss'>
.p1_01 {
    display: none;
}
.clear {
    display: none;
}

.p1_02 {
    h1,
    h2 {
        font-weight: 500;
    }
    h1,
    h2,
    p {
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        line-height: 2;
    }
}
.today {
    margin-top: 44px;
    padding: 10px;
}
</style>
