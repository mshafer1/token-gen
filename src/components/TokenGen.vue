<template>
    <div class="w3-row-padding w3-margin" style="display: flex;">
        <div class="w3-col s12 m6"> <!-- inputs -->
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="url">Server file path:</label></div>
                <div class="w3-col m10 s12"><input type="text" placeholder="/cards.jpg" class="w3-input" id="url"
                        v-model="url" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="type">Token type:</label></div>
                <div class="w3-col m10 s12"><input type="text" class="w3-input" id="type" v-model="type" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="width">File width (px):</label></div>
                <div class="w3-col m10 s12"><input type="number" placeholder="1920" class="w3-input" id="width"
                        v-model="width" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="height">File height (px):</label></div>
                <div class="w3-col m10 s12"><input type="number" placeholder="1080" class="w3-input" id="height"
                        v-model="height" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="x"># of tokens in row:</label></div>
                <div class="w3-col m10 s12"><input type="number" placeholder="13" class="w3-input" id="x" min="1"
                        v-model="x" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="y"># of rows:</label></div>
                <div class="w3-col m10 s12"><input type="number" placeholder="4" class="w3-input" id="y" min="1"
                        v-model="y" /></div>
            </div>
            <div class="w3-row-padding w3-margin">
                <div class="w3-col m2 s12"><label for="names">{{ type }} names:
                        <div class="w3-dropdown-hover" style="background-color: transparent;">
                            <i class="fa-solid fa-circle-info"></i>
                            <div class="w3-dropdown-content w3-bar-block w3-border w3-border-black w3-padding" style="min-width: 40em; border-width: 5px!important;">
                                List {{  type }}s out one (1) per line -> a class will be generated for each in order
                                <br/>
                                (going left to right then top-down on the image.)
                            </div>
                        </div>
                    </label></div>
                <div class="w3-col m10 s12"><textarea placeholder="..." style="resize:vertical" rows="10" class="w3-input"
                        id="names" min="1" v-model="names" /></div>
            </div>
        </div>
        <div class="w3-col s12 m6 w3-border-left w3-border-white"> <!-- output -->
            <pre v-highlightjs="gendCode">
          <code class="css">
        </code></pre>
        </div>
    </div>
</template>

<script>
// import { computed } from 'vue';
import dedent from 'dedent';
import {useRoute} from 'vue-router'

export default {
    name: "token-gen",
    data: function () {
        return {
            url: "",
            width: "",
            height: "",
            type: "card",
            names: "",
            x: "",
            y: "",
            code: "",
            route: null,
        }
    },
    mounted: function() {
        var params = Object.fromEntries(new URLSearchParams(location.search));
        for (const [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    },  
    computed: {
        gendCode: function () {
            var result = ["/* region: code-gen'd */", `/* This code was generated on ${location} */`, '', '']
            var cardWidth = this.width / this.x;
            var cardHeight = this.height / this.y;
            var allNames = this.names.split('\n');

            for(var j=0; j < this.y; j++) {
                for(var i=0; i < this.x; i++) {
                    var name = allNames[j*this.x + i];
                    if (typeof(name) == "undefined") {
                        continue;
                    }
                    result.push(dedent`.${name} {
                        background-position:-${cardWidth * i}px -${cardHeight * j}px;
                    }`);
                }
            }

            var form = this.$refs.form;
            if (typeof (form) != "undefined") {
                var data = {}
                for (const [k, v] of Object.entries(this.$data)) {
                    if (typeof (v) != 'undefined' && v != null && v.toString().trim() != '') {
                        console.log(k, v)
                        data[k] = v;
                    }
                }
                var query_string = new URLSearchParams(data).toString()
                console.log("query string", query_string);
                history.pushState({}, null, `${location.pathname}?${query_string}`);
            }


            return result.join('\n\n') +  "\n\n" + dedent`.${ this.type} {
                    display: inline-block;
                    position: relative;
                    width: ${ this.easyRound(this.width / this.x) }px;
                    height: ${ this.easyRound(this.height / this.y) }px;
                    background-image: url('${this.url}');
                }` + "\n\n/* end-region: code-gen'd */"
        }
    },
    methods: {
        easyRound: function(x) {
            return Math.round(x * 100) / 100
        }
    }
}
</script>