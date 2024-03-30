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
              Section 2: Skill Proficiency
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
                  v-model="answers[que.id]"
                  class="q-px-xl"
                  color="primary"
                  :options="options"
                  type="radio"
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

import section from '../assets/questions/section2.json'

import { useAnswerStore } from 'src/stores/answer'

const ANSWER_OPTIONS = [
  { label: 'I agree', value: 3 },
  { label: 'I may be', value: 2 },
  { label: 'I Disagree', value: 1 },
]

export default {
  name: 'Section2Page',

  setup() {
    const router = useRouter()
    const $q = useQuasar()

    const answers = ref({})

    section.questions.forEach(question => {
      answers.value[question.id] = 0
    })

    const invalidAnswers = ref([])

    const validateAnswers = () => {
      const invalid = []

      section.questions.forEach(question => {
        if (answers.value[question.id] === 0) {
          invalid.push(question.id)
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

      const setWiseSum = {}

      section.questions.forEach(question => {
        setWiseSum[question.group] = setWiseSum[question.group]
          ? setWiseSum[question.group] + answers.value[question.id]
          : answers.value[question.id]
      })

      const groupScores = Object.keys(setWiseSum).map(group => ({
        group,
        label: section.groups[group],
        score: setWiseSum[group],
        percentage: (setWiseSum[group] / 9) * 100,
      }))

      const section2result = {
        answers: answers.value,
        groupScores,
      }

      useAnswerStore().section2 = section2result

      return true
    }

    const onSubmit = () => {
      if (saveResult()) {
        router.push('/section3')
      }
    }

    return {
      section,
      answers,
      invalidAnswers,
      options: ANSWER_OPTIONS,
      onSubmit,
    }
  },
}
</script>
