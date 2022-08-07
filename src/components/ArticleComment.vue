<script>

export default {
    props : {
        message : String,
        level : Number
    },

    computed : {
        levelClass() {
            return "comment-level-" + this.level;
        }
    }
}
</script>

<template>
    <div class="comment-line" :class="levelClass">{{message}}</div>
</template>