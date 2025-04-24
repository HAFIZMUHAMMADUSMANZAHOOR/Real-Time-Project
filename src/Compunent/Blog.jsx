import React from 'react';

export default function Blog() {
  const userData = [
    {
      name: "usman",
      email: "usmanburewala",
      roll: "any number"
    },
    {
      name: "bhi awais",
      email: "asdfghjk",
      roll: "qwertyuijnbvcxzxcvbn"
    }
  ];

  return (
    <div>
      <h2>Blog</h2>
      {userData.map((user, index) => (
        <div key={index} className="mb-4 p-2 border rounded">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roll:</strong> {user.roll}</p>
        </div>
      ))}
    </div>
 );
}
