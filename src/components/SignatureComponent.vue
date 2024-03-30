<template>
  <div id="app" style="width: 30%; height: 50%; margin-left: 10%">
    <div class="text-body">Signature</div>
    <VueSignaturePad
      ref="signaturePad"
      width="100%"
      height="100%"
      style="border: 1px solid grey"
    />
    <button @click="save">Save</button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { VueSignaturePad } from 'vue-signature-pad'
// import { useAnswerStore } from 'src/stores/answer'

export default defineComponent({
  name: 'SignaturePad',
  components: { VueSignaturePad },
  setup() {
    const signaturePad = ref(null)
    const save = () => {
      const { isEmpty, data } = signaturePad.value.saveSignature()
      console.log(isEmpty)
      console.log(data)
    }
    return {
      signaturePad,
      save,
    }
  },
})
</script>
