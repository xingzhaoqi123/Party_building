<template>
    <div>
        <head_common :title='title'></head_common>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: "",
            param: {
                page: 1,
                rows: 10,
                type: 0,
                cates: 0
            }
        };
    },
    methods: {
        getinteraction() {
            this.$axios.get("/forum/forumList.do?", this.param).then(res => {
                console.log(res);
            });
        }
    },
    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style>
</style>
