# travel

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###踩坑

1.在组件中使用vue-awesome-swiper插件，想要改变轮播图轮播指标（即轮播图下方的圆点），必须使用穿透。因为style设置了scoped属性，导致了样式只能当前组件使用。
<style scoped lang="less">
    外层 /deep/ 第三方组件 {
        样式
    }
    }
</style>
