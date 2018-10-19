<template>
    <div class="common_head">
        <div class="icon_to_left" @click='back'>
            <a href="javascript:;">
                <div class="turn fll">
                </div>
            </a>
        </div>
        <div class="title">
            {{title}}
        </div>
        <!-- <div class="editor flr clearfix"  v-show="$router.path == '/info' || '/updateInfo'">{{txt}}</div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            editor: "",
            txt:''
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        // txt:{
        //     type:String,
        //     required:true
        // }
    },
    methods: {
        // skip() {
        //     switch (this.$route.path) {
        //         case "/info":
        //             this.geteditor();
        //             return this.$router.push({ name: "updateInfo" });
        //         case "/updateInfo":
        //             this.geteditor();
        //             return this.$router.push({ name: "info" });
        //     }
        // },
        // geteditor() {
        //     switch (this.$route.path) {
        //         case "/info":
        //             // this.skip();
        //             return (this.editor = "编辑");
        //         case "/updateInfo":
        //             // this.skip();
        //             return (this.editor = "保存");
        //         default:
        //             return (this.editor = "");
        //     }
        // },
        back() {
            this.$router.back(-1);
        }
    },
    // watch: {
    //     editor: "skip"
    // },
    // created() {
    //     this.geteditor();
    // }
};
</script>
<style lang="scss" scoped>
.common_head {
    height: 44px;
    background-color: #c50206;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .turn {
        height: 12px;
        width: 12px;
        border: 1px solid #fff;
        border-left: none;
        border-bottom: none;
        transform: rotate(-135deg);
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 12px;
    }
    .title {
        margin: 0 auto;
        line-height: 44px;
        text-align: center;
        font-weight: 300;
        font-size: 19px;
        color: #fff;
    }
    .editor {
        line-height: 20px;
        color: #fff;
        font-size: 19px;
        position: absolute;
        top: 12px;
        bottom: 12px;
        right: 12px;
    }
}
</style>

