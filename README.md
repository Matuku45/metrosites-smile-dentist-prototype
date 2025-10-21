# metrosites-smile-dentist-prototype

🦷 Smile Dentist – Dental Clinic Website Prototype
Project Overview

The Smile Dentist Dental Clinic Website Prototype is a front-end design project created under the MetroSites Prototype System.

It visually represents the brand identity, professional services, and patient experience of a dental clinic — before full backend development.

The design focuses on trust, cleanliness, accessibility, and modern healthcare design, integrating smooth animations, calming color palettes, and intuitive user flow.

Key Objectives

Present a clean, modern, and professional dental clinic brand interface.

Display services offered — from cleanings to cosmetic dentistry — in a structured way.

Provide an appointment booking form with easy navigation.

Feature patient testimonials for credibility and trust-building.

Ensure responsiveness across all devices (desktop, tablet, mobile).

Demonstrate complete UI/UX workflow with animations and reusable components.

Tech Stack
Category	Tools / Libraries
Frontend Framework	React JS (Vite + TypeScript)
Styling	SCSS (SASS), Tailwind CSS (optional utility support), CSS Modules
UI Components	shadcn/ui, Daisy UI, Lucide Icons
Animations	Framer Motion
Routing	React Router DOM
Form Handling	React Hook Form + Yup (validation)
Version Control	Git & GitHub
Design Mockups	Figma / Adobe XD
Hosting / Deployment	Vercel / Netlify
Utilities	Helper functions, constants, reusable hooks
Primary Color Palette (OKLCH Example)
Color Type	Value
Main	oklch(88.2% 0.059 254.128) (Soft Blue – Trust & Calm)
Secondary	oklch(80.9% 0.105 251.813) (Cool Aqua – Clean & Fresh)
Accent	oklch(95% 0.03 240) (White Tint – Professional Balance)
CTA Gradient	from-sky-400 to-blue-500 (Used for Book Appointment buttons)
Languages Used

TypeScript / JavaScript

HTML5

SCSS (SASS)

Tailwind CSS (utility classes)

Repository Information
Field	Details
Project Name	Smile Dentist – Dental Clinic Website Prototype
Repository Name	metrosites-smile-dentist-prototype
Repository Status	Active / In Development
Version Control	GitHub (Public or Private)
Branching Strategy	main (stable) · dev (testing and updates)
Demo Deployment	Vercel / Netlify
Project Folder Structure
metrosites-smile-dentist-prototype/
│
├── public/                             # Static assets (logos, favicon, images)
│   └── images/
│       ├── services/
│       ├── doctors/
│       ├── testimonials/
│       └── banners/
│
├── src/
│   ├── assets/                         # Custom SCSS files and graphics
│   │   ├── scss/
│   │   │   ├── _variables.scss         # Color & font variables
│   │   │   ├── _mixins.scss            # Reusable SASS mixins
│   │   │   ├── _buttons.scss           # Button styles
│   │   │   ├── _cards.scss             # Card & container design
│   │   │   └── main.scss               # Main imported stylesheet
│   │   └── icons/
│   │
│   ├── components/                     # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── AppointmentForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── SectionHeader.tsx
│   │
│   ├── pages/                          # Main pages
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Appointment.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── routes/                         # React Router configuration
│   │   └── AppRoutes.tsx
│   │
│   ├── styles/                         # Optional Tailwind overrides
│   │   └── globals.css
│   │
│   ├── utils/                          # Helper functions and constants
│   │   ├── colors.ts
│   │   ├── servicesData.ts
│   │   └── testimonialsData.ts
│   │
│   ├── App.tsx                         # Main App container
│   └── main.tsx                        # Root renderer
│
├── package.json                        # Dependencies & project metadata
├── vite.config.ts                      # Vite configuration
├── tailwind.config.js                  # Tailwind + DaisyUI setup
├── tsconfig.json                       # TypeScript configuration
└── README.md                           # Documentation

Component Architecture
Component	Description
Navbar	Top bar with navigation links (Home, Services, Appointment, Testimonials, About). Responsive and animated.
Hero	Hero banner introducing the clinic with tagline, dentist image, and "Book Appointment" CTA.
ServiceCard	Modular cards listing dental services (Cleaning, Whitening, Braces, etc.)
AppointmentForm	Interactive form for scheduling appointments. Includes validation, date picker, and responsive layout.
TestimonialCard	Displays patient testimonials with photos, quotes, and subtle animations.
Footer	Contains contact info, operating hours, map, and social media links.
Button	Gradient CTA buttons styled with SCSS mixins and transitions.
SectionHeader	Reusable heading block for page sections (Services, Testimonials, About, etc.).
Page Flow

Home Page

Hero Section (with CTA)

Service Overview

Testimonials Preview

Appointment Call-to-Action

Services Page

List of Dental Services with icons, descriptions, and pricing (optional).

Appointment Page

Interactive appointment booking form.

Testimonials Page

Gallery of patient testimonials with Framer Motion animations.

About Page

Clinic story, mission, and dentist profiles.

Contact Page

Contact form, Google Map, and clinic information.

Expected Outcome

The Smile Dentist Prototype will:

Present a clean, elegant, and trustworthy interface.

Showcase services and credibility with animations and testimonials.

Offer an intuitive and visually appealing appointment booking flow.

Demonstrate MetroSites’ high design standard and responsive front-end quality.

<img width="560" height="872" alt="image" src="https://github.com/user-attachments/assets/4c521e4f-65fa-4f99-ac58-ef2973a8a1c7" />




