<template>
    <el-dialog
        class="do-dialog"
        :class="[round && 'do-round-dialog']"
        v-bind="$attrs"
        center
        v-on="$listeners"
        :width="width"
    >
        <slot />

        <span v-if="$scopedSlots.title" slot="title">
            <slot name="title" />
        </span>

        <div slot="footer" class="do-dialog-footer">
            <slot v-if="$scopedSlots.footer" name="footer"></slot>
            <template v-else>
                <el-button
                    v-for="(item, key) in footer"
                    :key="key"
                    :type="item.type"
                    @click="onEvent(item)"
                >
                    {{ item.label }}
                </el-button>
            </template>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'DoDialog',
    componentName: 'DoDialog',
    props: {
        footer: {
            type: Array,
            default: () => [
                { type: 'primary', label: '确定', prop: 'submit' },
                { type: 'default', label: '取消', prop: 'cancel' },
            ],
        },
        width: {
            type: String,
            default: '600px',
        },
        round: {
            type: Boolean,
            default: true,
        },
    },

    methods: {
        onEvent(item) {
            console.log(item);
            this.$emit('event', item);
            if (item.prop === 'cancel') {
                this.$emit('update:visible', false);
            }
        },
    },
};
</script>
