<template>
<div class="w3-display-bottomright w3-padding prevent-select" style="z-index: 100; position: fixed; ">v{{ this.version }}</div>
</template>

<script>
export default {
    name: "version-div",
    data: function () {
        return {
            version: process.env.version || "0",
        }
    },
}
</script>