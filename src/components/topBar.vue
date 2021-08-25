<template>
    <div>
        <div class="router-nav">
            <router-link :to="{name: 'echartsDemo1'}" class="">Echarts Demo1</router-link>
            <router-link :to="{name: 'echartsDemo2'}">Echarts Demo2</router-link>
            <router-link :to="{name: 'echartsDemo3'}">Echarts Demo3</router-link>
            <router-link :to="{name: 'echartsDemo4'}">Echarts Demo4</router-link>
            <router-link :to="{name: 'echartsDemo5'}">Echarts Demo5</router-link>
            <router-link :to="{name: 'echartsDemo6'}">Echarts Demo6</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topBar'
    }
</script>

<style lang="scss" scoped>
.router-nav {
    position: fixed;
    top: 0px;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    background: #fff;
    align-items: center;
    padding: 16px 0;
    a {
        margin: 0 8px 0px 0;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>