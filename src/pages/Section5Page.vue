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
              Section 5: Brain Test
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
                label="Submit"
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
// import { useRouter } from 'vue-router'

import section from '../assets/questions/section5.json'

import { useAnswerStore } from 'src/stores/answer'

// import { jsPDF } from "jspdf";
// import pdfService from "../services/pdfGeneration";
// import reportTemplate from "../assets/reportTemplate";
// import indexHtml from "../services/index.html";

export default {
  name: 'Section5Page',

  setup() {
    // const router = useRouter()

    const answers = ref([])
    answers.value = Array(section.questions.length).fill('')

    const invalidAnswers = ref([])

    const validateAnswers = () => {
      invalidAnswers.value = []

      const isAllAnswered = answers.value.every(a => a !== '')

      if (!isAllAnswered) {
        answers.value.forEach((a, i) => {
          if (a === '') {
            invalidAnswers.value.push(section.questions[i].id)
          }
        })

        alert('Please answer all questions')
        return false
      }

      return true
    }

    const saveResult = () => {
      if (!validateAnswers()) return

      const answersWithQId = {}

      section.questions.forEach((q, i) => {
        answersWithQId[`q${q.id}`] = answers.value[i]
      })

      const sumA = answers.value.filter(a => a === 'A').length
      const sumB = answers.value.filter(a => a === 'B').length

      const verdict =
        sumA > sumB ? 'left-brain dominate' : 'right-brain dominate'

      const section5result = {
        answers: answersWithQId,
        sumA,
        sumB,
        verdict,
      }

      useAnswerStore().section5 = section5result
    }

    const onSubmit = () => {
      saveResult()
      // router.push('/all-done')
      alert('All done!')
    }

    return {
      section,
      answers,
      invalidAnswers,
      onSubmit,
    }
  },

  /*
   // old setup


  setup() {
    return {
      questionsFinal,
      answers: ref([]),
      lengthArray: ref([]),
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
      ],
      async onSubmit() {
        localStorage.setItem('section5Answers', JSON.stringify(this.answers))
        // const section5answers = localStorage.getItem("section5Answers");
        const section2answers = JSON.parse(
          localStorage.getItem('section2Answers')
        )
        // const PersonalSectionAnswers = localStorage.getItem(
        // "PersonalSectionAnswers"
        // );

        // ----------------Section 1 Analysis --------------
        const section1answers = JSON.parse(
          localStorage.getItem('section1Answers')
        )

        // console.log("Section1 - ", section1answers[0])
        for (let i = 0; i < section1answers.length; i++) {
          for (let j = 0; j < section1answers[i].length; j++) {
            if (section1answers[i][j] == true) {
              currLength = currLength + 1
            }
          }
          this.lengthArray[i] = currLength
          currLength = 0
        }
        var newLengthArray = JSON.stringify(this.lengthArray)

        var outp = new Array()
        for (var i = 0; i < newLengthArray.length; i++) {
          outp.push(i)
          if (outp.length > 3) {
            outp.sort(function (a, b) {
              return newLengthArray[b] - newLengthArray[a]
            })
            outp.pop()
          }
        }

        var sectionOneResultArray = []
        for (let i = 0; i < outp.length; i++) {
          sectionOneResultArray.push(sectionOneJson[i])
        }
        console.log('sectionOneResultArray - ', sectionOneResultArray)

        // -------------------------SectionTwoAnalysis-------------------------

        console.log('section2answers - ', section2answers.length)
        var newCalculatedArray = []
        for (let i = 0; i < section2answers.length; i = i + 3) {
          console.log('inside for')
          console.log('section2answers[i] - ', section2answers[i])
          console.log('section2answers[i+1] - ', section2answers[i + 1])
          console.log('section2answers[i+2] - ', section2answers[i + 2])
          var addn =
            section2answers[i] + section2answers[i + 1] + section2answers[i + 2]
          console.log('addn - ', addn)
          newCalculatedArray.push(
            Math.round(
              ((section2answers[i] +
                section2answers[i + 1] +
                section2answers[i + 2]) /
                9) *
                100
            )
          )
          if (i >= section2answers.length) {
            break
          }
        }
        console.log(newCalculatedArray)
        let newCalculatedArrayAverage = 0
        let sum = 0
        for (let I = 0; I < newCalculatedArray.length; I++) {
          sum = newCalculatedArray[I] + sum
        }
        console.log(sum)
        console.log(newCalculatedArray.length)
        newCalculatedArrayAverage = sum / newCalculatedArray.length

        console.info(newCalculatedArrayAverage)

        // const section3answers = localStorage.getItem("section3Answers");
        // const section4answers = localStorage.getItem("section4Answers");
        // reportTemplate.EmailPDF(localStorage.getItem("section5Answers"));

        // Default export is a4 paper, portrait, using millimeters for units
        //       var doc = new jsPDF();

        // // Source HTMLElement or a string containing HTML.
        // var elementHTML = document.querySelector("#content");

        // doc.html(indexHtml, {
        //     callback: function(doc) {
        //         // Save the PDF
        //         doc.save('document-html.pdf');
        //     },
        //     margin: [10, 10, 10, 10],
        //     autoPaging: 'text',
        //     x: 0,
        //     y: 0,
        //     width: 190, //target width in the PDF document
        //     windowWidth: 675 //window width in CSS pixels
        // });
        // console.log("PersonalSectionAnswers - ", PersonalSectionAnswers)
        //         reportTemplate.generatePDF("secOne", "secTwo", "secThree", "secFour", "secFive", PersonalSectionAnswers);
      },
    }
  },
  */
}
</script>
