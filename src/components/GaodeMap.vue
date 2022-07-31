<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
export default ({
  name: 'container',
  mounted () {
    var map = new AMap.Map('container', {
      resizeEnable: true,//是否监控地图容器尺寸变化
      zoom: 11,//级别3-17
      // center: [116.205467, 39.907761],//中心点坐标
      viewMode: '2D',//使用2D视图
    });
    //自定义地图
    map.setMapStyle("amap://styles/46614e92f13c9e88edb6aa4c64eed3a4");

    //需要显示的点的经纬度
    var markers = [{
      position: [116.233571, 24.876321]
    }, {
      position: [116.368904, 25]
    }, {
      position: [116.305467, 25]
    }];
    map.add(markers);
    //添加一些分布不均的点到地图上, 地图上添加三个点标记，作为参照
    markers.forEach(function (marker) {
      new AMap.Marker({
        map: map,
        // icon: marker.icon,
        position: [marker.position[0], marker.position[1]],
        offset: new AMap.Pixel(-1, -3)
      });
      console.log(marker.position)
    });

    //自定义显示定位圈、标记点等
    var options = {
      'showMarker': false,//是否显示定位点
      enableHighAccuracy: true,//是否使用高精度定位，默认:true
      timeout: 10000,          //超过10秒后停止定位，默认：5s
      position: 'RB',    //定位按钮的停靠位置
      offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
      zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    }

    //实现精确定位
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation(options)
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function (status, result) {
        console.log(result)
      });
    });

  },
  methods: {

  }
})
</script>

<style scoped>
#container {
  /* position: absolute;
  z-index: -1; */
  width: 100%;
  height: 300px;
  /* margin-left: 50%; */
  /* margin-top: 50%; */
  /* transform: translate(-50%, 0); */
}
</style>
