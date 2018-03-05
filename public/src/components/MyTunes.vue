<template>
    <div class="myTunes">
        <h4>Results for {{title}}</h4>
        <div class="row">
            <div class="col-sm-6" id="myTunes">Hack-Tunes
                <li v-for="itune in itunes">
                    <p @click="showDetails(itune)">{{itune.title}}</p>
                </li>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'My-Tunes',
    data () {
        return {
            
        }
    },
    computed: {
        music() {
            return this.$store.state.searchResults
        },

    },
    props: ['title']
}

</script>

<style>
#myTunes{
    background-color: wheat
}

</style>