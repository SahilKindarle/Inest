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
            <div v-for="(que, index) in questionsFinal" :key="que.id">
              <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
                {{ index + 1 }} {{ que.title }}
              </div>
              <!-- answers[index] =[] -->
              <div
                v-for="(choice, index2) in que.choices"
                :key="choice.id"
                class="q-px-xl"
              >
                <!-- {{ answers[index][index2] }} -->
                <q-checkbox
                  v-model="answers[index][index2]"
                  dark
                  :label="que.choices[index2].answer"
                  color="primary"
                  :true-value="true"
                  :false-value="false"
                  keep-color
                />
                <!-- {{ que.choices[index2].answer }} -->
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
import { computed, ref } from "vue";
import questions from "../assets/questions.json";
let questionsFinal = questions[0].questions;

export default {
  setup() {
    return {
      questionsFinal,
      answers: ref([
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ]),
      onSubmit() {
        if (localStorage.getItem("section1Answers")) {
          localStorage.removeItem("section1Answers");
        }
        localStorage.setItem("section1Answers", JSON.stringify(this.answers));
        // console.log(localStorage.getItem("section1Answers"))
        // console.log(JSON.stringify(this.answers))
      },
    };
  },
};
</script>
