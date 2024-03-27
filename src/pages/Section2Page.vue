<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">Section 2</div>
            <div v-for="(que, index) in questionsFinal" :key="que.id">
              <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
                {{ `${index + 1}) ${que.title}` }}
              </div>
              <!-- {{ choice }} -->
              <q-option-group
                v-model="answers[index]"
                class="q-px-xl"
                color="primary"
                :options="options"
                type="radio"
              />
              <!-- <div
                v-for="choice in que.choices"
                :key="choice.id"
                class="q-px-xl"
              > -->
              <!-- <q-radio
                  name="shape"
                  v-model="answers[index][index2]"
                  :val="choice.answer"
                  :label="choice.answer"
                  color="primary"
                /> -->
              <!-- <q-checkbox
                  dark
                  v-model="answers[index][index2]"
                  :label="que.choices[index2].answer"
                  color="primary"
                  :true-value="true"
                  :false-value="false"
                  keep-color
                /> -->
              <!-- </div> -->
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
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import questions from '../assets/questions.json'
let questionsFinal = questions[1].questions
console.log('questionsFinal - ', questionsFinal)
export default {
  setup() {
    const $q = useQuasar()
    return {
      questionsFinal,
      answers: ref([]),
      options: [
        { label: 'I agree', value: 1 },
        { label: 'I may be', value: 2 },
        { label: 'I Disagree', value: 3 },
      ],
      onSubmit() {
        console.log(JSON.stringify(this.answers))
        // var answersArray = this.answers
        if (this.answers.length == 0) {
          $q.notify({
            type: 'negative',
            message: 'Please fill all the answers.',
          })
        } else {
          for (let i = 0; i < this.answers.length; i++) {
            console.log('answersArray[i] - ', JSON.stringify(this.answers[i]))
            if (!this.answers[i]) {
              console.log('iff')
              $q.notify({
                type: 'negative',
                message: 'Please fill all the answers.',
              })
            }
          }
        }

        // this.answers.forEach(e => {
        //   console.log("in each")
        //   if(e == null) {
        //   console.log("iff")
        //     $q.notify('Message')
        //   }
        //   else {

        //   }
        // });
        if (localStorage.getItem('section2Answers')) {
          localStorage.removeItem('section2Answers')
        }
        localStorage.setItem('section2Answers', JSON.stringify(this.answers))
        // console.log(localStorage.getItem("section2Answers"))
        // console.log(JSON.stringify(this.answers))
      },
    }
  },
}
</script>
