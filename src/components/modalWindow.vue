<template>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="close">
        <span>This is a message</span>
        <input type="text" :value="name" ref="name" @input="updateValue($event.target.value)" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close">Cancel</el-button>
                <el-button type="primary" v-on:click="rename">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
export default {
    name: "TheForm",
    data() {
        return {
            dialogVisible: false,
            i: '',
        }
    },
    mounted() {
        this.dialogVisible = this.isModalVisible;
    },
    props: {
        isModalVisible: Boolean,
        close: Function,
        id: Number,
        name: String,
    },
    methods: {
        focusInput() {
            this.$refs.name.focus();
        },
        updateValue(value) {
            this.i = value;
        },
        rename: function () {
            this.$store.commit('rename', {
                id: this.id,
                newName: this.i,
            });
            this.close();
        }
    },
};
</script>