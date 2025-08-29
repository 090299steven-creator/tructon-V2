# Overview

This is a professional corporate website for Tructon (CONINGEST), a Colombian company specializing in manufacturing precast polyconcrete products with recycled materials. The website showcases their product catalog including manhole covers, industrial grates, urban benches, and infrastructure elements. Built as a modern full-stack web application with React frontend and Express backend, it features a comprehensive contact system for lead generation through sample requests and project quotes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Custom Tructon brand colors (blue, steel, orange) integrated into Tailwind theme

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful JSON API with centralized error handling
- **Validation**: Zod schemas for request validation shared between frontend and backend
- **Storage**: In-memory storage implementation with interface for easy database migration

## Data Storage Solutions
- **Current**: In-memory storage using Maps for development/prototyping
- **Planned**: PostgreSQL with Drizzle ORM (configuration already present)
- **Schema**: Contact submissions table with fields for name, company, email, phone, product category, message type, and timestamps

## Authentication and Authorization
- **Current**: No authentication system implemented
- **Architecture**: Basic user schema defined in Drizzle for future implementation
- **Security**: CORS enabled, JSON parsing middleware, and request logging

## Component Architecture
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Sections**: Hero, Products (categorized), Standards/Compliance, About, Contact, Footer
- **Forms**: Contact form with dual purpose (sample requests vs project quotes)
- **UI Components**: Reusable shadcn/ui components with custom Tructon theming

# External Dependencies

## Core Technologies
- **Database**: Neon PostgreSQL (serverless) with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect and migrations support
- **UI Library**: Radix UI primitives via shadcn/ui for accessible components
- **Validation**: Zod for schema validation and type inference
- **Queries**: TanStack React Query for API state management

## Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **CSS**: Tailwind CSS with PostCSS and Autoprefixer
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

## Third-Party Integrations
- **WhatsApp**: Direct integration button for customer communication
- **Replit**: Development environment plugins for runtime error handling and debugging
- **Image Hosting**: External services (Unsplash, Pixabay) for product and company imagery

## Communication Channels
- **Primary**: Contact form submissions stored in database
- **Secondary**: WhatsApp Business integration for direct messaging
- **Email**: Contact form data collection for follow-up communications