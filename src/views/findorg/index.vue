<template>
    <div class="page">
        <head_common :title='title'></head_common>
        <div id="container" class="map">sdddddddddddddddddd</div>
    </div>
</template>

<script>
import head_common from "../../components/head_common";
export default {
    components: { head_common },
    data() {
        return {
            title: ""
        };
    },
    methods: {},
    mounted() {
        var map = new BMap.Map("container");
        map.addControl(
            new BMap.NavigationControl({
                type: BMAP_NAVIGATION_CONTROL_PAN,
                anchor: BMAP_ANCHOR_TOP_LEFT
            })
        );
        map.addControl(new BMap.GeolocationControl());

        map.centerAndZoom(new BMap.Point(114.008273, 32.968331), 5);
        var myGeo = new BMap.Geocoder();
        var point1 = new BMap.Point(114.013375, 33.014407);
        var point2 = new BMap.Point(116.296015, 40.151184);
        var marker1 = new BMap.Marker(point1);
        var marker2 = new BMap.Marker(point2);
        map.addOverlay(marker1);
        map.addOverlay(marker2);
        marker1.setLabel(
            new BMap.Label(
                "信息工程学院学生党支部,支部书记：杨鑫 电话：123456789",
                {
                    offset: new BMap.Size(20, -10)
                }
            )
        );
        marker1.setLabel(
            new BMap.Label(
                "信息工程学院党支部,总支书记：刘晓阳 电话：123456789",
                {
                    offset: new BMap.Size(20, -30)
                }
            )
        );
        marker2.setLabel(
            new BMap.Label(
                "信息工程学院学生流动党支部,支部书记：高阳 电话：123456789",
                {
                    offset: new BMap.Size(20, -10)
                }
            )
        );
    },

    created() {
        this.title = this.$route.meta.name;
    }
};
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    height: 100%;
    position: relative;
    .map {
        margin-top: 44px;
        width: 100%;
        height: 623px;
        overflow: auto;
        background-color: red;
    }
}
</style>

