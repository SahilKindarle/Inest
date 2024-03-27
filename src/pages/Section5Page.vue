<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">Section 5</div>
            <div v-for="(que, index) in questionsFinal" :key="que.id">
              <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
                {{ `${index + 1}) ${que.title}` }}
              </div>
              <!-- {{ choice }} -->
              <div class="row">
                <div class="col-2">
                  <q-option-group
                    v-model="answers[index]"
                    class="q-px-xl"
                    color="primary"
                    :options="options"
                    type="radio"
                  />
                </div>
              </div>
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
    <div id="content">
      <!-- <section style="margin-bottom: 200px">
                <img src="https://qs-training-resources.s3.amazonaws.com/training_practice_tests/banner.jpg" alt="">
                <h1 style="text-align: center;">Career Suitability Assessment</h1>
                <div class="content">
                    <div class="applicant-details">
                        <div class="details">
                            <p>Applicant ID</p>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Class and Section</p>
                            <p>Institution</p>
                        </div>
                        <div class="info">
                            <p>: ${data.applicantID}</p>
                            <p>: ${data.name}</p>
                            <p>: ${data.email}</p>
                            <p>: ${data.phone}</p>
                            <p>: ${data.classSection}</p>
                            <p>: ${data.institutionName}</p>
                        </div>
                    </div>
                    <br>
                    <p style="margin-bottom: 10px;"><strong>Dear Student ,</strong> </p>
                    <p style="margin-bottom: 10px;">Innovation Nest (INN) was founded by like-minded group of senior management
                        professionals to support individuals
                        and organization through Training, Coaching, Consulting and Development. Since our inception, we have
                        been
                        totally focusing on building competencies creatively with support of technology and tools.</p>
                    <p>MentoNest is an initiative of Innovation Nest. We are the best-in-class career
                        management organisation. Since our
                        inception, we have been involved in designing and developing solutions and providing mentoring for
                        students
                        and
                        young professionals.</p>
                    <br>
                    <ul style="margin-left: 12px;">
                        <li><strong style="padding-left: 25px;">WHAT</strong></li>
                        <p style="padding-left: 10px;">
                            Teaching, medicine, mechanics, interior designing, web development, entrepreneurship, hospitality,
                            and
                            journalism are some of the good career options to choose. Choose a career that suits your skills and
                            interests you. Because you can be successful in the chosen field only if you have an interest in it
                            with
                            our
                            support.
                        </p>
                        <br>
                        <li><strong style="padding-left: 25px;">WHY</strong></li>
                        <p style="padding-left: 10px;">
                            Achieving defined career goals often requires developing strategies and an action plan. Regardless
                            of
                            your
                            field or career aspirations, you can plan and take actionable steps to manage your career
                            effectively.
                            Understanding the importance and benefits of career management can help you advance in your career.
                        </p>
                        <br>
                        <li><strong style="padding-left: 25px;">HOW</strong></li>
                        <p style="padding-left: 10px;">
                            Adequate skill resourcing is essential, especially during organizational or industrial changes. By
                            managing
                            your career effectively, you can evaluate your skills and qualifications and recognize other career
                            paths
                            that fit you. Career management helps you become resourceful and advance to roles that best suit
                            your
                            skill
                            sets and meet your aspirations.

                        </p>
                        <br>
                        <li><strong style="padding-left: 25px;">WHEN</strong></li>
                        <p style="padding-left: 10px;">
                            Total years of working is between 35 years. Setting specific and concise career goals is essential
                            to
                            monitor your career development and progress toward achieving the goals. You can create a realistic
                            and
                            measurable career goal and steadily take actionable steps to achieve it.
                        </p>
                    </ul>
                </div>
                <footer>
                    <p> &#169 innovationnest 2023 </p>
                    <p>support@innovationnest.in</p>
                    <p>Powered by AFFCOR</p>
                </footer>
            </section> -->
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
// import { jsPDF } from "jspdf";
import questions from '../assets/questions.json'
import sectionOneJson from '../assets/sectionOne.json'
// import pdfService from "../services/pdfGeneration";
// import reportTemplate from "../assets/reportTemplate";
// import indexHtml from "../services/index.html";
let questionsFinal = questions[4].questions
let currLength = 0
export default {
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
}
</script>
