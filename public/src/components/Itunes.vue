<template>
        <div class="iTunes">
            <h4>Results for {{title}}</h4>
            <div class="row">
                <div class="col-sm-6" id="iTunes">Hack-Tunes
                    <li v-for="itune in itunes">
                        <p @click="showDetails(itune)">{{itune.title}}</p>
                    </li>
                </div>
            </div>
        </div>
    </template>

    
<script>
    export default {
        name: 'iTunes',
        data() {
            return {

            }
        },
        computed: {
            itunes(){
                return this.$store.state.searchResults
            }
        },
        props:['title']
    }

</script>

<style>
</style>