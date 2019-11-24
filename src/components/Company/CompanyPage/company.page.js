import _ from 'lodash';
import helpers from '../../../mixins/helpers';
import ROUTE_NAMES from "../../../router/route.names";

export default {
    name: 'CompanyPage',
    mixins: [helpers],
    data() {
        return {
        };
    },
    computed: {
        companies() {
            return this.$store.state.company.companies;
        },
        company() {
            return _.find(this.companies, {id: this.id});
        },
    },
    methods: {
        navigateToCompanyList() {
            this.navigateToList(ROUTE_NAMES.COMPANY_LIST.name);
        }
    },
};
