<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">
              Section 3: Emotional Intelligence
            </div>

            <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
              {{ section.instructions }}
            </div>

            <div v-for="(que, index) in section.questions" :key="que.id">
              <div
                class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md"
                :class="{
                  'bg-red-1': invalidAnswers.includes(que.id),
                }"
              >
                <p>{{ `${index + 1}) ${que.label}` }}</p>

                <q-option-group
                  v-model="answers[index]"
                  :options="que.options"
                  type="radio"
                  color="primary"
                />
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
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import section from '../assets/questions/section3.json'

import { useAnswerStore } from 'src/stores/answer'

export default {
  name: 'Section3Page',

  setup() {
    const router = useRouter()
    const $q = useQuasar()

    const answers = ref([])
    answers.value = Array(section.questions.length).fill(0)

    const invalidAnswers = ref([])

    const validateAnswers = () => {
      const invalid = []

      answers.value.forEach((answer, index) => {
        if (answer === 0) {
          invalid.push(section.questions[index].id)
        }
      })

      invalidAnswers.value = invalid

      if (invalid.length !== 0) {
        $q.notify({
          type: 'negative',
          message: 'Please answer all questions',
        })

        return false
      }

      return true
    }

    const saveResult = () => {
      if (!validateAnswers()) {
        return false
      }

      const finalScore = answers.value.reduce((acc, curr) => acc + curr, 0)

      const section3result = {
        answers: answers.value,
        finalScore,
      }

      useAnswerStore().section3 = section3result
      return true
    }

    const onSubmit = () => {
      if (saveResult()) {
        router.push('/section4')
      }
    }

    return {
      section,
      answers,
      invalidAnswers,
      onSubmit,
    }
  },
}
</script>
