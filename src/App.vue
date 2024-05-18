<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer";

export default {
  name: "App",
  components: {
    MainContainer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
  height: 100vh;
}

@font-face {
  font-family: "WorkSans";
  src: url("./assets/fonts/workSans.ttf") format("truetype");
}

p {
  font-family: WorkSans;
}

h1 {
  font-family: WorkSans;
}

h2 {
  font-family: WorkSans;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.buttons {
  display: flex;
  gap: 3%;
  justify-content: center;
  width: 100vw;
}
</style>
