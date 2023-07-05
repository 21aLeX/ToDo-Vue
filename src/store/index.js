import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            list: JSON.parse(localStorage.getItem('list')) ?? [],
            count: JSON.parse(localStorage.getItem('list')).length ?? 0,
        }
    },
    getters: {
        LIST: state => {
            return state.list;
        },
    },
    mutations: {
        add(state, { newTask }) {
            const id = state.count;
            state.count += 1;
            state.list.push({ name: newTask, id });
            localStorage.setItem('list', JSON.stringify(state.list));
        },
        deleted(state, { id }) {
            state.list = state.list.filter((item) => item.id !== id);
            localStorage.setItem('list', JSON.stringify(state.list));
        },
        rename(state, { id, newName }) {
            state.list = state.list.map((item) => {
                if (item.id === id) {
                    return { ...item, name: newName };
                }
                return item;
            });
            localStorage.setItem('list', JSON.stringify(state.list));
        },
    }
})

export default store;