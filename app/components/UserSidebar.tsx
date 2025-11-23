"use client";
import React, { useEffect, useState } from "react";
import { Users as UsersIcon } from "lucide-react";

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
}

export default function UserSidebar() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPartialEmail = (email: string) => {
    const [username, domain] = email.split("@");
    if (username.length <= 3) {
      return `${username.charAt(0)}***@${domain}`;
    }
    return `${username.slice(0, 3)}***@${domain}`;
  };

  return (
    <aside className="hidden md:block w-64 lg:w-80 shrink-0">
      <div
        className="sticky top-93
       bg-white rounded-xl shadow-md border border-indigo-100 p-4"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
          <UsersIcon className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-bold text-gray-900">Community Writers</h2>
        </div>

        {isLoading ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-500">Loading...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-500">No users found</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {users.map((user) => (
              <div
                key={user._id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {getPartialEmail(user.email)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
