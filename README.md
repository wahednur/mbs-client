# 🏢 Building Management System

WSBMS is a professional, full-stack SaaS-based Building Management System designed to streamline operations for real estate developers, landlords, tenants, and building managers. It includes powerful role-based access, user authentication, location-based resource hierarchy, and admin control with secure backend logic using modern web technologies.

---

## ✨ Key Features Implemented

### 🔐 Authentication & Authorization

- JWT-based secure authentication (access token + httpOnly refresh token strategy)
- irebase user observation integrated for real-time frontend auth state
- Role-based access (admin, tenant, user) — both on backend and frontend
- Protected routes with middleware: verifyToken, verifyAdmin

### 📍 Location Module (Cascading Dropdowns)

- Dynamic multi-level location selection: Division → Thana → Area → Road
- Admin panel to create location data with proper validation
- Prevents manual spelling mistakes using structured dropdowns

### 👤 User Module

- User registration, login, and role assignment (admin/user/tenant)
- User password hashing using bcryptjs in a pre-save mongoose hook
- Token generation using custom

### 🧠 Backend API & Modular Architecture

- Express.js REST APIs using modular folder structure (auth, user, location)
- TypeScript with type-safe interfaces (IUser, ILocation)
- MongoDB with Mongoose schema models
- Custom Express middleware for token verification and admin validation

### 🌐 Frontend (React + Axios + React Router DOM)

- Role-based frontend route protection using useRole + useAuth
- Axios interceptors for attaching cookies / Bearer token
- Loading state management and user observer with onAuthStateChanged
- Custom useAxiosSecure() hook with auto logout on 401/403

### 🛠️ Dev Stack

- Frontend: React 19, TypeScript, Axios, TailwindCSS, Firebase
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
- Auth: Firebase + JWT (dual strategy), Cookie + Token
- Tools: React Query, Postman, ESLint, Prettier

---

## 🚀 Technologies Used

### Frontend

- React 19
- React Router DOM 7
- Axios
- Tanstack Query
- Tailwind CSS
- Firebase Authentication
- Framer Motion (for Animations)

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Stripe (optional for real payments)

---

## 🧩 Contributions

- ✅ Designed and implemented both frontend and backend from scratch
- ✅ Built role-based route protection and dynamic location modules
- ✅ Configured secure JWT handling with refresh token via cookie
- ✅ Developed full API system with scalable modular structure
- ✅ Handled user state management and secured access across frontend

---

## 👨‍💻 Author

**Wahed Nur**  
MERN Stack Developer  
[Portfolio](https://wahednur.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/wahednur/)
