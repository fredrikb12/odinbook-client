export const postManager = {
  removePost: async (postId) => {
    const response = await fetch(`https://calm-reef-09249.herokuapp.com/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      mode: "cors",
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  },
  submitPost: async (text) => {
    const response = await fetch("https://calm-reef-09249.herokuapp.com/posts", {
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
    const response = await fetch("https://calm-reef-09249.herokuapp.com/likes", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ postId }),
    });
    const data = await response.json();
    console.log(data);
  },

  unlikePost: async (postId) => {
    const response = await fetch("https://calm-reef-09249.herokuapp.com/likes", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ postId }),
    });
    const data = await response.json();
    console.log(data);
  },

  submitComment: async (postId, commentText) => {
    const response = await fetch("https://calm-reef-09249.herokuapp.com/comments", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ postId, text: commentText }),
    });
    const data = await response.json();
    console.log(data);
  },
};
