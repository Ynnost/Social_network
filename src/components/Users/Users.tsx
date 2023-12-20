import React, { useEffect } from "react";
import { UsersPagePropsType } from "./UsersContainer";
import { v1 } from "uuid";
import { UsersAPIType, UsersType } from "../../type";
import axios from "axios";
import { instance } from "../../API/AxiosType";
// import styles from '/users.modules.css'

// const user: UsersType = {
//   usersData: [
//     {
//       id: v1(),
//       photoUrl:
//         "https://sun9-50.userapi.com/impf/c629306/v629306384/27fd4/rGKviIyck30.jpg?size=480x640&quality=96&sign=d54143bfc0916c1f008e9ce4e6e8bec0&type=album",
//       followed: true,
//       fullName: "Denis",
//       status: "I am a boss",
//       location: {
//         citi: "NigNov",
//         country: "Russia",
//       },
//     },
//     {
//       id: v1(),
//       photoUrl:
//         "https://sun9-57.userapi.com/impf/c628224/v628224607/1b057/wQjx45ZP__A.jpg?size=537x807&quality=96&sign=3da18996cd7f7a6f66b603946a2cd10d&type=album",
//       followed: false,
//       fullName: "Ivan",
//       status: "I am a brother",
//       location: {
//         citi: "NigNov",
//         country: "Russha",
//       },
//     },
//     {
//       id: v1(),
//       photoUrl:
//         "https://sun9-70.userapi.com/impf/c857616/v857616413/170246/JpXge6H1S-Q.jpg?size=1310x1749&quality=96&sign=56af971b6f17f53ed29b953cb13f3398&type=album",
//       followed: true,
//       fullName: "Ira",
//       status: "I am a wife",
//       location: {
//         citi: "NigNov",
//         country: "Russha",
//       },
//     },
//     {
//       id: v1(),
//       photoUrl: "",
//       followed: true,
//       fullName: "Any",
//       status: "I am a daughter",
//       location: {
//         citi: "NigNov",
//         country: "Russha",
//       },
//     },
//   ],
// };

const Users: React.FC<UsersPagePropsType> = ({ users, follow, unfollow, setUsers }) => {

  useEffect(() => {
    instance.get("users").then((res) => {
      console.log(res.data.items);
      return setUsers(res.data.items);
    });
  }, []);

  return (
    <div>
      {users.items.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.uniqueUrlName} width="200" height="222" />
            </div>
            <div>
              {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.citi"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

// Транспелятор Babel
