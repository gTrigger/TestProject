import helpers from '../../../mixins/helpers';
import ROUTE_NAMES from "../../../router/route.names";

export default {
    name: 'LoginPage',
    mixins: [helpers],
    data() {
        return {
            user: {
                login: null,
                password: null,
                rememberMe: false
            }
        }
    },
    methods: {
        onSignInButtonClick() {
            this.$store.dispatch('auth/login', this.user).then(() => {
                this.navigateToCompanyList();
            });
        },
        navigateToCompanyList() {
            this.navigateToList(ROUTE_NAMES.COMPANY_LIST.name);
        }
    }
}
