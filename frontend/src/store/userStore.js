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

        async createNewAccount(x, account) {
            console.log("this", account)
            let newAccount = await fetch("/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(account)
            });
            newAccount = await newAccount.json();
            return newAccount;
        },

        async logout({ commit }, user) {
            let res = await fetch("/api/v1/auth/logout", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            res = await res.json();
            console.log("User-logout: ", res)
            commit("setIsLoggedIn", res)
            return res;
        },

        async fetchCurrentUser({ commit }) {
            let user = await fetch("/api/v1/auth/whoami");
            user = await user.json();
            console.log("User ", user);
            commit("setIsLoggedIn", user);
        }
    }
}