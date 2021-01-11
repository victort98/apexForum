export const commentStore = {
    state: {
        comments: null
    },

    mutations: {
        setComments(state, comments) {
            state.comments = comments
        }
    },

    actions: {
        async fetchCommentById({ commit }, topicId) {
            let comments = await fetch(`/api/v1/comments/:categoryId/${topicId}`);
            comments = await comments.json();
            console.log(`Comments ${topicId}`, comments);
            commit("setComments", comments);
        },

        async postNewReply(x, reply) {
            console.log("reply", reply)
            let newReply = await fetch("/api/v1/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reply)
            });
            newReply = await newReply.json();
            return newReply;
        }
    }
}