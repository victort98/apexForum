export const userStore = {

    state: {
        isLoggedIn: null
    },

    mutations: {
        setIsLoggedIn(state, loggedIn) {
            state.isLoggedIn = loggedIn
        }
    },

    actions: {
        async login({ commit }, credentials){
            let user = await fetch("/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });
            user = await user.json();
            console.log("User ", user);
            if(!user){
                console.log("Something went wrong");
            }
            commit("setIsLoggedIn", user)
            return user;
        },

        async logout({ commit }) {
            let res = await fetch("/api/v1/auth/logout");
            res = await res.json();
            console.log("logged out", res);
            commit("setIsLoggedIn", null);
        },

        async fetchCurrentUser({ commit }) {
            let user = await fetch("/api/v1/auth/whoami");
            user = await user.json();
            console.log("User ", user);
            commit("setIsLoggedIn", user);
        }
    }
}