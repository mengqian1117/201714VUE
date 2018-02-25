<template>
    <!--组件模板的html结构  原来组件对象中的template属性中的html结构  这个不可以省略-->
    <div>
        <h1 @click="change">
            {{msg}}
        </h1>
    </div>
</template>

<script>
    //script可以没有的
    export default {
        //组件是独立的 除了之前template以外的内容都写在这里面
        data(){
            return {
                msg:"APP"
            }
        },
        methods:{
            change(){
                this.msg="我变了"
            }
        }
    }
</script>

<style scoped lang="less">
    /*写样式的  style也是可以没有的*/
    /*使用less lang="less"*/
    /*scoped 表示这里的样式是当前组件私有的*/
    div {
        h1{
            color: red;
        }
    }

</style>