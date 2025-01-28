import React, {useState, useEffect} from 'react'
import './styles/AddEditUserModal.css'

const AddEditUserModal = ({isEditing, userToEdit, onSave, onClose}) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  })

  useEffect(() => {
    if (isEditing && userToEdit) {
      setNewUser({
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        department: userToEdit.department,
      })
    }
  }, [isEditing, userToEdit])

  const handleSave = () => {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.email &&
      newUser.department
    ) {
      onSave(newUser)
      setNewUser({firstName: '', lastName: '', email: '', department: ''})
    } else {
      alert('Please fill all fields.')
    }
  }

  return (
    <div className="modal">
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="First Name"
        value={newUser.firstName}
        onChange={e => setNewUser({...newUser, firstName: e.target.value})}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newUser.lastName}
        onChange={e => setNewUser({...newUser, lastName: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({...newUser, email: e.target.value})}
      />
      <input
        type="text"
        placeholder="Department"
        value={newUser.department}
        onChange={e => setNewUser({...newUser, department: e.target.value})}
      />
      <button onClick={handleSave}>
        {isEditing ? 'Update User' : 'Add User'}
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default AddEditUserModal
