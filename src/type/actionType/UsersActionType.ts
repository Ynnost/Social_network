export type FollowAC = {
  type: "FOLLOW";
  userID: string;
};

export type UnfollowAC = {
  type: "UNFOLLOW";
  userID: string;
};
