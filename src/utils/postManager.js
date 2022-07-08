export const postManager = {
  removePost: async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      mode: "cors",
    });
    const data = await response.json();
  },
  submitPost: async (text) => {
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ text }),
    });
  },

  likePost: async (postId) => {
    const response = await fetch("http://localhost:3000/likes", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ postId }),
    });
    const data = await response.json();
  },

  unlikePost: async (postId) => {
    const response = await fetch("http://localhost:3000/likes", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ postId }),
    });
    const data = await response.json();
  },

  submitComment: async (postId, commentText) => {
    const response = await fetch("http://localhost:3000/comments", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ postId, text: commentText }),
    });
    const data = await response.json();
  },
};
