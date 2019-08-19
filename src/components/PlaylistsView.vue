<template>
    <div v-if="results">
        <ul>
            <PlaylistTile v-for="result in results" :result="result" v-bind:key="result.id"></PlaylistTile>
        </ul>
    </div>
    <div v-else id="loading">
        Loading...
    </div>
</template>
<script>
    import PlaylistTile from "./PlaylistTile";

    export default {
        name: 'PlaylistsView',
        components: {PlaylistTile},
        props: {
            results: [Boolean, Array, Object]
        },
        methods: {
                showPlaylist: function (playlist) {
                    this.$parent.playlist = playlist;
                    this.$parent.pv.scrollTop = 0;
                    var self = this;
                    this.$parent.getPlaylist(playlist.id, function (oData) {
                        if (oData.items.length > 0) {
                            // console.log('got', oData);
                            self.$parent.tracks = oData.items;
                            self.$parent.showingPlaylist = true;
                        }
                    })
                }
        }
    }
</script>