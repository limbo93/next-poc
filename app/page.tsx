'use client';
import { useState, useEffect } from 'react'
import { User } from './model/user.model';

export default function Home() {
  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const list:any[] = [];
  users.forEach((user) => {
    list.push(
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.id}
        </th>
        <td className="px-6 py-4">
          {user.name}
        </td>
        <td className="px-6 py-4">
          {user.phone}
        </td>
        <td className="px-6 py-4">
          {user.email}
        </td>
        <td className="px-6 py-4">
          {user.address?.city}
        </td>
      </tr>);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>

    </main>
  );
}
