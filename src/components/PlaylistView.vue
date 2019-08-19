<template>
    <aside id="playlistview">
        <span v-on:click="closeView" class="closer">&times;</span>
        <h1 v-if="playlist">{{playlist.name}}</h1>
        <ol v-if="tracks">
            <li v-for="track in tracks" v-bind:key="track.id">
                <span class="trackTitle">
                    <a target="_blank" :href="track.track.external_urls.spotify">{{track.track.name}}</a>
                </span>
                <span class="artist" v-for="artist in track.track.artists" v-bind:key="artist.id"><a :href="artist.external_urls.spotify" rel="author">{{artist.name}}</a></span>
            </li>
        </ol>
        <div v-else id="loading">
            Loading...
        </div>
    </aside>
</template>
<script>
    export default {
        name: 'PlaylistView',
        props: {
            playlist: [Object, Boolean],
            tracks: [Array, Object, Boolean],
            // showingPlaylist: [Boolean],
        },
        data: function () {
            return {
            }
        },
        methods: {
            closeView() {
                this.$parent.showingPlaylist =  !this.$parent.showingPlaylist
            }
        }
    }
</script>