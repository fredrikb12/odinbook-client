import React from "react";

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
  post: internalPost;
  setNeedsUpdate: (value: boolean) => void;
}

interface internalPost {
  _id: string;
  text: string;
  likes: any[];
  comments: any[];
  user: User;
  createdAt: number;
}
