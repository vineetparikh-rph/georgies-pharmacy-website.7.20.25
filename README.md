# Georgies Pharmacy Website

A comprehensive digital pharmacy platform for Georgies Pharmacy Group, serving 4 locations across New Jersey with advanced patient engagement and healthcare technology solutions.

## 🏥 About Georgies Pharmacy

Georgies Pharmacy Group operates four specialized locations:

- **Georgies Family Pharmacy** - 332 W. St. Georges Ave, Linden, NJ
- **Georgies Specialty Pharmacy** - 521 N Wood Ave, Linden, NJ
- **Georgies Parlin Pharmacy** - 499 Ernston Rd, Parlin, NJ
- **Georgies Outpatient Pharmacy** - 6 Earlin Dr, Browns Mills, NJ

## 🚀 Features

### Core Services

- **Prescription Management** - Refills, transfers, and tracking
- **Vaccination Hub** - Comprehensive immunization services
- **Medication Synchronization** - Coordinated prescription management
- **Clinical Services** - Medication therapy management, consultations
- **Online Pharmacy Store** - OTC medications and health products

### Patient Services

- **Multi-location Support** - Seamless service across all locations
- **Real-time Prescription Status** - Live updates and notifications
- **Insurance Verification** - Comprehensive coverage checking
- **Medication Counseling** - Expert pharmaceutical guidance
- **Health Tips Integration** - Personalized wellness recommendations

## 🛠 Technology Stack

### Frontend

- **React 18** with TypeScript for robust development
- **Tailwind CSS** for responsive, modern styling
- **shadcn/ui** component library for consistent UX
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient server state management
- **Vite** for optimized build and development experience

### Backend

- **Express.js** server with TypeScript
- **Drizzle ORM** with PostgreSQL for type-safe database operations
- **Replit Auth** with OpenID Connect for secure authentication
- **External API Integrations** for pharmacy systems and health services

### Deployment

- **Vercel** serverless deployment with global CDN
- **PostgreSQL** database with connection pooling
- **Environment-based configuration** for production/development

## 🏗 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages and routes
│   │   └── hooks/         # Custom React hooks
├── server/                # Express backend application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database interface and operations
│   └── services/          # External service integrations
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema with TypeScript types
└── vercel.json           # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Environment variables (see below)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/georgies-pharmacy.git
cd georgies-pharmacy
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Database
DATABASE_URL=your_postgresql_connection_string

# Authentication
REPLIT_AUTH_SECRET=your_auth_secret
```

4. Start development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production deployment
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The project includes optimized Vercel configuration for:

- Static frontend delivery via CDN
- Serverless API functions
- Automatic HTTPS and custom domain support

### Environment Variables

Set these in your Vercel dashboard:

```bash
DATABASE_URL=your_postgresql_connection_string
REPLIT_AUTH_SECRET=your_auth_secret
NODE_ENV=production
```

## 🏥 External Integrations

### Prescription Services

- **Refill Requests** → `https://georgiesrxtransferrefillvaccine-1.onrender.com/refill`
- **Transfer Requests** → `https://georgiesrxtransferrefillvaccine-1.onrender.com/transfer`
- **Vaccination Scheduling** → `https://georgiesrxtransferrefillvaccine-1.onrender.com/vaccine`

### Authentication

- **User Login/Registration** → `https://georgiesrx.streamlit.app/`

## 🔧 Development Guidelines

### Code Style

- TypeScript for all new code
- Component-based architecture with React functional components
- Tailwind CSS for styling with design system consistency
- Comprehensive error handling and user feedback

### Database Operations

- Use Drizzle ORM for all database interactions
- Type-safe schema definitions in `shared/schema.ts`
- Migrations handled through `npm run db:push`

### API Development

- RESTful endpoints with structured error responses
- Input validation using Zod schemas
- Authentication middleware for protected routes

## 📱 Mobile Responsiveness

- Mobile-first responsive design
- Touch-optimized interfaces
- Progressive web app capabilities
- Cross-device synchronization

## 🔒 Security & Compliance

- HIPAA-compliant data handling
- Secure authentication with session management
- Input sanitization and validation
- Security headers and CORS configuration

## 📞 Support

For technical support or pharmacy services:

- **Website**: https://georgiesrx.com
- **Phone**: Contact your local Georgies Pharmacy location
- **Emergency**: Call 911 for medical emergencies

## 📄 License

This project is proprietary software owned by Georgies Pharmacy Group.

## 🏆 Recognition

Georgies Pharmacy is a JD Power & Associates award recipient, recognized for excellence in pharmacy customer satisfaction and service quality.

---

**Georgies Pharmacy Group** - _Your health, our priority_ 💊
