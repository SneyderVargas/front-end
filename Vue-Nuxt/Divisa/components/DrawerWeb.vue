<script lang="ts" setup>
import { useMainStore } from '~~/stores/mainStore';
import { defineComponent, ref, computed } from 'vue';
const mainStore = useMainStore();
// export default {
//   data: () => ({ drawer: null }),
// };
// const drawer =  ref(false);

const drawerComputada = computed({
  get: () => mainStore.getDrawer,
  set: (value) => { mainStore.setDrawer(value) }
})
</script>
<template>
  <div>
    <v-navigation-drawer v-model="drawerComputada" permanent absolute>
      <!--  -->
      <AvatarDrawer/>
      <ListItemDrawer />
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawerComputada = !drawerComputada">
        <Icon name="ic:outline-menu" />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>