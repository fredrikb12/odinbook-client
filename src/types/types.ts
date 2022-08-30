export interface User {
  _id: string;
  name: string;
  friends: Array<any>;
  requests: Array<any>;
  posts: Array<any>;
  picture: string | null;
}

export interface FriendRequest {
  sender: string;
  receiver: string;
  accepted: boolean;
}

export interface RegistrationError {
  param: string;
  msg?: string;
}

export interface IPost {
  _id: string;
  text: string;
  likes: any[];
  comments: any[];
  user: User;
  createdAt: number;
}

export interface IFormData {
  password: string;
  password_confirm: string;
  username: string;
}

export interface IFriendStatusButtonProps {
  req: {
    _id: string;
  };
  currentUser: string | void | null;
  user: User;
  setNeedsUpdate: (value: boolean) => void;
}
