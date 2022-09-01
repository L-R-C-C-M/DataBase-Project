<<<<<<< HEAD
# DataBase-Project
数据库课设-益寻
=======
# vue_test1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> master

1、el-header部分替换为Frontstage文件夹中定义的MainHeader组件（背景色为透明，要加背景图片，背景图片目前需要在各页面中在MainHeader外包一层el-header然后设置CSS样式实现）或InfoHeader组件（背景颜色为深蓝色，无背景图片）
2、el-footer部分替换为Frontstage文件夹中定义的Footer组件
3、在页面的<script>中引入相应组件
4、页面中的<el-container>添加一个style:改为 <el-container style="height: fit-content">
5、后台的几个页面中的退出按钮跳转路由改为了 / ，就是LoginView.vue页面， / 是打开网站的首页
6、后台暂时新添了一个tempBackstage页面用于将所有后台展示出来，之后确定如何根据身份进入不同后台后删去
7、后台el-header(就是侧边栏右面的子页面中的el-header)的CSS样式类名都改成了backHeader，不然退出后好像会影响前台的el-header