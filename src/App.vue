
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" height="300" />
  </header>

  <RouterView style="flex:1;"/>
</template>

<style scoped>
header {
  line-height: 1.5;
  flex: 0.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
