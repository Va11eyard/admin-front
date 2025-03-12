<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"

import { useState, useEffect } from "react"
import UserList from "../components/Users/UserList"
import UserCard from "../components/Users/UserCard"
import UserForm from "../components/Users/UserForm"
import { getUsers, createUser, updateUser, deleteUser } from "../services/users"

interface User {
  id: number
  email: string
  is_active: boolean
  role: string
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers()
      setUsers(fetchedUsers as User[])
    } catch (error) {
      console.error("Failed to fetch users:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleCreateUser = async (userData: Omit<User, "id">) => {
    try {
      await createUser(userData)
      fetchUsers()
      setIsFormOpen(false)
    } catch (error) {
      console.error("Failed to create user:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleUpdateUser = async (userId: number, userData: Partial<User>) => {
    try {
      await updateUser(userId, userData)
      fetchUsers()
      setIsFormOpen(false)
      setSelectedUser(null)
    } catch (error) {
      console.error("Failed to update user:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId)
      fetchUsers()
      setSelectedUser(null)
    } catch (error) {
      console.error("Failed to delete user:", error)
      // Handle error (e.g., show error message to user)
    }
  }
=======
=======
// /src/pages/UsersPage.tsx
>>>>>>> d386ccf (Нужен бэк для users and companies)
import React, { useState, useEffect } from "react";
import UserList from "../components/Users/UserList";
import UserCard from "../components/Users/UserCard";
import UserForm from "../components/Users/UserForm";
import { getUsers, createUser, updateUser, deleteUser } from "../services/users";
<<<<<<< HEAD
=======
import Layout from "../components/Layout/Layout";
>>>>>>> d386ccf (Нужен бэк для users and companies)

interface User {
  id: number;
  email: string;
  is_active: boolean;
  role: string;
}

<<<<<<< HEAD
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
<<<<<<< HEAD
    } catch (error: any) {
      console.error("Failed to fetch users:", error);
      setError(error.message);
    }
  };

  const handleCreateUser = async (userData: Omit<User, "id">) => {
=======
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleCreateUser = async (userData: Omit<User, "id"> & { password?: string }) => {
>>>>>>> d386ccf (Нужен бэк для users and companies)
    try {
      await createUser(userData);
      fetchUsers();
      setIsFormOpen(false);
<<<<<<< HEAD
    } catch (error: any) {
      console.error("Failed to create user:", error);
      setError(error.message);
=======
    } catch (err: any) {
      setError(err.message);
>>>>>>> d386ccf (Нужен бэк для users and companies)
    }
  };

  const handleUpdateUser = async (userId: number, userData: Partial<User>) => {
    try {
      await updateUser(userId, userData);
      fetchUsers();
      setIsFormOpen(false);
      setSelectedUser(null);
<<<<<<< HEAD
    } catch (error: any) {
      console.error("Failed to update user:", error);
      setError(error.message);
=======
    } catch (err: any) {
      setError(err.message);
>>>>>>> d386ccf (Нужен бэк для users and companies)
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      fetchUsers();
      setSelectedUser(null);
<<<<<<< HEAD
    } catch (error: any) {
      console.error("Failed to delete user:", error);
      setError(error.message);
    }
  };
>>>>>>> 74c1c3e (fixes)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
<<<<<<< HEAD
=======
      {error && <p className="text-red-500">{error}</p>}
>>>>>>> 74c1c3e (fixes)
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setIsFormOpen(true)}
      >
        Add New User
      </button>
      <div className="flex">
        <div className="w-2/3 pr-4">
          <UserList users={users} onSelectUser={setSelectedUser} />
        </div>
        <div className="w-1/3">
          {selectedUser && (
            <UserCard
              user={selectedUser}
              onEdit={() => setIsFormOpen(true)}
              onDelete={() => handleDeleteUser(selectedUser.id)}
            />
          )}
        </div>
      </div>
      {isFormOpen && (
        <UserForm
          user={selectedUser || undefined}
          onSubmit={(userData) => {
            if (selectedUser) {
<<<<<<< HEAD
              handleUpdateUser(selectedUser.id, userData)
            } else {
              handleCreateUser(userData)
            }
          }}
          onCancel={() => {
            setIsFormOpen(false)
            setSelectedUser(null)
=======
              handleUpdateUser(selectedUser.id, userData);
            } else {
              handleCreateUser(userData);
            }
          }}
          onCancel={() => {
            setIsFormOpen(false);
            setSelectedUser(null);
>>>>>>> 74c1c3e (fixes)
          }}
        />
      )}
    </div>
<<<<<<< HEAD
  )
}

export default UsersPage

=======
=======
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
      <Layout>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {error && <p className="text-red-500">{error}</p>}
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => {
              setIsFormOpen(true);
              setSelectedUser(null);
            }}
        >
          Add New User
        </button>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <UserList users={users} onSelectUser={handleSelectUser} />
          </div>
          <div className="md:w-1/3">
            {selectedUser && (
                <UserCard user={selectedUser} onEdit={() => setIsFormOpen(true)} onDelete={() => handleDeleteUser(selectedUser.id)} />
            )}
          </div>
        </div>
        {isFormOpen && (
            <UserForm
                user={selectedUser || undefined}
                onSubmit={(userData) => {
                  if (selectedUser) {
                    handleUpdateUser(selectedUser.id, userData);
                  } else {
                    handleCreateUser(userData as Omit<User, "id"> & { password?: string });
                  }
                }}
                onCancel={() => {
                  setIsFormOpen(false);
                  setSelectedUser(null);
                }}
            />
        )}
      </Layout>
>>>>>>> d386ccf (Нужен бэк для users and companies)
  );
};

export default UsersPage;
<<<<<<< HEAD
>>>>>>> 74c1c3e (fixes)
=======
>>>>>>> d386ccf (Нужен бэк для users and companies)
