import React from 'react';

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
          <div>
              <b>{users[0].username}</b> <span>({users[0].email})</span>
          </div>
          <div>
              <b>{users[1].username}</b> <span>({users[1].email})</span>
          </div>
          <div>
              <b>{users[2].username}</b> <span>({users[2].email})</span>
          </div>
      </div>
    );
}

export default UserList;