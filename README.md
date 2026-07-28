# 🍛 Curry Patta — Luxury Indian Fine Dining Café Website

A production-quality, UI-only web application for **Curry Patta**, a modern luxury café brand where traditional Indian recipes meet contemporary dining aesthetics.

---

## 🎨 Brand Color Palette

- **Primary Green (leafy):** `#4C9A2A`
- **Deep Green:** `#2F6E14`
- **Primary Orange (curry):** `#F0761B`
- **Deep Orange:** `#D94F04`
- **Warm White / Cream (bg):** `#FFF9F2`
- **Charcoal (text):** `#201C1A`
- **Steel Grey:** `#B8BDC2`
- **Gold (luxury accent):** `#D4A94A`
- **Primary Brand Gradient:** `linear-gradient(135deg, #4C9A2A 0%, #F0761B 100%)`

---

## 🚀 Key Features

1. **3D Interactive Hero Canvas:** Built using React Three Fiber (`@react-three/fiber` & `@react-three/drei`), featuring a rotating 3D brass curry bowl, steaming particles, and floating 3D curry leaves with mouse parallax tilt.
2. **Smooth Inertia Scrolling:** Powered by **Lenis** scroll engine for smooth scrolling across all routes.
3. **Scroll-Triggered Animations:** Powered by **Framer Motion** (`whileInView`, staggered reveals, 3D card tilt effects).
4. **Multi-Page Navigation:**
   - **Home:** Full Hero, Brand Story Preview, Signature Dishes, Why Curry Patta, Testimonials Carousel, Gallery Masonry, Reservation CTA, Newsletter.
   - **Menu:** Category tabs, Veg / Non-Veg filter toggle, Search bar, and Item Detail Lightbox Modal.
   - **About:** Brand origin, Chef Sanjeev founder note, and interactive history timeline with animated line.
   - **Gallery:** Full masonry grid with category filter tabs (Food, Ambience, Events) and Lightbox Modal.
   - **Reservation:** Full luxury form with date/time pickers, guest selector, seating preferences, and confirmation state.
   - **Contact:** Café info, opening hours table, social links, contact form, and interactive map embed placeholder.

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **React Router v6**
- **Tailwind CSS v3** (Custom extended theme & gradients)
- **Framer Motion** (Scroll & UI micro-interactions)
- **React Three Fiber + Drei** (3D WebGL hero graphics)
- **Lenis** (Inertia smooth scrolling)
- **Lucide React** (Vector icons)

---

## 💻 Setup & Local Development

1. Clone or navigate to the project directory:
   ```bash
   cd "e:/Programming Jatin/CurryPatta"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the browser at `http://localhost:5173`.

5. Build for production:
   ```bash
   npm run build
   ```
