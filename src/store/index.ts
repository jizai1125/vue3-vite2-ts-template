import { defineStore } from 'pinia'
import useUserStore from './user'

export default defineStore({
  id: 'app',
  state: () => {
    const user = useUserStore()
    return {
      title: 'vue3-vite-pinia-ts',
      user
    }
  },
  getters: {
    userRole: (state) => state.user.role
  },
  actions: {
    changeTitle() {
      this.title = 'vue3+vite+pinia+ts！'
    }
  }
})
