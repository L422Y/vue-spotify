const oatoken = "BQCYbx_WTXI4byPciA3uL5YlOP7eeJ8YmAFIuA17_OEcqIKglbr-bHSYKsNHCIlPkgRFyN7bcY7G8oWPv9DnGlWBw5e97xAzC00-lsW9bXzoBLy1cncCiFXzzYgnUwwZvpNObgFDRJY";
Vue.component('playlistsview', {
    template: '#playlists-view',
    props: {
        results: false
    },
    methods: {
        showPlaylist: function(playlist) {
            // TODO: show playlist in browser
        }
    }
});
Vue.component('playlisttile', {
    template: '#playlist-tile',
    props: {
        result: false
    }
});

var app = new Vue({
    el: '#app',
    data: {
        spotifyuser: 'l422y',
        results: false
    },
    // , render: function (createElement) {
    //     // return createElement('div','wegweg');
    //     return createElement('playlistview', {props: {"results": this.results}});
    // }
});


function init() {
    $.ajax({
        // url: 'https://api.spotify.com/v1/users/' + app.spotifyuser + '/playlists',
        url: 'playlists.json',
        // data: {limit: 50,offset:0},
        // headers: {
        //     Authorization: 'Bearer ' + oatoken
        // }
    })
        .then(function (oData) {
            console.log(oData);
            app.results = oData.items;
        });
}

setTimeout(init, 500);