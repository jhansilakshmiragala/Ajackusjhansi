import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddEditUserModal from './components/AddEditUserModal'
import UserTable from './components/UserTable'
import Notification from './components/Notification'
import './styles/App.css'

const UserManagementDashboard = () => {
  const [users, setUsers] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)
  const [notification, setNotification] = useState({message: '', type: ''})

  useEffect(() => {
    // Fetch users from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        setNotification({message: 'Error fetching users', type: 'error'})
      })
  }, [])

  const handleAddUser = newUser => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
        setNotification({message: 'User added successfully', type: 'success'})
      })
      .catch(error => {
        setNotification({message: 'Error adding user', type: 'error'})
      })
  }

  const handleEditUser = updatedUser => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${userToEdit.id}`,
        updatedUser,
      )
      .then(response => {
        setUsers(
          users.map(user => (user.id === userToEdit.id ? response.data : user)),
        )
        setNotification({message: 'User updated successfully', type: 'success'})
      })
      .catch(error => {
        setNotification({message: 'Error updating user', type: 'error'})
      })
  }

  const handleDeleteUser = userId => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId))
        setNotification({message: 'User deleted successfully', type: 'success'})
      })
      .catch(error => {
        setNotification({message: 'Error deleting user', type: 'error'})
      })
  }

  const handleCloseModal = () => {
    setIsEditing(false)
    setUserToEdit(null)
  }

  return (
    <div>
      <h1>User Management Dashboard</h1>

      {/* Notification */}
      <Notification message={notification.message} type={notification.type} />

      {/* Add/Edit User Modal */}
      <AddEditUserModal
        isEditing={isEditing}
        userToEdit={userToEdit}
        onSave={isEditing ? handleEditUser : handleAddUser}
        onClose={handleCloseModal}
      />

      {/* User Table */}
      <UserTable
        users={users}
        onEdit={user => {
          setUserToEdit(user)
          setIsEditing(true)
        }}
        onDelete={handleDeleteUser}
      />
    </div>
  )
}

export default UserManagementDashboard
