<template>
    <el-form
        v-if="dataForm"
        :model="dataForm"
        :rules="rules"
        :size="size"
        ref="form"
        :class="['do-form']"
        v-bind="$attrs"
        :label-width="labelWidth + 'px'"
    >
        <div :class="[$attrs.inline && 'flex-1']">
            <el-form-item
                :label="item.label"
                :prop="item.prop"
                v-for="(item, key) in dataColumns"
                :key="key"
            >
                <!-- input -->
                <el-input
                    v-if="item.type === 'input'"
                    v-model="dataForm[item.prop]"
                    :placeholder="item.placeholder"
                    :show-word-limit="item.showWordLimit"
                    :minlength="item.minlength"
                    :clearable="item.clearable"
                    :maxlength="item.maxlength"
                    :disabled="item.disabled"
                    :readonly="item.readonly"
                    @input="onInput(item)"
                >
                    <!-- 前后插槽 -->
                    <span v-if="item.prepend" slot="prepend">
                        <slot :name="item.prepend" :data="item"></slot>
                    </span>
                    <span v-if="item.append" slot="append">
                        <slot :name="item.append" :data="item"></slot>
                    </span>
                    <!-- 图标 -->
                    <span v-if="item.prefix" slot="prefix">
                        <slot :name="item.prefix" :data="item"></slot>
                    </span>
                    <span v-if="item.suffix" slot="suffix">
                        <slot :name="item.suffix" :data="item"></slot>
                    </span>
                </el-input>

                <!-- input textarea -->
                <el-input
                    v-if="item.type === 'textarea'"
                    type="textarea"
                    :show-word-limit="item.showWordLimit"
                    :minlength="item.minlength"
                    :maxlength="item.maxlength"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled"
                    :readonly="item.readonly"
                    v-model="dataForm[item.prop]"
                />

                <!-- 开关 -->
                <el-switch
                    v-if="item.type === 'switch'"
                    v-model="dataForm[item.prop]"
                    :disabled="item.disabled"
                    :width="item.width"
                    :active-value="item.active"
                    :inactive-value="item.inactive"
                    :active-color="item.activeColor"
                    :inactive-color="item.inactiveColor"
                />

                <!-- select -->
                <el-select
                    v-if="item.type === 'select'"
                    v-model="dataForm[item.prop]"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled"
                >
                    <el-option
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.label"
                        :value="option.value"
                    />
                </el-select>

                <!-- 复选 -->
                <el-checkbox-group
                    v-if="item.type === 'checkbox'"
                    v-model="dataForm[item.prop]"
                    :disabled="item.disabled"
                >
                    <el-checkbox
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.value"
                        :name="item.prop"
                    >
                        {{ option.label }}
                    </el-checkbox>
                </el-checkbox-group>

                <!-- 单选 -->
                <el-radio-group
                    v-if="item.type === 'radio'"
                    v-model="dataForm[item.prop]"
                    :disabled="item.disabled"
                >
                    <el-radio
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.value"
                    >
                        {{ option.label }}
                    </el-radio>
                </el-radio-group>

                <el-date-picker
                    v-if="item.type === 'date'"
                    type="date"
                    :placeholder="item.placeholder"
                    v-model="dataForm[item.prop]"
                    :format="item.format"
                    :readonly="item.readonly"
                    :disabled="item.disabled"
                    :value-format="item.valueFormat"
                    :picker-options="item.pickerOptions"
                    style="width: 100%"
                />

                <el-date-picker
                    v-if="item.type === 'daterange'"
                    type="daterange"
                    v-model="dataForm[item.prop]"
                    :range-separator="item.separator"
                    :format="item.format"
                    :readonly="item.readonly"
                    :disabled="item.disabled"
                    :value-format="item.valueFormat"
                    :picker-options="item.pickerOptions"
                    :start-placeholder="item.placeholder && item.placeholder[0]"
                    :end-placeholder="item.placeholder && item.placeholder[1]"
                />

                <el-date-picker
                    v-if="item.type === 'datetime'"
                    type="datetime"
                    :placeholder="item.placeholder"
                    v-model="dataForm[item.prop]"
                    :format="item.format"
                    :readonly="item.readonly"
                    :disabled="item.disabled"
                    :value-format="item.valueFormat"
                    :picker-options="item.pickerOptions"
                />

                <el-date-picker
                    v-if="item.type === 'datetimerange'"
                    type="datetimerange"
                    v-model="dataForm[item.prop]"
                    :range-separator="item.separator"
                    :format="item.format"
                    :readonly="item.readonly"
                    :disabled="item.disabled"
                    :value-format="item.valueFormat"
                    :picker-options="item.pickerOptions"
                    :start-placeholder="item.placeholder && item.placeholder[0]"
                    :end-placeholder="item.placeholder && item.placeholder[1]"
                />

                <slot
                    v-if="item.type === 'slot'"
                    :name="item.slot"
                    :item="item"
                    :data="form"
                    :index="key"
                ></slot>
            </el-form-item>
        </div>
        <div
            v-if="button.length"
            class="do-form-footer"
            :style="{ textAlign: buttonAlign }"
        >
            <el-button
                v-for="(item, key) in button"
                :key="key"
                :type="item.type"
                :size="item.size"
                @click="onEvent(item)"
            >
                {{ item.label }}
            </el-button>
        </div>
    </el-form>
</template>

<script>
import { formatNumber, ifCompare } from '@utils';

export default {
    name: 'DoForm',
    props: {
        form: {
            type: Object,
            default: null,
        },
        rules: {
            type: Object,
            default: () => {},
        },
        size: {
            type: String,
            default: 'small',
        },
        columns: {
            type: Array,
            default: () => [],
        },
        labelWidth: {
            type: Number,
            default: 100,
        },
        button: {
            type: Array,
            default: () => [
                {
                    type: 'primary',
                    label: '保存',
                    prop: 'submit',
                    size: 'small',
                },
                {
                    type: 'default',
                    label: '取消',
                    prop: 'reset',
                    size: 'small',
                },
            ],
        },
        buttonAlign: {
            type: String,
            default: 'center',
        },
    },
    data() {
        return {
            dataColumns: this.columns,
            isChange: false,
        };
    },
    computed: {
        dataForm: {
            get() {
                return this.form;
            },
            set(newValue) {
                this.$emit('update:form', newValue);
            },
        },
        parent() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'DoDialog') {
                    parent = parent.$parent;
                } else {
                    return parent;
                }
            }
            return false;
        },
        parentVisible() {
            return this.parent ? this.parent.$attrs.visible : false;
        },
    },
    watch: {
        dataForm: {
            handler(newForm, oldForm) {
                this.isChange = ifCompare(newForm, oldForm || {});
            },
            deep: true,
            immediate: true,
        },
        columns: {
            handler() {
                !this.parent && this.onLazyLoad();
            },
            immediate: true,
            deep: true,
        },
        parentVisible: {
            handler(value) {
                if (value && !this.isChange) {
                    this.onLazyLoad();
                }

                if (!value) {
                    this.clearValidate();
                }
            },
            immediate: true,
        },
    },
    methods: {
        onInput(item) {
            if (!item.number) return;

            this.dataForm[item.prop] = formatNumber(
                this.dataForm[item.prop],
                item.number
            );
        },
        onLazyLoad() {
            const type = ['select', 'checkbox', 'radio'];

            console.log('我是onLazyLoad在变化');

            this.dataColumns.map((item) => {
                if (type.includes(item.type) && item.lazyLoad) {
                    item.lazyLoad((options) => {
                        item.options = options;
                    }, this.dataForm);
                }
                return item;
            });
        },
        onEvent(item) {
            if (item.prop === 'submit') return this.validate(item);

            if (item.prop === 'reset') return this.resetFields();

            this.$emit('event', item);
        },
        validate(item) {
            const form = this.$refs.form;

            let flag = false;

            const valider = (valid) => {
                flag = valid;
                if (valid && item) return this.$emit('event', item);
            };

            form.validate(valider);

            return Promise.resolve(flag);
        },
        resetFields() {
            this.$nextTick(() => {
                this.$refs.form.resetFields();
            });
        },
        clearValidate(props) {
            this.$nextTick(() => {
                this.$refs.form.clearValidate(props);
            });
        },
    },
};
</script>
