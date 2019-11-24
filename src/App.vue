<template>
    <div id="app">
        <app-layout/>
    </div>
</template>

<script>
    import AppLayout from './components/Layout/Main/Main.vue';

    export default {
        name: 'App',
        components: {
            AppLayout,
        },
        mounted() {
            this.$store.state.company.companies = this.$store.state.company.companies.concat(JSON.parse(localStorage.getItem('companies')));
        }
    }
</script>
