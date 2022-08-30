export interface User {
  _id: string;
  friends: Array<any>;
  requests: Array<any>;
  posts: Array<any>;
}

export interface FriendRequest {
  sender: string;
  receiver: string;
  accepted: boolean;
}
