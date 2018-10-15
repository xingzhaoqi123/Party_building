<template>
    <div class="common_head">
        <div class="icon_to_left">
            <a href="javascript:;">
                <div class="turn fll"></div>
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.common_head {
    height: 44px;
    background-color: #c50206;
    border-bottom: 1px solid #fff;
    .turn {
        height: 10px;
        width: 10px;
        border: 1px solid #fff;
        border-left: none;
        border-bottom: none;
        transform: rotate(-135deg);
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 12px;
    }
}
</style>

