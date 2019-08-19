<template>
    <div id="app">
        <div class="container" v-bind:class="{ showPlaylist: showingPlaylist }">
            <PlaylistsView :results="results"></PlaylistsView>
            <PlaylistView :tracks="tracks" :playlist="playlist" :showingPlaylist="showingPlaylist"></PlaylistView>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import PlaylistsView from './components/PlaylistsView.vue'
    import PlaylistView from './components/PlaylistView.vue'

    export default {
        name: 'app',
        data: () => {
            return {
                oatoken: "BQD---eVMmc2d1nO_TCu_FFl4c_Ip_6dlKU-i0VswL0gBj-7bo7B0dj6TPGHb24oyV1xJG9sUSfo-McwKYInQGsZz1e_Fs92pD-QshF3KsPQJQUIy2PIs7Fa2JHKGb4wHb8hlKtogt0",
                spotifyuser: 'l422y',
                showingPlaylist: false,
                playlist: {},
                results: {
                    default: false
                },
                tracks: {},
                pv: {}
            }
        },
        components: {
            PlaylistsView,
            PlaylistView,
        },
        mounted: function () {
            var vm = this;
            this.pv = this.$el.querySelector("aside#playlistview");
            this.spotifyapi(
                '/users/' + this.spotifyuser + '/playlists',
                {limit: 50, offset: 0}
            )
                .then(function (oData) {
                    console.log('playlists', oData);
                    vm.results = oData.items;
                });
        },
        methods: {
            spotifyapi(path, data, cb) {
                return axios.get('https://api.spotify.com/v1' + path, {
                    params: data,
                    headers: {
                        Authorization: 'Bearer ' + this.oatoken
                    }
                }).then(function (res) {
                    var oData = res.data;
                    if (cb) cb(oData);
                    return oData;
                })
            },
            getPlaylist(id, cb) {
                this.spotifyapi(
                    '/playlists/' + id + '/tracks', {}, cb
                ).then(function (oData) {
                    // console.log('tracks', oData);
                    if (cb) cb(oData);
                });
            }
        }
    }

</script>

