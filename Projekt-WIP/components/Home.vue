<template>
    <h3>9</h3>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Home',
        async created() {
            const response = await axios.get('user');

            console.log(response);
        }
    }
</script>
