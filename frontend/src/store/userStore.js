export const userStore = {

    state: {
        isLoggedIn: null,
        users: null,
        user: null,
    },

    getters: {
        getAdmin: (state) => {
            if(state.isLoggedIn) {
                return state.isLoggedIn.userRole === "admin"
            } else {
                return false;
            }
        },

        getModerator: (state) => {
            if(state.isLoggedIn) {
                return state.isLoggedIn.userRole === "moderator"
            } else {
                return false;
            }
        }
    },

    mutations: {
        setIsLoggedIn(state, loggedIn) {
            state.isLoggedIn = loggedIn
        },

        setUsers(state, users) {
            state.users = users
        },

        setUser(state, user) {
            state.user = user
        }

    },

    actions: {

        async fetchAllUser({ commit }) {
            let users = await fetch("/api/v1/users");
            users = await users.json();
            console.log("Users in store ", users);
            commit("setUsers", users);
        },

        async fetchUserById({ commit }, userId) {
            let user = await fetch(`/api/v1/users/${userId}`);
            user = await user.json();
            console.log(`User by id ${userId}`, user);
            commit("setUser", user)
        },

        async deleteAccount(x, id) {
            console.log("userIdToDelete", id);
            let deleteAccount = await fetch(`/api/v1/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(id)
            });
            deleteAccount = await deleteAccount.json();
            console.log("deleteAccount", deleteAccount)
            return deleteAccount;
        },

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