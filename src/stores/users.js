import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () =>({
    firstname: 'Test1',
    lastname: 'Test2'
  }),
  actions: {
    changeName (formData) {
      this.firstname =formData.firstname
      this.lastname = formData.lastname
    }
  }
})
