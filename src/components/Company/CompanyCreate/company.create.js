import helpers from '../../../mixins/helpers';
import ROUTE_NAMES from "../../../router/route.names";

export default {
    name: 'CompanyList',
    mixins: [helpers],
    components: {},
    data() {
        return {
            company: {
                id: null,
                name: null,
                image: 'placeholder.jpg',
                contacts: {
                    phone: null,
                    mail: null,
                    address: null,
                    requisites: {
                        account: null,
                        other: null
                    }
                }
            }
        };
    },
    computed: {
        companies() {
            return this.$store.state.company.companies;
        },
    },
    methods: {
        createNewCompany() {
            this.setNewCompanyId();
            this.$store.dispatch('company/createCompany', this.company).then(() => {
                this.navigateToCompanyPage();
            });
        },

        navigateToCompanyPage() {
            this.navigateToPage(ROUTE_NAMES.COMPANY_PAGE.name, this.company.id)
        },

        setNewCompanyId() {
            this.company.id = this.companies.length;
        }
    },
};
