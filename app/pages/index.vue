<template>
  <uContainer class="page-container">
    <h1 class="title">Nuxt Chat</h1>
    <uButton to="/chat" class="button"> Start Chat </uButton>
  </uContainer>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

title {
  font-size: 2.25rem;
  font-weight: bold;
}

.botton {
  margin-top: 1.5rem;
}
</style>
