<template>
<div class="w3-display-bottomright w3-padding">v{{ this.version }}</div>
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