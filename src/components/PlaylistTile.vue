<template>

    <li v-if="(result.tracks && result.tracks.total>3 && (result.owner.id == 'l422y'))">
        <figure>
            <a :link="result.external_urls.spotify" target="_blank" @click="$parent.showPlaylist(result)">
                <img v-if="result.images[0]" :src="result.images[0].url" alt="" width="320">
                <img v-else src="http://placekitten.com/320/320" alt="" width="320">
            </a>
            <h3>
                <a :link="result.external_urls.spotify" @click="$parent.showPlaylist(result)" target="_blank">
                    {{result.name}}
                </a>
                <small>{{result.tracks.total}} songs</small>
                <small>by <a :href="result.owner.external_urls.spotify" @click="$parent.showUser(result)">{{result.owner.id}}</a></small>
            </h3>
        </figure>
    </li>
</template>
<script>
    export default {
        name: 'PlaylistTile',
        props: {
            result: [Boolean,Object]
        }
    }
</script>