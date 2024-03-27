<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">Section 4</div>
            <div v-for="(que, index) in questionsFinal" :key="que.id">
              <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
                {{ index + 1 }} {{ '          )  ' }} {{ que.title }}
              </div>
              <!-- {{ choice }} -->
              <div
                v-for="choice in que.choices"
                :key="choice.id"
                class="q-px-xl"
              >
                <q-img
                  :src="choice.imageLink"
                  class="q-ma-lg"
                  spinner-color="white"
                  style="height: 140px; max-width: 150px"
                />
                <q-radio
                  v-model="answers"
                  name="shape"
                  :val="choice.answer"
                  :label="choice.answer"
                  color="primary"
                />
                <!-- <q-checkbox
                  dark
                  v-model="answers[index][index2]"
                  :label="que.choices[index2].answer"
                  color="primary"
                  :true-value="true"
                  :false-value="false"
                  keep-color
                /> -->
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Next Section"
                class="q-ma-xl q-px-xl"
                color="primary"
              >
              </q-btn>
            </div>
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import questions from '../assets/questions.json'
let questionsFinal = questions[3].questions
export default {
  setup() {
    return {
      questionsFinal,
      answers: ref(null),
      onSubmit() {
        localStorage.setItem('section4Answers', JSON.stringify(this.answers))
        // console.log(localStorage.getItem("section2Answers"))
        // console.log(JSON.stringify(this.answers))
      },
    }
  },
}
</script>
