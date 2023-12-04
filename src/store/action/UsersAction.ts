export const followAC = (userID: string) =>
  ({
    type: "FOLLOW",
    userID,
  } as const);

export const unfollowAC = (userID: string) =>
  ({
    type: "UNFOLLOW",
    userID,
  } as const);
