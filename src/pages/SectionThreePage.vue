<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>

        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h6 q-px-xl montserrat q-mb-md">Section 3</div>
            <div v-for="(que, index) in questionsFinal" :key="que.id">
              <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
                {{ index + 1 }} {{"          )  "}} {{ que.title }}
              </div>
              <!-- {{ choice }} -->
              <q-option-group
                v-model="answers[index]"
                class="q-px-xl"
                color="primary"
                :options="options"
                type="radio"
              />

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
let questionsFinal = questions[2].questions;
console.log("questionsFinal - ", questionsFinal);
export default {
  setup() {
    return {
      questionsFinal,
      answers: ref([null]),
      options: [
        { label: "Not at All", value: "notAtAll" },
        { label: "Rarely", value: "rarely" },
        { label: "Sometimes", value: "sometimes" },
        { label: "Often", value: "often" },
        { label: "Very Often", value: "veryOften" },
      ],
      onSubmit() {
        console.log(JSON.stringify(this.answers))
        localStorage.setItem("section3Answers", JSON.stringify(this.answers));
        console.log(localStorage.getItem("section3Answers"))
      },
    };
  },
};
</script>
