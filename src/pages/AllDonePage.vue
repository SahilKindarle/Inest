<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <h1>All Done Page</h1>

        <p>Submit Request Status: {{ status }}</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

import { useAnswerStore } from 'src/stores/answer'

import { api } from 'src/boot/axios'

export default {
  name: 'Section3Page',

  setup() {
    const $q = useQuasar()

    const answerStore = useAnswerStore()

    const status = ref('pending')

    const sendData = () => {
      const finalResult = {
        personalDetails: answerStore.personalDetails,
        section1: answerStore.section1,
        section2: answerStore.section2,
        section3: answerStore.section3,
        section4: answerStore.section4,
        section5: answerStore.section5,
        pdfData: {
          top3CareerGroups: answerStore.section1.top3Sets,
          skills: answerStore.section2.groupScores,
          emotionalIntelligence: answerStore.section3.finalScore,
          personality: answerStore.section4.label,
          brainType: answerStore.section5.verdict,
        },
      }

      $q.loading.show()

      api
        .post('/submit', finalResult)
        .then(() => {
          $q.notify({
            message: 'Request submitted successfully',
            color: 'positive',
          })

          status.value = 'success'
        })
        .catch(() => {
          $q.notify({
            message: 'Failed to submit request',
            color: 'negative',
          })

          status.value = 'failed'
        })
        .finally(() => {
          $q.loading.hide()
        })
    }

    onMounted(() => {
      sendData()
    })

    return {
      status,
    }
  },
}
</script>
