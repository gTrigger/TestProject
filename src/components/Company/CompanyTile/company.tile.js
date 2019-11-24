import helpers from '../../../mixins/helpers.js';
import ROUTE_NAMES from "../../../router/route.names.js";

export default {
    name: 'CompanyTile',
    mixins: [helpers],
    props: ['company'],
    data() {
        return {};
    },
    computed: {},
    methods: {
        openCompanyPage(company) {
            this.navigateToPage(ROUTE_NAMES.COMPANY_PAGE.name, company.id);
        },
    },
};
