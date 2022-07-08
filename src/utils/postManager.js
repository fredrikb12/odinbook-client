export const postManager = {
  removePost: async (postId) => {
    const response = await fetch(`https://api.odinbook.xyz/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      mode: "cors",
    });
    const data = await response.json();
  },
  submitPost: async (text) => {
    const response = await fetch("https://api.odinbook.xyz/posts", {
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
    const response = await fetch("https://api.odinbook.xyz/likes", {
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
    const response = await fetch("https://api.odinbook.xyz/likes", {
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
    const response = await fetch("https://api.odinbook.xyz/comments", {
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
