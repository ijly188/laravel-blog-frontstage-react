<template>
    <div class="index_wrap">
      <h1>Hello this is indexxxxxx</h1>
        <Loading></Loading>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
    },
    computed: {
    },
    destroyed() {  },
}
</script>