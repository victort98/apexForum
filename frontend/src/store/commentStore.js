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
        async fetchCommentById({ commit }, commentId) {
            let comments = await fetch(`/api/v1/comments/:categoryId/:topicId/${commentId}`);
            comments = await comments.json();
            console.log(`Comments ${commentId}`, comments);
            commit("setComments", comments);
        }
    }
}