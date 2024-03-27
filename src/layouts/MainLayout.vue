<template>
  <q-layout view="lHh Lpr lFf">
    <q-img
      src="https://qwikappstorage.blob.core.windows.net/uploads/qwikStaticAssets/qs4StrapiImages/csaComponents/csaHeroImage.jpeg"
      spinner-color="white"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  setup() {
    return {}
  },
}
</script>
