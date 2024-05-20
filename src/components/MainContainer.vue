<template>
  <div class="menu-container">
    <MenuContainer v-if="openMenu" @openAccountCreationTab="handleOpenAccountCreationTab"/>
    <CreateAnAccount v-if="openAccountContainer" />
  </div>
</template>

<script>
import MenuContainer from "@/components/MenuContainer.vue";
import CreateAnAccount from "@/views/CreateAnAccount.vue";

export default {
  name: "MainContainer",
  components: {
    MenuContainer,
    CreateAnAccount,
  },
  data() {
    return {
      openMenu: true,
      openAccountContainer: false,
    };
  },
  methods: {
    handleOpenAccountCreationTab() {
      this.openMenu = false;
      this.openAccountContainer = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
