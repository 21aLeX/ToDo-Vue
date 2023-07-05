<template>
    <form @submit="checkForm">
        <el-input v-model="v" class="w-50 m-2" size="large" placeholder="Please Input">
            <template #append>
                <el-button @click="checkForm" class="plus" :icon="Plus" />
            </template>
        </el-input>
    </form>
</template>

<script
setup>
import { Plus } from '@element-plus/icons-vue'
</script>
<script>
export default {
    name: "TheForm",
    data() {
        return {
            v: ''
        }
    },
    props: {
        valueInput: {
            default: '',
        }
    },
    methods: {
        checkForm: function (e) {
            e.preventDefault();
            this.$store.commit('add', {
                newTask: this.v,
            });
            this.v = '';
        }
    },
};
</script>
<style>
form input {
    text-align: center;
}
</style>