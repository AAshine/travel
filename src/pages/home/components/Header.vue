<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">输入城市景点游玩主题</div>
        <div class="header-right">城市</div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>
// 只会对当前的组件样式  不影响其他
<style lang="stylus" scoped> 
    .header
        display flex
        background #00bcd4
        color #fff
        line-height: .86rem
        .header-left
            width:.64rem
            float: left
        .header-input
            flex:1
            margin-top:.12rem
            height:.64rem
            line-height .64rem
            margin-left .2rem
            background #fff
            color #ccc
            border-radius:.1rem
        .header-right
            width: 1.24rem
            float: right
            text-align center
</style>