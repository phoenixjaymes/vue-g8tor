<template>
  <footer class="main-footer">
    <nav class="navbar navbar-full">
      <small>&copy; {{ currentYear }} PhoenixJaymes</small>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return { currentYear: new Date().getFullYear() };
  },
}
</script>

<style>
  .main-footer {
    background: #6C7071;
    color: #fff;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>