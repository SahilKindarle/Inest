import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('answer', {
  persist: true,
  state: () => ({
    section1: {},
    section2: {},
    section3: {},
    section4: {},
    section5: {},
  }),
})
