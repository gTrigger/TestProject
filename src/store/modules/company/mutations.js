export default {
    createCompany(state, company) {
        let companies = JSON.parse(localStorage.getItem('companies')) || [];
        companies.push(company);
        state.companies.push(company);
        localStorage.setItem('companies', JSON.stringify(companies));
    }
};
