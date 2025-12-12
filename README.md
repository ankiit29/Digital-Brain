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

## 📁 Project Structure
Digital-Brain/
│
├── Backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── schemas/
│ │ └── utils/
│ ├── package.json
│ └── tsconfig.json
│
└── Frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ └── utils/
├── package.json
└── vite.config.ts


---

## ⚙️ Backend Setup

```bash
cd Backend
npm install
npm run dev

Create .env file in Backend:
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key


Backend runs at:

http://localhost:5000

🎨 Frontend Setup
cd Frontend
npm install
npm run dev

Create .env file in Frontend:
VITE_API_URL=http://localhost:5000


Frontend runs at:

http://localhost:5173

🧪 API Overview
🔐 Auth APIs
Method	Route	Description
POST	/signup	Register new user
POST	/signin	Login user & set JWT cookie
POST	/signout	Logout user
GET	/auth-check	Verify user authentication
📝 Content APIs
Method	Route	Description
POST	/content/create	Create new content
GET	/content	Get all user content
PUT	/content/update	Update existing content
DELETE	/content/delete	Delete content
🔗 Sharing APIs
Method	Route	Description
POST	/share	Create/remove share link
GET	/share/:hash	Get shared content
GET	/share	Get all shared links
🧠 How It Works (High-Level Flow)

User signs in → JWT stored in HTTP-only cookie

User creates notes/content → tags created automatically

User enables sharing → unique hash generated

Anyone with the hash can view their public brain

Turning sharing off removes the link

🛣️ Roadmap

 Search content by tags or keywords

 Pagination and filtering

 Rich text editor

 Dark mode

 Role-based access

 Analytics for shared brain views

📄 License

MIT License

👤 Author

Ankit Yadav
GitHub: https://github.com/ankiit29
