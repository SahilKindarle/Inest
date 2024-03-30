<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>
        <form class="q-gutter-md" @submit.prevent.stop="onSubmit">
          <div class="q-pa-xl">
            <div class="text-h4 q-px-xl montserrat q-mb-lg">
              Personal Details
            </div>
            <div class="row">
              <div class="col-6 q-px-xl">
                <q-input
                  ref="fNameRef"
                  v-model="fName"
                  outlined
                  label="Full Name*"
                  :rules="fNameRules"
                />
              </div>
              <div class="col-6 q-px-xl">
                <q-input
                  ref="emailRef"
                  v-model="email"
                  outlined
                  label="Email*"
                  type="email"
                  :rules="emailRules"
                />
              </div>
              <div class="col-4 q-pl-xl">
                <q-input
                  ref="phoneRef"
                  v-model="phone"
                  outlined
                  label="Phone"
                  mask="(###) ### - ####"
                  :rules="motherMobileRules"
                />
              </div>

              <div class="col-4 q-px-lg">
                <q-input
                  ref="dobRef"
                  v-model="dob"
                  outlined
                  label="Date of Birth"
                  type="date"
                />
              </div>
              <div class="col-4 q-px-lg">
                <q-select
                  ref="genderRef"
                  v-model="gender"
                  outlined
                  :options="genderOptions"
                  label="Gender"
                />
              </div>
              <div class="col-12 q-pl-xl q-pt-lg">
                <q-input
                  ref="homeAddressRef"
                  v-model="homeAddress"
                  label="Address*"
                  outlined
                  :rules="homeAddressRules"
                />
              </div>
              <div class="col-9 q-pl-xl q-pt-md">
                <q-input
                  ref="schoolAddressRef"
                  v-model="schoolAddress"
                  label="School Address*"
                  outlined
                  :rules="schoolAddressRules"
                />
              </div>
              <div class="col-3 q-pl-xl q-pt-md">
                <q-input
                  ref="classSectionRef"
                  v-model="classSection"
                  label="Class & Section*"
                  outlined
                  :rules="classSectionRules"
                />
              </div>

              <div class="col-12 q-pt-xl q-pb-md q-px-xl">
                <div class="text-h4 montserrat">Family Details</div>
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="fatherNameRef"
                  v-model="fatherName"
                  label="Father's Name*"
                  outlined
                  :rules="fatherNameRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  v-model="fatherOccupation"
                  label="Father's Occupation"
                  outlined
                />
              </div>

              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="fatherMobileRef"
                  v-model="fatherMobile"
                  label="Father's Mobile Number*"
                  outlined
                  mask="(###) ### - ####"
                  :rules="motherMobileRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="fatherEmailRef"
                  v-model="fatherEmail"
                  label="Father's Email"
                  type="email"
                  outlined
                  :rules="emailRules"
                />
              </div>

              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="motherNameRef"
                  v-model="motherName"
                  label="Mother's Name*"
                  outlined
                  :rules="motherNameRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  v-model="motherOccupation"
                  label="Mother's Occupation"
                  outlined
                />
              </div>

              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="motherMobileRef"
                  v-model="motherMobile"
                  label="Mother's Mobile Number*"
                  outlined
                  mask="(###) ### - ####"
                  :rules="motherMobileRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="motherEmailRef"
                  v-model="motherEmail"
                  label="Mother's Email"
                  type="email"
                  outlined
                  :rules="emailRules"
                />
              </div>

              <div class="col-12 q-pt-xl q-pb-md q-px-xl">
                <div class="text-h4 montserrat">Academics</div>
                <div class="text-body1 montserrat q-pt-lg">
                  Previous Examination Marks*
                </div>
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="ExamNameRef"
                  v-model="examName"
                  label="Exam Name*"
                  outlined
                  :rules="examNameRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="marksScoredRef"
                  v-model="marksScoSpeak"
                  label="Marks Scored*"
                  outlined
                  mask="###"
                  :rules="marksScoSpeakRules"
                />
              </div>
              <div class="col-12">
                <div class="text-body1 montserrat q-pt-lg q-pl-xl">
                  Languages Known*
                </div>
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="languageRef"
                  v-model="language"
                  label="Language*"
                  outlined
                  :rules="languageRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <div class="q-gutter-sm">
                  <q-checkbox
                    v-model="languagesSelection"
                    val="Read"
                    label="Read"
                    color="Read"
                  />
                  <q-checkbox
                    v-model="languagesSelection"
                    val="Write"
                    label="Write"
                    color="Write"
                  />
                  <q-checkbox
                    v-model="languagesSelection"
                    val="Speak"
                    label="Speak"
                    color="Speak"
                  />
                  <q-checkbox
                    v-model="languagesSelection"
                    val="Understand"
                    label="Understand"
                    color="Understand"
                  />
                </div>
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <q-input
                  ref="language2Ref"
                  v-model="language2"
                  label="Language*"
                  outlined
                  :rules="languageRules"
                />
              </div>
              <div class="col-6 q-pl-xl q-pt-md">
                <div class="q-gutter-sm">
                  <q-checkbox
                    v-model="languagesSelection2"
                    val="Read"
                    label="Read"
                    color="Read"
                  />
                  <q-checkbox
                    v-model="languagesSelection2"
                    val="Write"
                    label="Write"
                    color="Write"
                  />
                  <q-checkbox
                    v-model="languagesSelection2"
                    val="Speak"
                    label="Speak"
                    color="Speak"
                  />
                  <q-checkbox
                    v-model="languagesSelection2"
                    val="Understand"
                    label="Understand"
                    color="Understand"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="col-12 q-pl-xl q-pt-lg">
              <div id="app" style="width: 30%; height: 50%; margin-left: 10%">
                <div class="text-body">Signature</div>
                <VueSignaturePad
                  ref="signaturePad"
                  width="100%"
                  height="100%"
                  style="border: 1px solid grey"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="row justify-end">
                <q-btn
                  type="submit"
                  label="Start Assessment"
                  class="q-ma-xl q-px-xl"
                  color="primary"
                >
                </q-btn>
              </div>
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
import { useAnswerStore } from 'src/stores/answer'
import { VueSignaturePad } from 'vue-signature-pad'

import { useQuasar } from 'quasar'
export default {
  name: 'PersonalDetailsComponent',

  components: {
    VueSignaturePad,
  },

  setup() {
    const router = useRouter()
    const $q = useQuasar()

    const fName = ref(null)
    const fNameRef = ref(null)
    const phoneRef = ref(null)
    const dobRef = ref(null)
    const genderRef = ref(null)
    const email = ref(null)
    const emailRef = ref(null)
    const phone = ref(null)
    const gender = ref('Male')
    const homeAddress = ref(null)
    const schoolAddress = ref(null)
    const classSection = ref(null)
    const fatherName = ref(null)
    const fatherOccupation = ref(null)
    const fatherMobile = ref(null)
    const fatherEmail = ref(null)
    const motherName = ref(null)
    const motherOccupation = ref(null)
    const motherMobile = ref(null)
    const motherEmail = ref(null)
    const examName = ref(null)
    const marksScoSpeak = ref(null)
    const language = ref(null)
    const language2 = ref(null)
    const languagesSelection = ref([])
    const dob = ref(null)
    const languagesSelection2 = ref([])
    const homeAddressRef = ref(null)
    const schoolAddressRef = ref(null)
    const classSectionRef = ref(null)
    const fatherMobileRef = ref(null)
    const fatherNameRef = ref(null)
    const fatherEmailRef = ref(null)
    const motherNameRef = ref(null)
    const motherMobileRef = ref(null)
    const motherEmailRef = ref(null)
    const ExamNameRef = ref(null)
    const marksScoredRef = ref(null)
    const languageRef = ref(null)
    const language2Ref = ref(null)

    const signaturePad = ref(null)

    const genderOptions = ['Male', 'Female', 'Other']
    const languageRules = [
      val => (val && val.length > 2) || 'Please provide valid Language Name',
    ]
    const marksScoSpeakRules = [
      val => (val && val > 0) || 'Please provide valid Marks',
    ]
    const examNameRules = [
      val => (val && val.length > 5) || 'Please provide valid Exam Name',
    ]
    const motherMobileRules = [
      val => (val && val.length > 9) || 'Please provide valid Phone Number',
    ]
    const fatherNameRules = [
      val => (val && val.length > 0) || 'Please provide Father Name',
    ]
    const motherNameRules = [
      val => (val && val.length > 0) || 'Please provide Mother Name',
    ]
    const classSectionRules = [
      val => (val && val.length > 0) || 'Please provide class and section',
    ]
    const homeAddressRules = [
      val => (val && val.length > 0) || 'Please provide Home Address',
    ]
    const schoolAddressRules = [
      val => (val && val.length > 0) || 'Please provide Home Address',
    ]
    const fNameRules = [
      val => (val && val.length > 0) || 'Please provide full name',
    ]
    const emailRules = [
      val => (val && val.length > 0) || 'Please provide a valid Email',
    ]

    const onSubmit = () => {
      fNameRef.value.validate()
      emailRef.value.validate()
      phoneRef.value.validate()
      dobRef.value.validate()
      genderRef.value.validate()
      homeAddressRef.value.validate()
      schoolAddressRef.value.validate()
      classSectionRef.value.validate()
      fatherNameRef.value.validate()
      fatherMobileRef.value.validate()
      fatherEmailRef.value.validate()
      motherNameRef.value.validate()
      motherMobileRef.value.validate()
      motherEmailRef.value.validate()
      ExamNameRef.value.validate()
      marksScoredRef.value.validate()
      languageRef.value.validate()
      language2Ref.value.validate()

      const { isEmpty, data: signaturePadData } =
        signaturePad.value.saveSignature()

      if (isEmpty) {
        $q.notify({ type: 'negative', message: 'Please provide a signature' })
        return
      }

      var objFinal = {
        fName: fName.value,
        phone: phone.value,
        email: email.value,
        gender: gender.value,
        homeAddress: homeAddress.value,
        schoolAddress: schoolAddress.value,
        classSection: classSection.value,
        fatherName: fatherName.value,
        fatherOccupation: fatherOccupation.value,
        fatherEmail: fatherEmail.value,
        fatherMobile: fatherMobile.value,
        motherName: motherName.value,
        motherOccupation: motherOccupation.value,
        motherEmail: motherEmail.value,
        motherMobile: motherMobile.value,
        examName: examName.value,
        marksScoSpeak: marksScoSpeak.value,
        language: language.value,
        language2: language2.value,
        languagesSelection: languagesSelection.value,
        languagesSelection2: languagesSelection2.value,
        dob: dob.value,
        signature: signaturePadData,
      }

      useAnswerStore().personalDetails = objFinal

      router.push('section1')
    }

    return {
      fName,
      phone,
      email,
      gender,
      homeAddress,
      schoolAddress,
      classSection,
      fatherName,
      fatherOccupation,
      fatherMobile,
      fatherEmail,
      motherName,
      motherOccupation,
      motherEmail,
      motherMobile,
      examName,
      marksScoSpeak,
      language,
      language2,
      languagesSelection,
      languagesSelection2,
      dob,
      dobRef,
      fNameRef,
      emailRef,
      phoneRef,
      genderRef,
      homeAddressRef,
      schoolAddressRef,
      classSectionRef,
      fatherMobileRef,
      fatherNameRef,
      fatherEmailRef,
      motherNameRef,
      motherMobileRef,
      motherEmailRef,
      ExamNameRef,
      languageRef,
      language2Ref,
      marksScoredRef,

      // signature
      signaturePad,

      // rules
      genderOptions,
      languageRules,
      marksScoSpeakRules,
      examNameRules,
      motherMobileRules,
      fatherNameRules,
      motherNameRules,
      classSectionRules,
      homeAddressRules,
      schoolAddressRules,
      fNameRules,
      emailRules,

      // submit
      onSubmit,
    }
  },
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
