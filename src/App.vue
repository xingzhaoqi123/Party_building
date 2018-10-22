<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.fll {
    float: left;
}
.flr {
    float: right;
}
.clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
</style>
