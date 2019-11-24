const helpers = {
    computed: {
        id() {
            return parseInt(this.$route.params.id);
        },
    },
    methods: {
        navigateToPage(routeName, itemId) {
            this.$router.push({
                name: routeName,
                params: {
                    id: itemId
                }
            });
        },
        navigateToList(routeName) {
            this.$router.push({
                name: routeName,
            });
        }
    }
};

export default helpers;
