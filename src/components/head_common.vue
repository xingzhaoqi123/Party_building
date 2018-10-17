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
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        back() {
            this.$router.back(-1);
        }
    }
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
}
</style>

