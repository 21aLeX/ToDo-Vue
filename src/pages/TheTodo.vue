<template>
    <main>
        <div class="container">
            <div class="header">
                <h1>ToDo list</h1>
            </div>
            <formAddTask />
            <el-table :data="list" stripe style="width: 100%">
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button size="small" v-on:click="showModal(scope.row)">Edit</el-button>
                        <el-button size="small" type="danger" v-on:click="deleted(scope.row.id)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <modalWindow v-if="isModalVisible" v-bind:isModalVisible='isModalVisible' v-bind:close='close' v-bind:id='id'
                v-bind:name='name' />
        </div>
    </main>
</template>

<script>

import formAddTask from "../components/formAddTask.vue";
import modalWindow from "../components/modalWindow.vue";

export default {
    name: "TheTodo",
    components: {
        formAddTask,
        modalWindow,
    },
    data() {
        return {
            isModalVisible: false,
            id: null,
            name: '',
            close: () => {
                this.isModalVisible = false;
            },
        };
    },
    methods: {
        showModal: function ({ id, name }) {
            this.id = id;
            this.name = name;
            this.isModalVisible = true;
        },
        deleted: function (id) {
            this.$store.commit('deleted', {
                id,
            });
        },
        rename: function (id) {
            this.$store.commit('rename', {
                id,
            });
        }
    },
    computed: {
        list() {
            return this.$store.getters.LIST
        }
    }
};
</script>
<style>
main {
    display: flex;
    justify-content: center;
}

.container {
    width: 50%;
}

li {
    list-style-type: none
}
</style>