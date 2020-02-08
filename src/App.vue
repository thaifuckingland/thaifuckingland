<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Charmonman:400,700&display=swap&subset=thai');

:root {
  --color-secondary: #363636;
  --color-primary: #fefefe;
  --color-accent: #d22c2c;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: var(--color-accent);
}

body {
  font-family: 'Charmonman', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-secondary);
  background-color: var(--color-primary);
}
</style>
