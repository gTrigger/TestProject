export default {
    login(state, user) {
        state.user = user;
        if (user.rememberMe) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
};
