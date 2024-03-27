<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">Section 1</div>

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
                  :options="que.options"
                  type="checkbox"
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

import section from '../assets/questions/section1.json'

import { useAnswerStore } from 'src/stores/answer'

export default {
  setup() {
    const router = useRouter()

    const answers = ref({})
    section.questions.forEach(question => {
      answers.value[question.id] = []
    })

    const invalidAnswers = ref([])

    const validateAnswers = () => {
      const invalid = []

      section.questions.forEach(question => {
        if (answers.value[question.id].length === 0) {
          invalid.push(question.id)
        }
      })

      invalidAnswers.value = invalid

      if (invalid.length !== 0) {
        alert('Please answer all questions')
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
        setWiseSum[question.id] = answers.value[question.id].length
      })

      const top3Sets = Object.keys(setWiseSum)
        .sort((a, b) => setWiseSum[b] - setWiseSum[a])
        .slice(0, 3)

      const section1result = {
        answers: answers.value,
        top3Sets,
      }

      useAnswerStore().section1 = section1result

      return true
    }

    const onSubmit = () => {
      if (saveResult()) {
        router.push('/section2')
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
