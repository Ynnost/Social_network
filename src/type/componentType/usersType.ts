export type UsersType = {
  items: UsersAPIType[];
};

export type UsersAPIType = {
  name: string;
  id: number;
  uniqueUrlName: string;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
};

