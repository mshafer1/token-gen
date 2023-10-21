<script setup>
import TokenGen from './components/TokenGen.vue';
import Version from './components/Version.vue';
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w3-padding w3-container">
    <div>
      <h1>Token Gen</h1>
      <div class="w3-dropdown-hover prevent-select">
        <button class="w3-button w3-black">Why?</button>
        <div class="w3-dropdown-content w3-bar-block w3-black">
          <div class="w3-margin w3-padding w3-dark-gray" style="min-width: 40em;">
            It's a standard practice when dealing with tokens (for example, cards in a deck), to have the server host a
            single file that contains all the tokens (or cards) layed out in a grid, and then select which one to show at
            a time using css classes that know where in the grid to view (and how large).
            <br />
            <br />
            But who wants to code all that?
            <br />
            So, I opted to code it once, and be able to generate it from now on
            (and share that tool with you, the reader).
          </div>
        </div>
      </div>
    </div>
    <div>
      <TokenGen />
    </div>
    <div class="w3-padding">&nbsp;</div>
  </div>
  <Version />
</template>

<style scoped></style>
