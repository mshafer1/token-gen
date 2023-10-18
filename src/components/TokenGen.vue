<template>
    <div class="w3-row-padding w3-margin" style="display: flex;">
        <div class="w3-col s12 m6"> <!-- inputs -->
            <div class="w3-row-padding w3-margin">
                <div class="w3-col s2"><label for="url">Server file path:</label></div>
                <div class="w3-col s10"><input type="text" placeholder="/cards.jpg" class="w3-input" id="url"
                        v-model="url" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col s2"><label for="width">File width (px):</label></div>
                <div class="w3-col s10"><input type="number" placeholder="1920" class="w3-input" id="width"
                        v-model="width" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col s2"><label for="height">File height (px):</label></div>
                <div class="w3-col s10"><input type="number" placeholder="1080" class="w3-input" id="height"
                        v-model="height" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col s2"><label for="x"># of tokens in row:</label></div>
                <div class="w3-col s10"><input type="number" placeholder="13" class="w3-input" id="x" min="1" v-model="x" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col s2"><label for="y"># of rows:</label></div>
                <div class="w3-col s10"><input type="number" placeholder="4" class="w3-input" id="y" min="1" v-model="y" /></div>
            </div>
        </div>
        <div class="w3-col s12 m6 w3-border-left w3-border-white"> <!-- output -->
            <pre v-highlightjs="sourcecode">
          <code class="css">
div.card {
  /* test */
  display: inline;
}
        </code></pre>
        </div>
    </div>
</template>

<script>
export default {
    name: "token-gen",
    data: function () {
        return {
            url: "",
            width: "",
            height: "",
            x: "",
            y: "",
        }
    },
}
</script>