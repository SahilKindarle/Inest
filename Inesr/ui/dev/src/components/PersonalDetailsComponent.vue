<template>
  <q-page>
    <div padding class="q-pa-xl" style="padding-left: 15%; padding-right: 15%">
      <div style="background-color: #f6f6f9; border-radius: 2%">
        <div class="q-pt-lg q-pl-xl text-h3 poppins-regular text-weight-medium">
          Career Suitability Assessment
        </div>
        <form @submit.prevent.stop="onSubmit" class="q-gutter-md">
          <div class="q-pa-xl">
            <div class="text-h4 q-px-xl montserrat q-mb-lg">
              Personal Details
            </div>
            <div class="row">
              <div class="col-6 q-px-xl">
                <q-input
                  outlined
                  v-model="fName"
                  ref="fNameRef"
                  label="Full Name*"
                  :dense="dense"
                  :rules="fNameRules"
                />
              </div>
              <div class="col-6 q-px-xl">
                <q-input
                  outlined
                  ref="emailRef"
                  v-model="email"
                  label="Email*"
                  type="email"
                  :dense="dense"
                  :rules="emailRules"
                />
              </div>
              <div class="col-4 q-pl-xl">
                <q-input
                  outlined
                  ref="phoneRef"
                  v-model="phone"
                  label="Phone"
                  mask="(###) ### - ####"
                  :rules="motherMobileRules"
                />
              </div>

              <div class="col-4 q-px-lg">
                <q-input
                  ref="dobRef"
                  outlined
                  v-model="dob"
                  label="Date of Birth"
                  type="date"
                />
              </div>
              <div class="col-4 q-px-lg">
                <q-select
                  ref="genderRef"
                  outlined
                  v-model="gender"
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
            <!-- The model data: <strong>{{ languagesSelection }}</strong>
            The model data: <strong>{{ languagesSelection2 }}</strong> -->
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
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const fName = ref(null);
    const fNameRef = ref(null);
    const phoneRef = ref(null);
    const dobRef = ref(null);
    const genderRef = ref(null);
    const email = ref(null);
    const emailRef = ref(null);
    const phone = ref(null);
    const gender = ref("Male");
    const homeAddress = ref(null);
    const schoolAddress = ref(null);
    const classSection = ref(null);
    const fatherName = ref(null);
    const fatherOccupation = ref(null);
    const fatherMobile = ref(null);
    const fatherEmail = ref(null);
    const motherName = ref(null);
    const motherOccupation = ref(null);
    const motherMobile = ref(null);
    const motherEmail = ref(null);
    const examName = ref(null);
    const marksScoSpeak = ref(null);
    const language = ref(null);
    const language2 = ref(null);
    const languagesSelection = ref([]);
    const dob = ref(null);
    const languagesSelection2 = ref([]);
    const homeAddressRef = ref(null);
    const schoolAddressRef = ref(null);
    const classSectionRef = ref(null);
    const fatherMobileRef = ref(null);
    const fatherNameRef = ref(null);
    const fatherEmailRef = ref(null);
    const motherNameRef = ref(null);
    const motherMobileRef = ref(null);
    const motherEmailRef = ref(null);
    const ExamNameRef = ref(null);
    const marksScoredRef = ref(null);
    const languageRef = ref(null);
    const language2Ref = ref(null);

    return {
      dense: ref(false),
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
      genderOptions: ["Male", "Female", "Other"],
      languageRules: [
        (val) =>
          (val && val.length > 2) || "Please provide valid Language Name",
      ],
      marksScoSpeakRules: [
        (val) => (val && val > 0) || "Please provide valid Marks",
      ],
      examNameRules: [
        (val) => (val && val.length > 5) || "Please provide valid Exam Name",
      ],
      motherMobileRules: [
        (val) => (val && val.length > 9) || "Please provide valid Phone Number",
      ],
      fatherNameRules: [
        (val) => (val && val.length > 0) || "Please provide Father Name",
      ],
      motherNameRules: [
        (val) => (val && val.length > 0) || "Please provide Mother Name",
      ],
      classSectionRules: [
        (val) => (val && val.length > 0) || "Please provide class and section",
      ],
      homeAddressRules: [
        (val) => (val && val.length > 0) || "Please provide Home Address",
      ],
      schoolAddressRules: [
        (val) => (val && val.length > 0) || "Please provide Home Address",
      ],
      fNameRules: [
        (val) => (val && val.length > 0) || "Please provide full name",
      ],
      emailRules: [
        (val) => (val && val.length > 0) || "Please provide a valid Email",
      ],
      onSubmit() {
        fNameRef.value.validate();
        emailRef.value.validate();
        phoneRef.value.validate();
        dobRef.value.validate();
        genderRef.value.validate();
        homeAddressRef.value.validate();
        schoolAddressRef.value.validate();
        classSectionRef.value.validate();
        fatherNameRef.value.validate();
        fatherMobileRef.value.validate();
        fatherEmailRef.value.validate();
        motherNameRef.value.validate();
        motherMobileRef.value.validate();
        motherEmailRef.value.validate();
        ExamNameRef.value.validate();
        marksScoredRef.value.validate();
        languageRef.value.validate();
        language2Ref.value.validate();

        //   console.log("fName - ", JSON.stringify(fName))
        // console.log("phone - ", JSON.stringify(phone))
        // console.log("email - ", JSON.stringify(email))
        // console.log("gender - ", JSON.stringify(gender))
        // console.log("homeAddress - ", JSON.stringify(homeAddress))
        // console.log("schoolAddress - ", JSON.stringify(schoolAddress))
        // console.log("classSection - ", JSON.stringify(classSection))
        // console.log("fatherName - ", JSON.stringify(fatherName))
        // console.log("fatherOccupation - ", JSON.stringify(fatherOccupation))
        // console.log("fatherEmail - ", JSON.stringify(fatherEmail))
        // console.log("fatherMobile - ", JSON.stringify(fatherMobile))
        // console.log("motherName - ", JSON.stringify(motherName))
        // console.log("motherOccupation - ", JSON.stringify(motherOccupation))
        // console.log("motherEmail - ", JSON.stringify(motherEmail))
        // console.log("motherMobile - ", JSON.stringify(motherMobile))
        // console.log("examName - ", JSON.stringify(examName))
        // console.log("marksScoSpeak - ", JSON.stringify(marksScoSpeak))
        // console.log("language - ", JSON.stringify(language))
        // console.log("language2 - ", JSON.stringify(language2))
        // console.log("languagesSelection - ", JSON.stringify(languagesSelection))
        // console.log("languagesSelection2 - ", JSON.stringify(languagesSelection2))
        // console.log("dob - ", JSON.stringify(dob))

        console.log(fName.value);

        var objFinal = {};
        objFinal.fName = fName.value;
        objFinal.phone = phone.value;
        objFinal.email = email.value;
        objFinal.gender = gender.value;
        objFinal.homeAddress = homeAddress.value;
        objFinal.schoolAddress = schoolAddress.value;
        objFinal.classSection = classSection.value;
        objFinal.fatherName = fatherName.value;
        objFinal.fatherOccupation = fatherOccupation.value;
        objFinal.fatherEmail = fatherEmail.value;
        objFinal.fatherMobile = fatherMobile.value;
        objFinal.motherName = motherName.value;
        objFinal.motherOccupation = motherOccupation.value;
        objFinal.motherEmail = motherEmail.value;
        objFinal.motherMobile = motherMobile.value;
        objFinal.examName = examName.value;
        objFinal.marksScoSpeak = marksScoSpeak.value;
        objFinal.language = language.value;
        objFinal.language2 = language2.value;
        objFinal.languagesSelection = languagesSelection.value;
        objFinal.languagesSelection2 = languagesSelection2.value;
        objFinal.dob = dob.value;
        console.log(JSON.stringify(objFinal));

        localStorage.setItem(
          "PersonalSectionAnswers",
          JSON.stringify(objFinal)
        );

        console.log(localStorage.getItem("PersonalSectionAnswers"))
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
