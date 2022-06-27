export const postManager = {
  removePost: async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      mode: "cors",
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
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
};
