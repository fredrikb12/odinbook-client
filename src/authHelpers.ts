const authAPI = {
  tryLogin: async (): Promise<string | null | undefined> => {
    try {
      const data = await fetch("https://api.odinbook.xyz/auth/success", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      });
      if (data.status === 200) {
        const userData = await data.json();
        if (userData.statusCode === 200) {
          return userData.userId;
        }
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  },
  logout: async (): Promise<null> => {
    try {
      await fetch("https://api.odinbook.xyz/auth/logout", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      });
      return null;
    } catch (e) {
      throw new Error("Something went wrong trying to log out");
    }
  },
  getCurrentUser: async (): Promise<null | string> => {
    try {
      const data = await fetch("https://api.odinbook.xyz/auth/success", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      });
      const userData = await data.json();
      return userData.userId;
    } catch (e) {
      return null;
    }
  },
};

export default authAPI;
