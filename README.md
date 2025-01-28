# User Management Dashboard

This is a simple **User Management Dashboard** built with **React**. The application allows users to:

- **View** the list of users.
- **Add** new users.
- **Edit** existing user details.
- **Delete** users.
- It supports fields such as **ID**, **First Name**, **Last Name**, **Email**, and **Department**.

### Features
- A table displaying users with their **ID**, **First Name**, **Last Name**, **Email**, and **Department**.
- **Add/Edit User** modal to add new users or update existing users.
- **Notification** component to show success/error messages based on the actions performed.

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the components.

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git

2. Install dependencies:

Navigate to the project folder and install the necessary dependencies:
cd project-folder
npm install

3. Start the development server:

Run the following command to start the development server:
npm start
This will start the app on http://localhost:3000.

Components Breakdown
1. AddEditUserModal.js:
This component is responsible for displaying the modal form where users can add or edit their details.

2. UserTable.js:
This component is responsible for displaying a table of users. It includes options to edit or delete a user.

3. Notification.js:
A component that displays notifications based on actions performed (e.g., user added, updated, or deleted).


Example API (Using JSONPlaceholder)
For simplicity, this project uses the JSONPlaceholder API to fetch, add, update, and delete users. The API is used to simulate real-world data handling:

GET https://jsonplaceholder.typicode.com/users: Fetch all users.
POST https://jsonplaceholder.typicode.com/users: Add a new user.
PUT https://jsonplaceholder.typicode.com/users/{id}: Update an existing user.
DELETE https://jsonplaceholder.typicode.com/users/{id}: Delete a user.

Additional Notes
>> The application uses React hooks (useState, useEffect) to manage state and side effects.
>> Axios is used for making API requests and handling responses.
>> Styling is done using CSS in separate files for each component to maintain modularity.# assignAjackus
