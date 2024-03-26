<template>
  <q-layout view="lHh Lpr lFf">
    <q-img
      src="https://qwikappstorage.blob.core.windows.net/uploads/qwikStaticAssets/qs4StrapiImages/csaComponents/csaHeroImage.jpeg"
      spinner-color="white"
    />
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          to="/"
          icon="home"
        />

        <q-toolbar-title>
          quasar-ui-inest v{{ version }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from 'ui' // "ui" is aliased in quasar.conf.js

export default {
  name: 'MyLayout',

  setup () {
    return {
      version
    }
  }
}
</script>
