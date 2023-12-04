export type UsersType = {
  users: UsersArrayType[];
};

export type UsersArrayType = {
  id: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: {
    citi: string;
    country: string;
  };
};
