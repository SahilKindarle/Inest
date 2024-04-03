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

  actions:{
    clearData(){
      this.personalDetails = {}
      this.section1 = {}
      this.section2 = {}
      this.section3 = {}
      this.section4 = {}
      this.section5 = {}
    }
  }
})
