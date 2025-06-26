# 🏠 Bangla House - Division-Wise House Demand Visualizer

![Screenshot](https://i.ibb.co/XZV9kmPS/Screenshot-2025-06-26-210240.png)

## 📌 Project Overview

**Bangla House** is a full-stack real estate visualization platform that displays housing demand statistics across various divisions of Bangladesh. It allows users to interact with mock data visualizations including demand percentages, rent averages, and listings versus population charts.

🔗 **Live Site:** [https://banglarent-b3f2d.web.app/](https://banglarent-b3f2d.web.app/)

---

## 🔍 Niche

**Real Estate Visualization** – Designed to help individuals or organizations explore and understand regional rental demand dynamics in Bangladesh.

---

## 🎯 Key Features

- ✅ Division-wise selector dropdown  
- ✅ Dynamic charts (pie/bar) showing:
  - **Housing demand %**
  - **Average rent**
  - **Population vs Listings**
- ✅ Responsive chart-based UI  
- ✅ Uses mock JSON data  
- ✅ Firebase Authentication (optional login features)  
- ✅ Mobile-friendly responsive layout  

---

## 🧩 Technologies Used

### 🚀 Frontend
- **React.js**
- **Tailwind CSS**
- **Chart.js**
- **React Chart.js 2**
- **Firebase (Hosting + Authentication)**

### 🔗 Backend
- **Node.js**
- **Express.js**
- **MongoDB (for data persistence)**
- **CORS & JSON Middleware**
- **Deployed on Vercel**

---

## 🌐 Deployment Details

| Layer         | Platform     | Purpose                        |
|---------------|--------------|--------------------------------|
| **Frontend**  | Firebase     | UI + Authentication            |
| **Backend**   | Vercel       | REST API (CRUD operations)     |
| **Database**  | MongoDB Atlas| Data storage (if connected)    |

---

## 🗂️ JSON Data Sample

```json
[
  {
    "id": 1,
    "division": "Dhaka",
    "demandPercent": 85,
    "avgRent": 15000,
    "population": 8900000,
    "avaiableList": 420,
    "img": "https://i.ibb.co/LhnrCyb9/dhaka1.jpg"
  }
]
