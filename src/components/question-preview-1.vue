<template>
    <div>
        <div class="quest-idx">{{questIdx}} - Qs</div>
        <div class="quest">{{quest.title}}</div>
        <div class="quest-img">{{quest.img}}</div>
        <div class="quest-time">{{quest.time}}</div>
    </div>
</template>

<script>


export default {
    name: 'question-preview',
    props:['quest', 'questIdx']
}
</script>

<style lang="scss">

</style>