<template>
  <header>
    <img src="/img/logo.svg" alt="" class="logo hidden-tablet hidden-mobile">
    <nav class="hidden-mobile">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Works</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    height: 100%;
    position: absolute;
    left: 0;
  }

  nav {
    height: 5rem;
    padding: 0.6rem;
    display: flex;
    gap: 2.4rem;
    background-color: rgba(234, 232, 232, 0.6);
    border-radius: 0.8rem;

    & > * {
      display: flex;
      align-items: center;
      padding-inline: 2.4rem;
      border-radius: 0.6rem;

      &:hover {
        background-color: rgba(253, 253, 253, 0.8);
      }
    }

    .router-link-active {
      background-color: rgba(253, 253, 253, 0.8);
    }
  }
}
</style>
