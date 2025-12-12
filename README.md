# 🧠 Digital Brain  
A full-stack personal knowledge management system that lets you store notes, links, ideas, and tagged content — and share your entire “brain” publicly through a secure hashed link.

---

## ⭐ Features

### 🔐 Authentication
- Secure JWT authentication  
- HTTP-only cookies (protected from XSS)  
- Login, signup, logout, and session validation  

### 📝 Content Management
- Create, read, update, delete content  
- Rich metadata: title, tags, link, type, content  
- Auto-create tags & deduplicate them  

### 🔗 Shareable Public Brain
- Generate a unique hashed public link  
- Share all your saved content with anyone  
- Toggle sharing on/off anytime  
- Anyone with the link can view your brain  

### 🏷 Tag System
- Dynamic tag creation  
- Tags stored separately for future filtering & searching  

### ⚡ Full-Stack Application
- **Backend:** Node.js, Express, TypeScript, MongoDB  
- **Frontend:** React, TypeScript, TailwindCSS  
- Modern, modular, scalable architecture  

---

## 📦 Technologies Used

### **Frontend**
- React  
- TypeScript  
- Vite  
- TailwindCSS  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- TypeScript  
- MongoDB + Mongoose  
- Zod (validation)  
- JWT Authentication  
- Cookies for session storage  

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

* Node.js (LTS recommended)
* npm or yarn
* A MongoDB connection URL (local or cloud like MongoDB Atlas)

---

## ⚙️ Backend Setup

The backend is built with **Node.js, Express, and TypeScript**.

1.  **Navigate to the Backend directory:**
    ```bash
    cd Backend
    ```

2.  **Install dependencies and run the server:**
    ```bash
    npm install
    npm run dev
    ```

3.  **Environment Configuration:**
    Create a file named `.env` in the root of the `Backend/` directory:

    ```env
    MONGO_URL=your_mongodb_url_here
    JWT_SECRET=a_strong_secret_key_for_jwt_signing
    PORT=5000
    ```

> The server will run at: **`http://localhost:5000`**

## 🎨 Frontend Setup

The frontend is built with **React and Vite**.

1.  **Navigate to the Frontend directory:**
    ```bash
    cd ../Frontend
    ```

2.  **Install dependencies and run the client:**
    ```bash
    npm install
    npm run dev
    ```

3.  **Environment Configuration:**
    Create a file named `.env` in the root of the `Frontend/` directory:

    ```env
    VITE_API_URL=http://localhost:5000
    ```

> The client will run at: **`http://localhost:5173`**

---

## 🧪 API Overview

### 🔐 Auth APIs (Routes under `/auth`)

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Register a new user |
| `POST` | `/signin` | Login user & set JWT cookie |
| `POST` | `/signout` | Logout user (clears cookie) |
| `GET` | `/auth-check` | Verify user authentication status |

### 📝 Content APIs (Routes under `/content`)

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/content/create` | Create new content/note |
| `GET` | `/content` | Get all content belonging to the user |
| `PUT` | `/content/update` | Update existing content (Requires ID) |
| `DELETE` | `/content/delete` | Delete content (Requires ID) |

### 🔗 Sharing APIs (Routes under `/share`)

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/share` | Create or remove a share link for specific content |
| `GET` | `/share/:hash` | Get content using the unique share hash |
| `GET` | `/share` | Get a list of all currently shared links by the user |

---

## 🧠 How It Works (High-Level Flow)

1.  **Authentication:** User signs in, and a **JSON Web Token (JWT)** is generated and securely stored in an **HTTP-only cookie**. This cookie is sent automatically with every subsequent API request.
2.  **Content Creation:** User creates notes/content. The system processes the content and automatically generates relevant **tags** for better organization.
3.  **Sharing:** When the user enables sharing for a piece of content, a **unique hash** is generated. Anyone with this hash can view the publicly shared content (their "public brain").
4.  **Security:** Turning the sharing feature off immediately invalidates and removes the public link.

## 🛣️ Roadmap

The following features are planned for future development:

* Search content by tags or keywords for quick retrieval.
* Implement pagination and filtering on content and sharing lists.
* Integrate a Rich Text Editor (e.g., Quill, TinyMCE) for enhanced content formatting.
* Add a Dark Mode toggle for user preference.
* Implement Role-based Access Control (RBAC) for team features.
* Develop Analytics for monitoring shared brain view counts and traffic.

## 📄 License

This project is licensed under the **MIT License**.
👤 Author

Ankit Yadav
GitHub: https://github.com/ankiit29
