import helpers from '../../../mixins/helpers';
import CompanyTile from '../CompanyTile/CompanyTile';
import ROUTE_NAMES from "../../../router/route.names";

export default {
    name: 'CompanyList',
    mixins: [helpers],
    components: {
        CompanyTile
    },
    data() {
        return {};
    },
    computed: {
        companies() {
            return this.$store.state.company.companies;
        },
    },
    methods: {
        createNewCompany() {
            this.navigateToPage(ROUTE_NAMES.COMPANY_CREATE.name);
        }
    },
};
