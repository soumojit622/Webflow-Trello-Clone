# 🌐 Webflow – Fullstack Trello Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.5-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-3b5998?logo=stripe)](https://stripe.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-orange?logo=clerk)](https://clerk.com/)
[![Unsplash](https://img.shields.io/badge/Unsplash-API-lightgrey?logo=unsplash)](https://unsplash.com/)

**Webflow** is a modern, fullstack Trello clone built to help teams collaborate efficiently. Organize **workspaces, boards, lists, and cards** with **activity tracking, member roles**, and advanced **subscription management** – all in a responsive, beautifully designed interface.  

---

## 🔑 Key Highlights

- End-to-end **fullstack application** built with **Next.js 13** and **TypeScript**  
- Fully responsive **UI using Tailwind CSS & Shadcn UI**  
- **Workspaces & Organization Management** with member roles & permissions  
- Unlimited boards for Pro subscribers via **Stripe subscription**  
- Comprehensive **activity & audit logs** for boards, lists, and cards  
- **Unsplash API** integration for stunning board cover images  
- Role-based access and permissions for members  
- Board limit enforcement for free users  

---

## 🌟 Core Features

### 🛡 Authentication & Organizations
- Sign up / Login via **Clerk** (Email OTP & GitHub OAuth)  
- Create and manage **Organizations / Workspaces**  
- Assign member roles (Admin, Member, Viewer)  

### 📋 Boards
- Create, rename, delete boards  
- Track **board-specific activity logs**  
- Random **cover images from Unsplash API**  
- Free vs Pro board limits  

### 🗂 Lists
- Create, rename, delete lists  
- Drag & drop reorder or copy lists  
- Supports multiple lists per board  

### 📝 Cards
- Create, rename, delete cards  
- Add descriptions, assign members, checklists  
- Drag & drop reorder or copy cards  
- **Card-level activity logs**  

### 📊 Activity & Audit Logs
- Comprehensive **organization-wide logs**  
- Track all actions by members (boards, lists, cards, comments)  

### 💳 Billing & Pro Subscription
- Stripe-powered subscription for Pro users  
- Unlock unlimited boards and premium features  

### 🌐 Miscellaneous
- Fully responsive **landing page**  
- Secure with **Arcjet rate-limiting** and XSS/SQL protections  
- MySQL database powered by **Prisma ORM**  

---

## 🛠 Tech Stack

| Layer                | Technology                                         |
|---------------------|---------------------------------------------------|
| Frontend             | ![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=next.js) Next.js 13 + React + TypeScript |
| Styling              | ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.5-blueviolet?logo=tailwind-css) Tailwind CSS & Shadcn UI |
| Database             | ![MySQL](https://img.shields.io/badge/MySQL-8-blue?logo=mysql) MySQL |
| ORM                  | ![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma) Prisma |
| Authentication       | ![Clerk](https://img.shields.io/badge/Clerk-Auth-orange?logo=clerk) Clerk |
| Payments             | ![Stripe](https://img.shields.io/badge/Stripe-Payments-3b5998?logo=stripe) Stripe Checkout |
| Image API            | ![Unsplash](https://img.shields.io/badge/Unsplash-API-lightgrey?logo=unsplash) Unsplash API |
| Security             | ![Arcjet](https://img.shields.io/badge/Arcjet-Security-red) Rate Limiting & XSS/SQL Protection |
| Deployment           | ![Vercel](https://img.shields.io/badge/Vercel-Hosting-black?logo=vercel) Vercel |

---

## 📸 Screenshots

| Dashboard | Boards | Pro Upgrade |
|-----------|--------|-------------|
| ![Dashboard](./public/screenshots/dashboard.png) | ![Boards](./public/screenshots/boards.png) | ![Pro Upgrade](./public/screenshots/pro-modal.png) |

---

## 🚀 Features in Action

- Workspace & board creation with role-based access  
- Drag & drop lists & cards between boards  
- Real-time activity logs for boards, lists, and cards  
- Stripe subscription to unlock premium boards  
- Beautiful Unsplash cover images for boards  

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 💌 Contact

**Soumojit Banerjee** – [soumojitbanerjee22@gmail.com](mailto:soumojitbanerjee22@gmail.com)  
[Portfolio](https://soumojit.vercel.app) | [GitHub](https://github.com/soumojit622) | [LinkedIn](https://www.linkedin.com/in/soumojit-banerjee-4914b3228)

---

*Built with ❤️ using Next.js, Tailwind CSS, Shadcn UI, Prisma, MySQL, and Stripe.*
