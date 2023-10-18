<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w3-padding">
    <div>
      <h1>Token Gen</h1>
      <div class="w3-dropdown-hover">
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
    <div class="w3-row-padding w3-margin" style="display: flex;">
      <div class="w3-col s12 m6"> <!-- inputs -->
        <div class="w3-row-padding w3-margin">
          <div class="w3-col s2"><label for="width">Server file path:</label></div>
          <div class="w3-col s10"><input type="text" class="w3-input" name="url" /></div>
        </div>
        <div class="w3-row-padding w3-margin">
          <div class="w3-col s2"><label for="width">File width (px):</label></div>
          <div class="w3-col s10"><input type="number" class="w3-input" name="width" /></div>
        </div>
        <div class="w3-row-padding w3-margin">
          <div class="w3-col s2"><label for="width">File height (px):</label></div>
          <div class="w3-col s10"><input type="number" class="w3-input" name="height" /></div>
        </div>
        <div class="w3-row-padding w3-margin">
          <div class="w3-col s2"><label for="width"># of tokens in row:</label></div>
          <div class="w3-col s10"><input type="number" class="w3-input" name="x" /></div>
        </div>
        <div class="w3-row-padding w3-margin">
          <div class="w3-col s2"><label for="width"># of rows:</label></div>
          <div class="w3-col s10"><input type="number" class="w3-input" name="y" /></div>
        </div>
      </div>
      <div class="w3-col s12 m6 w3-border-left w3-border-white"> <!-- output -->
        <pre v-highlightjs="sourcecode">
          <code class="css">
div.card {
  display: inline
}
        </code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
