# vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

---

### project1

为测试项目，至于做什么还没想好
初步想进行组件展示

---

<!-- @[TOC](目录) -->

### project2

为 **[日本の伝統色](http://nipponcolors.com/#umenezumi?tdsourcetag=s_pcqq_aiomsg)**

其下有4个版本
1. 官网版，使用图片及css样式 `mask-image` 的特性完成
1. Canvas版，使用 Canvas 绘图完成
1. Svg版，使用 Svg 绘图    未完成，demo测试可以完成
1. Echarts版，使用 `pie` 进行绘制

### keep-alive

第一次会触发 create 和 mounte，之后只会触发 update 钩子  
因为 未被销毁，所以不会触发 destroy
