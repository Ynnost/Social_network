export type FollowAC = {
  type: "FOLLOW";
  userID: number;
};

export type UnfollowAC = {
  type: "UNFOLLOW";
  userID: number;
};
