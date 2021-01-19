import React from 'react';


function User({user}) {
    return (
      <div>
          <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@gmail.com'
        },
        {
            id: 3,
            username: 'minjun',
            email: 'shsha4@gmail.com'
        }
    ];
    return(
      <div>
          {users.map((user, index) =>
              <User user={user} key={index} />
          )}
      </div>
    );
}

export default UserList;