# Smart-Clinic Document Management Portal (Federal Medical Centre Jalingo)

Welcome to the Smart-Clinic web application for Federal Medical Centre Jalingo. This platform is designed to streamline document access, approvals, and communication across various departments with a focus on security, role-based access, and scalability.

---

## 🔗 Project URL

**Live Project**: [https://****]

---

## 🏗️ Tech Stack

This project is developed using the following technologies:

- **Vite** – For fast frontend tooling and build setup
- **React (TypeScript)** – Component-based UI development with type safety
- **Redux Toolkit** – Centralized state management (for handling CMD approvals and document states)
- **ShadCN UI** – Reusable UI components built with Tailwind and Radix UI
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **NextAuth.js (planned)** – For authentication and session handling (if applicable)
- **Node.js** – Required for local development environment

---

## 📁 Project Structure & Role-Based Routes

The application is structured with dedicated routes and dashboard access per user role:

### CMD (Chief Medical Director)
- `/dashboard/cmd`
  - `/departments`
  - `/uploads`
  - `/documents`
  - `/approvals`
  - `/audits`
  - `/settings/profiles`
  - `/settings/notifications`
  - `/settings/accounts`

### HODs (Heads of Departments)
- `/dashboard/hod/:department`
  - `/uploads`
  - `/documents`
  - `/approvals`
  - `/staff`
  - `/settings/...`

### Admin
- `/dashboard/admin/:department`
  - `/uploads`
  - `/documents`
  - `/approvals`
  - `/staff`
  - `/settings/...`

### Super Admin
- `/dashboard/super-admin`
  - `/documents`
  - `/systems`
  - `/uploads`
  - `/reports`
  - `/users/management`
  - `/users/role`
  - `/audits`

### Staff
- `/dashboard/staff/:department`
  - `/uploads`
  - `/documents`
  - `/approvals`
  - `/settings/...`

---

## 👨‍💻 Development Instructions

To edit or run the project locally, follow these steps:

### ✅ Requirements
- Node.js (use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for easy management)

### 🧪 Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project folder
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
