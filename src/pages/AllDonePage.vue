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

import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  name: 'Section3Page',

  setup() {
    const $q = useQuasar()

    const answerStore = useAnswerStore()

    const status = ref('pending')

    const sendData = async (data, pdfBuffer) => {
      $q.loading.show()

      const formData = new FormData()
      formData.append('data', JSON.stringify(data))
      formData.append('pdf', new Blob([pdfBuffer], { type: 'application/pdf' }))

      try {
        await api.post('/submit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        $q.notify({
          message: 'Request submitted successfully',
          color: 'positive',
        })
        status.value = 'success'
      } catch {
        $q.notify({
          message: 'Failed to submit request',
          color: 'negative',
        })

        status.value = 'failed'
      } finally {
        $q.loading.hide()
      }
    }

    const generatePDF = async data => {
      const content = `<html>
          <head>
            <style>
              body {
                font-family: 'Poppins', sans-serif;
              }
              h6 {
                font-size: 14px;
                font-weight: 600;
                margin-top: 10px;
                margin-bottom: 5px;
                color: red;
              }
              p {
                font-size: 12px;
                margin-top: 5px;
                margin-bottom: 5px;
              }
              ul {
                list-style-type: none;
                padding: 0;
              }
              li {
                font-size: 12px;
                margin-top: 5px;
                margin-bottom: 5px;
              }
            </style>
          </head>

          <body>
            <div style='font-size:11px; background-color: rgb(239 240 240); padding: 05px 15px; width:595pt;'>
              <h6>Top 3 Career Groups</h6>
              <ul>
                ${data.pdfData.top3CareerGroups
                  .map(group => `<li>${group}</li>`)
                  .join('')}
              </ul>
              <h6>Skills</h6>
              <ul>
                ${data.pdfData.skills
                  .map(skill => `<li>${skill}</li>`)
                  .join('')}
              </ul>
              <h6>Emotional Intelligence</h6>
              <p>${data.pdfData.emotionalIntelligence}</p>
              <h6>Personality</h6>
              <p>${data.pdfData.personality}</p>
              <h6>Brain Type</h6>
              <p>${data.pdfData.brainType}</p>
            </div>
          </body>
        </html>
        `

      console.log(content)

      window.html2canvas = html2canvas

      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      })

      doc.html(content, {
        callback: pdf => {
          // pdf.output('pdfobjectnewwindow')
          const pdfBuffer = pdf.output('arraybuffer')
          sendData(data, pdfBuffer)
        },
      })
    }

    const init = async () => {
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

      await generatePDF(finalResult)
    }

    onMounted(async () => {
      await init()
    })

    return {
      status,
    }
  },
}
</script>
