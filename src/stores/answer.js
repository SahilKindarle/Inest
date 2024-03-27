import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('answer', {
  persist: true,
  state: () => ({
    personalDetails: {},
    section1: {},
    section2: {},
    section3: {},
    section4: {},
    section5: {},
  }),
})
