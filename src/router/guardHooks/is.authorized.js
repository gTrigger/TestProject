import store from '../../store';
import ROUTE_NAMES from "../route.names";

const isAuthorized = (to, from, next) => {
    if (JSON.parse(localStorage.getItem('user'))) {
        store.state.auth.user = JSON.parse(localStorage.getItem('user'))
    }

    if (!store.state.auth.user) {
        next({ name: ROUTE_NAMES.LOGIN_PAGE.name });
    } else {
        next();
    }
};

export default isAuthorized;
