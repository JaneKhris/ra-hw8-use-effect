import React from "react";

interface ListProps {
  users: IUser[];
  handleClick: (e:React.MouseEvent<HTMLDivElement>) => void
}

export interface IUser {
  id: number;
  name: string;
}

function List(props: ListProps) {

  return (
    <div className="list">
      {props.users.map((user) => (
        <div className="user" user-id = {user.id} key={user.id} onClick={props.handleClick}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default List;
