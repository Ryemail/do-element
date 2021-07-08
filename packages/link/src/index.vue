<template>
    <el-link :underline="underline" v-bind="$attrs" @click.native="onClick">
        <slot />
    </el-link>
</template>

<script>
export default {
    name: 'DoLink',
    props: {
        underline: {
            type: Boolean,
            default: false,
        },
        to: {
            type: Object,
            default: null,
        },
    },
    methods: {
        onClick() {
            if (this.to) return this.$router.push(this.to);

            this.$emit('click');
        },
    },
};
</script>
