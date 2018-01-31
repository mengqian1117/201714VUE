### 过滤器
- 实例中的局部过滤器
```
使用位置:
1.{{num | 过滤器函数}}  不传参数可以不加(),传参数加()
2.v-bind:属性="数据|过滤器"
new Vue({
     el:"#app1",
     filters:{
        //每一个过滤器是一个函数,默认第一参数就是管道符前面的值
     }
  })
```
  
- 全局过滤器
```
  全局过滤器,必须写在实例之前
  Vue.filter("过滤器的名字",()=>{})
```

### v-bind
```
<!--v-bind:属性="动态的数据"-->
<!--className 是动态数据 -->
 <div v-bind:class="className"></div>
 <div :class="className|fn(3)"></div>

``` 
### computed 计算属性
### watch
### v-if v-show
### 过渡动画 / 结合animate.css动画库/bootstrap
###例子:购物车
### 事件处理 事件的修饰符