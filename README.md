# Product Management App

A React-based Product Management Application that allows users to register, log in, create products, view all products, and access detailed product information. The application integrates with APIs for dynamic data management and includes user authentication with token storage for secure access.

---

## Features

### User Authentication:

- **Register**: Users can create an account by providing their name, username, email, role, and password.
- **Login**: Users can log in with their credentials. A token is generated upon successful login and stored in local storage for authentication.

### Product Management:

- **View Products**: Displays a list of all products with details such as name, price, and description.
- **Product Details**: Click on a product to view detailed information, including the image, tag, description, and price.
- **Create Product**: A form to add new products with fields for name, price, description, and tag.

### API Integration:

- **POST /user/register**: Register a new user.
- **POST /user/login**: Log in and retrieve a token.
- **GET /product/getall**: Fetch all products (requires token authentication).
- **POST /product/create**: Add a new product (requires token authentication).

### Responsive Design:

- Fully responsive layout with a clean, modern design using **Tailwind CSS**.
- Optimized for both desktop and mobile devices.

---

## Technology Stack

- **Frontend**: React, React Router
- **Styling**: Tailwind CSS
- **State Management**: useState (React Hook)
- **API Communication**: Fetch API

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd product-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the port specified by your development server).

---

## API Endpoints

### User Routes:

- **POST /user/register**: Register a new user.
- **POST /user/login**: Authenticate user and return a token.

### Product Routes:

- **GET /product/getall**: Retrieve a list of all products (requires authentication).
- **POST /product/create**: Add a new product (requires authentication).

---

## Folder Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── layout
│   │   │   └── PrivateLayout.jsx
│   │   └── Products.jsx
│   ├── pages
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── DashBoard.jsx
│   │   ├── Create.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
└── tailwind.config.js
```

---

## How to Use

1. **Register an Account**:

   - Go to the registration page and fill out the form with your details.
   - Submit the form to create an account.

2. **Log In**:

   - Navigate to the login page and enter your credentials.
   - On successful login, your token will be saved in local storage.

3. **View Products**:

   - Access the dashboard to view all available products.

4. **Product Details**:

   - Click on any product to view detailed information.

5. **Add a Product**:
   - Go to the create product page and fill out the form with the required information.
   - Submit the form to add the product to the list.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

## Screenshots

### 1. Product List Page

![Product List Screenshot](#)

### 2. Product Details Page

![Product Details Screenshot](#)

### 3. Create Product Page

![Create Product Screenshot](#)
