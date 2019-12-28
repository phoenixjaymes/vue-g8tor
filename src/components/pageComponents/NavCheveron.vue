<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" v-if="chevDirection === 'left'">
    <path class="cheveron" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" v-else>
    <path class="cheveron" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
  </svg>
</template>

<script>
export default {
  name: 'NavCheveron',
  props: {
    chevDirection: String,
  }
}
</script>

<style>
  .cheveron {
    fill: rgba(0, 0, 50, .6);
  }

  .cheveron:hover {
    fill: rgba(0, 0, 50, .9);
  }
</style>