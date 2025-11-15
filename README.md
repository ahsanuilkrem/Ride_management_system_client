
# 🚗 Ride Management System — Client Side

Modern ride-booking web application built with React, TypeScript & Tailwind CSS.

🌐 **Live Demo:**
👉 https://ride-management-system-client.vercel.app

---

## 📌 **Project Overview**

This is the **client-side application** of a Ride Management System where users can:

* Book rides easily
* Track drivers
* See live fare calculation
* Manage user profile & ride history

The UI is built to be clean, fast, mobile-friendly, and optimized for a smooth experience similar to popular ride-sharing platforms.

---

## ✨ **Project Features**

🚗 Rider Features
* Smart Ride Request: Location-based pickup and destination selection with autocomplete
* Real-time Fare Calculation: Dynamic pricing based on distance and vehicle type
* Live Ride Tracking: Monitor active rides with real-time status updates
* Ride History: Complete history of past rides with detailed information
* Driver Matching: Automatic driver assignment based on availability and location
* Payment Options: Support for both online and cash payments
🛣️ Driver Features 
* Availability Management: Toggle online/offline status with real-time updates
* Ride Discovery: Browse and filter available ride requests
* Earnings Dashboard: Track daily, weekly, and monthly earnings with analytics
* Active Ride Management: Accept, complete, and manage ongoing rides
* Profile Management: Update driver information and vehicle details
* Performance Analytics: Detailed insights into driving performance
👨‍💼 Admin Features
* Analytics Dashboard: Comprehensive platform statistics and insights
* User Management: Manage riders, drivers, and admin accounts
* Ride Monitoring: Oversee all rides with filtering and search capabilities
* Driver Management: Approve driver applications and manage driver status
* Financial Reports: Revenue tracking and financial analytics
* System Configuration: Platform settings and configuration management

### 🔑 **Authentication**

* User Signup / Login
* JWT-based authentication
* Error handling with toast notifications

### 🚘 **Ride Booking**

* Real-time distance calculation (Haversine formula)
* Live fare estimation
* Pickup & destination input
* Map-based driver tracking (if integrated)

### 💳 **Payments**

* Fare breakdown
* Support for multiple payment options (UPI, Cash, Card — optional)

### 📍 **Location**

* GPS-based location detection
* Live route tracking

### 👤 **User Dashboard**

* Profile
* Ride history
* Manage settings

### 🎨 **User Interface**

* Fully responsive
* Tailwind CSS styling
* Clean UI components (Hero, Highlights, Testimonials, CTA)

---

## 🛠️ **Technology Stack**

### **Frontend**

* **React + TypeScript**
* **Tailwind CSS**
* **React Router**
* **Axios** for API calls
* **React Toastify** for notifications

### **Others**

* Haversine formula for distance calculation
* Vercel for deployment

---

## ⚙️ **Setup Instructions**

### **1️⃣ Clone the repository**

```bash
git https://github.com/ahsanuilkrem/Ride_management_system_client.git
cd ride-management-system-client
```

### **2️⃣ Install dependencies**

```bash
npm install
```

### **3️⃣ Create environment variables**

Create a `.env` file:

```
VITE_API_URL=https://your-api-url.com
VITE_MAP_API_KEY=your-map-key
```

*(Use NEXT_PUBLIC_ if it's a Next.js app.)*

### **4️⃣ Run development server**

```bash
npm run dev
```

App runs at:
👉 `http://localhost:5173` (Vite)
or
👉 `http://localhost:3000` 

---

## 🚀 **Deployment Instructions (Vercel)**

### **1. Install Vercel CLI**

```bash
npm i -g vercel
```

### **2. Deploy**

```bash
vercel
```

### **3. Production deploy**

```bash
vercel --prod
```

Your live URL will look like:



---

## 📂 **Project Structure**

```

src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer, etc.)
│   ├── modules/         # Feature-specific components
│   │   ├── Authentication/  # Login, Register, Google OAuth
│   │   ├── Driver/         # Driver-specific components
│   │   ├── Homepage/       # Landing page sections
│   │   └── admin/        # admin components 
|   └── ui/               # Base UI components (shadcn/ui)
|
├── config/
|             
├── pages/               # Route components
│   ├── Admin/           # Admin dashboard pages
│   ├── Driver/          # Driver dashboard pages
│   ├── Rider/           # Rider dashboard pages
│   └── public/          # Public pages (Home, About, etc.)
├── redux/               # State management
│   ├── features/        # Feature-specific API slices
│   └── store.ts         # Redux store configuration
├── routes/              # Route definitions and sidebar items
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and helpers
├── hooks/               # Custom React hooks
├── context/             # React context providers
├── constants/           # Application constants
└── lib/                 # Third-party library configurations
```

---

## 📝 **Notes**

* The client app is fully API-driven — all ride, auth & user data come from backend APIs.
* Add your real API link before deploying.
* If using maps (Google/Leaflet), ensure API keys are set in `.env`.
* Error handling is already structured for production readiness.

---

## 🤝 **Contributing**

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📄 **License**

MIT License — free to use and modify.

---

If you want, I can also generate:

✅ README badge version
✅ README with screenshots
✅ README with architecture diagram
✅ README tailored for **backend** side

Tell me what you want!
