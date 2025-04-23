import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
	state() {
		return {
			name: 'kim',
			age: 20,
			likes: 30,
			more: {},
		}
	},
	mutations: {
		changeName(state) {
			state.name = 'park';
		},
		increaseAge(st, data) {
			st.age += data;
		},
		like(state, liked) {
			if (liked) {
				state.likes--;
			} else {
				state.likes++;
			}
		},
		setMore(state, data) {
			state.more = data;
		}
	},
	actions: { // ajax 요청
		getData(context) {
			axios.get('https://codingapple1.github.io/vue/more0.json')
				.then(result => {
					const data = result.data;
					context.commit('setMore', data);
				}
			);
		},
	}
});

export default store;