<template>
    <div>
        <head_common :title='title'></head_common>
        <div id="container"></div>
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
    created() {
        this.title = this.$route.meta.name;
        var map = new BMap.Map("container");
        map.centerAndZoom(new BMap.Point(114.014075, 33.014407));
        //         var myGeo = new BMap.Geocoder();
        //         myGeo.getPoint("北京市海淀区上地10街10号", function(point){
        //     if (point) {
        //         map.centerAndZoom(point, 16);
        //         map.addOverlay(new BMap.Marker(point));
        //     }
        //  },
        // "北京市");
      var p =   new BMap.Point(116.307852,40.057031);
        var marker = new BMap.Marker(p);
        map.addOverlay(marker);
        marker.setLabel(
            new BMap.Label( {
                offset: new BMap.Size(20, -10)
            })
        );
    }
};
</script>

<style>
</style>
