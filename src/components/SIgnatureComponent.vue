<template>
  <div id="app" style="width: 30%; height: 50%; margin-left: 10%">
    <div class="text-body">Signature</div>
    <VueSignaturePad
      width="100%"
      height="100%"
      style="border: 1px solid grey"
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { VueSignaturePad } from 'vue-signature-pad'

export default defineComponent({
  name: 'SignaturePad',
  components: { VueSignaturePad },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    },
  },
})
</script>
