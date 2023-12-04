export type ProfileType = {
  post: PostType[];
  newPostText: string;
};

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};