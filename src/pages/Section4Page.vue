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
              Section 4: Personality Type
            </div>

            <div class="col-12 q-px-xl q-mt-xl q-pt-md q-pb-md">
              {{ section.instructions }}
            </div>

            <q-item
              v-for="opt in section.options"
              :key="opt.id"
              tag="label"
              class="q-px-xl"
            >
              <q-img
                :src="opt.imageLink"
                class="q-ma-lg"
                spinner-color="white"
                style="height: 140px; max-width: 150px"
              />
              <q-radio
                v-model="answer"
                name="shape"
                :val="opt"
                :label="opt.label"
                color="primary"
              />
            </q-item>
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

import section from '../assets/questions/section4.json'

import { useAnswerStore } from 'src/stores/answer'

export default {
  name: 'Section4Page',

  setup() {
    const router = useRouter()
    const $q = useQuasar()

    const answer = ref(null)

    const validateAnswers = () => {
      if (!answer.value) {
        $q.notify({
          type: 'negative',
          message: 'Please select one of the options',
        })
        return false
      }
      return true
    }

    const saveResult = () => {
      if (!validateAnswers()) {
        return false
      }
      useAnswerStore().section4 = answer.value
      return true
    }

    const onSubmit = () => {
      if (saveResult()) {
        router.push('/section5')
      }
    }

    return {
      section,
      answer,
      onSubmit,
    }
  },
}
</script>
