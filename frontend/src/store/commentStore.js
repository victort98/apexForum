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
        }
    }
}