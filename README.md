# 🌐 Webflow – Fullstack Trello Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.5-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-3b5998?logo=stripe)](https://stripe.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-orange?logo=clerk)](https://clerk.com/)

**Webflow** is a modern, fullstack Trello clone designed to help teams organize workspaces, boards, lists, and cards with activity tracking and advanced member roles — all in one beautifully designed app.  

---

## 🔑 Key Highlights

- End-to-end **fullstack application** built with Next.js 13 and TypeScript  
- Fully responsive, modern **UI powered by Tailwind CSS & Shadcn UI**  
- **Workspace & Organization Management** with member roles  
- Unlimited boards for Pro subscribers via **Stripe subscription**  
- **Activity logs & audit trails** at organization, board, and card level  
- Beautiful **Unsplash API cover images** for boards  

---

## 🌟 Core Features

### Authentication & Organizations
- Sign up / Login via **Clerk** (Email OTP & GitHub OAuth)  
- Create, manage, and switch between **Organizations / Workspaces**  
- Assign roles and permissions for team members  

### Boards
- Create, rename, and delete boards  
- Track **board-specific activity logs**  
- Randomly generated board cover images via **Unsplash API**  
- Board limit per organization (Pro subscription unlocks unlimited boards)  

### Lists
- Create, rename, delete lists  
- Drag & drop reorder or copy lists between boards  

### Cards
- Create, rename, delete cards  
- Add detailed descriptions and assign members  
- Drag & drop reorder or copy cards between lists  
- Card-specific **activity logs**  

### Activity & Audit Logs
- Comprehensive **organization-wide activity log**  
- Track all actions performed by members across boards, lists, and cards  

### Billing & Pro Subscription
- **Stripe Checkout** integration for paid plans  
- Unlock unlimited boards and advanced features for organizations  

### Miscellaneous
- Fully responsive **landing page**  
- MySQL database powered by **Prisma ORM**  
- Security features including rate-limiting and XSS/SQL protections  

---

## 💻 Tech Stack

| Layer                | Technology                                         |
|---------------------|---------------------------------------------------|
| Frontend             | Next.js 13, React, TypeScript                     |
| Styling              | Tailwind CSS, Shadcn UI                           |
| Database             | MySQL                                             |
| ORM                  | Prisma                                            |
| Authentication       | Clerk (Email OTP & GitHub OAuth)                 |
| Payments             | Stripe Checkout                                  |
| APIs                 | Unsplash API for random cover images             |
| Security             | Arcjet for rate limiting & XSS/SQL protection    |

---

## 📸 Screenshots

| Dashboard | Boards | Pro Upgrade |
|-----------|--------|-------------|
| ![Dashboard](./public/screenshots/dashboard.png) | ![Boards](./public/screenshots/boards.png) | ![Pro Upgrade](./public/screenshots/pro-modal.png) |

---

## 🚀 Features in Action

- Workspace Management – Organize teams into workspaces with roles  
- Board Management – Create, customize, and track activity for boards  
- List & Card Reordering – Drag & drop support for quick organization  
- Activity Logs – Real-time logs for boards, lists, and cards  
- Billing – Stripe-powered subscription for unlocking unlimited boards  

---

## 🛠 Installation & Development

> Please refer to project setup instructions in the repository. All configurations use environment variables for **Clerk**, **Stripe**, **MySQL**, and **Unsplash API**.

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

*Built with ❤️ using Next.js, Tailwind CSS, Shadcn UI, Prisma, and Stripe*
