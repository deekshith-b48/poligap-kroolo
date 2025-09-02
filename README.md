# Poligap - AI-Powered Legal Compliance Platform

**Powered by Kroolo**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.16.0-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

Poligap is an advanced AI-powered legal compliance and contract analysis platform that helps organizations ensure regulatory compliance and streamline contract review processes. Built with modern web technologies and enterprise-grade security features.

## 🚀 Features

### Core Functionality
- **📋 Compliance Check**: Upload documents for compliance analysis against multiple standards (HIPAA, GDPR, CCPA, SOX, PCI DSS, ISO 27001, and more)
- **📄 Contract Review**: AI-powered contract analysis with gap identification and suggestions
- **🤖 AI Agents**: Manage and deploy specialized legal AI agents for different compliance scenarios
- **📊 Task Management**: Organize and track compliance and legal tasks with advanced workflow management
- **💬 Interactive Chat**: AI-powered legal assistance and consultation with context-aware responses
- **⚙️ Comprehensive Settings**: Manage compliance standards and platform configurations

### Advanced Features
- **🔍 Enterprise Search**: Powerful search capabilities across documents and knowledge base
- **📈 Analytics Dashboard**: Real-time compliance statistics and policy insights
- **🔐 Role-based Access Control**: Granular permissions and user management
- **🔄 Real-time Collaboration**: Live document editing and team collaboration features
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌐 Multi-platform Integration**: Connect with popular tools like ClickUp, Jira, Zendesk, Gmail, and more

## 🏗️ Technology Stack

### Frontend Architecture
- **Framework**: Next.js 15.3.2 with App Router
- **UI Library**: React 19.0.0 with TypeScript 5.0
- **Styling**: Tailwind CSS 4.0 with custom design system
- **Component Library**: Radix UI primitives with custom components
- **State Management**: Zustand for global state, React Query for server state
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React + React Icons

### Backend & Database
- **Database**: MongoDB 6.16.0 with Mongoose ODM
- **Caching**: Redis (IORedis) for session management and caching
- **Authentication**: PropelAuth + NextAuth.js for secure user management
- **File Storage**: AWS S3 with presigned URLs
- **AI Integration**: Google Gemini API + Portkey AI for advanced language processing

### Development Tools
- **Build Tool**: Next.js with Turbopack support
- **Type Safety**: TypeScript with strict mode
- **Code Quality**: ESLint + Prettier
- **Testing**: Built-in Next.js testing capabilities
- **Package Manager**: npm with lock file for consistent installs

### Deployment & DevOps
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes manifests for different environments (QA, UAT, Production)
- **CI/CD**: GitHub Actions workflows
- **Monitoring**: Built-in logging and error tracking
- **Scaling**: Horizontal Pod Autoscaler (HPA) configurations

## 📁 Project Structure

```
poligap-kroolo-main/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 (app)/             # Main application routes
│   │   │   ├── 📂 ai-agents/     # AI agents management
│   │   │   ├── 📂 chat/          # Interactive chat interface
│   │   │   ├── 📂 compliance/    # Compliance checking tools
│   │   │   ├── 📂 dashboard/     # Analytics dashboard
│   │   │   ├── 📂 knowledge-base/ # Document management
│   │   │   ├── 📂 search/        # Enterprise search
│   │   │   ├── 📂 settings/      # Platform configuration
│   │   │   └── 📂 tasks/         # Task management
│   │   ├── 📂 api/               # API routes and endpoints
│   │   ├── 📂 auth/              # Authentication pages
│   │   ├── 📂 login/             # Login interface
│   │   └── 📄 layout.tsx         # Root layout component
│   ├── 📂 components/            # Reusable UI components
│   │   ├── 📂 ui/                # Base UI components (buttons, forms, etc.)
│   │   ├── 📂 common/            # Shared components
│   │   ├── 📂 auth/              # Authentication components
│   │   ├── 📂 knowledge-base/    # Document-related components
│   │   └── 📂 search/            # Search interface components
│   ├── 📂 lib/                   # Utility libraries and configurations
│   │   ├── 📂 db/                # Database connection and utilities
│   │   ├── 📂 queries/           # Database queries and operations
│   │   ├── 📄 mongodb.ts         # MongoDB connection setup
│   │   ├── 📄 redis.ts           # Redis configuration
│   │   ├── 📄 s3-config.ts       # AWS S3 setup
│   │   └── 📄 gemini-api.ts      # AI API integration
│   ├── 📂 stores/                # Zustand state management
│   │   ├── 📄 auth-store.ts      # Authentication state
│   │   ├── 📄 company-store.ts   # Company/organization state
│   │   ├── 📄 ai-agents-store.tsx # AI agents state
│   │   └── 📄 user-store.ts      # User profile state
│   ├── 📂 models/                # Database models and schemas
│   │   ├── 📄 users.model.ts     # User data model
│   │   ├── 📄 companies.model.ts # Company data model
│   │   ├── 📄 members.model.ts   # Team member model
│   │   └── 📄 feedback.model.ts  # User feedback model
│   ├── 📂 types/                 # TypeScript type definitions
│   ├── 📂 hooks/                 # Custom React hooks
│   ├── 📂 utils/                 # Utility functions and helpers
│   └── 📂 constants/             # Application constants and configurations
├── 📂 public/                    # Static assets
│   ├── 📂 assets/                # Images, icons, and media files
│   └── 📂 fonts/                 # Custom font files
├── 📂 k8s/                       # Kubernetes deployment manifests
│   ├── 📂 prod-enterprise-search-manifest/
│   ├── 📂 qa-enterprise-search-manifest/
│   └── 📂 uat-enterprise-search-manifest/
├── 📄 package.json               # Dependencies and scripts
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 next.config.ts             # Next.js configuration
└── 📄 Dockerfile                 # Docker containerization
```

## 🔧 Key Components & Features

### Authentication System
- **PropelAuth Integration**: Enterprise-grade authentication
- **Role-based Access**: Granular permission system
- **Session Management**: Redis-based session storage
- **Multi-organization Support**: Company-based user isolation

### AI-Powered Features
- **Document Analysis**: Automated compliance checking
- **Contract Review**: Gap analysis and recommendations
- **Interactive Chat**: Context-aware legal assistance
- **Custom AI Agents**: Specialized bots for different compliance needs

### Data Management
- **MongoDB Integration**: Flexible document storage
- **File Upload System**: AWS S3 integration with presigned URLs
- **Real-time Updates**: WebSocket connections for live collaboration
- **Search Capabilities**: Full-text search across documents

### UI/UX Excellence
- **Design System**: Consistent component library
- **Dark/Light Mode**: Theme switching with next-themes
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized loading and caching strategies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- Redis server
- AWS S3 bucket (for file storage)
- Environment variables (see .env.example)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deekshith-b48/poligap-kroolo.git
   cd poligap-kroolo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or with Turbopack for faster builds
   npm run dev:turbo
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/poligap
REDIS_URL=redis://localhost:6379

# Authentication
PROPELAUTH_API_KEY=your_propelauth_api_key
PROPELAUTH_VERIFIER_KEY=your_verifier_key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket-name

# AI Services
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
PORTKEY_API_KEY=your_portkey_api_key

# Application
NODE_ENV=development
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:turbo` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t poligap-kroolo .
```

### Run Container
```bash
docker run -p 3000:3000 --env-file .env.local poligap-kroolo
```

## ☸️ Kubernetes Deployment

The project includes Kubernetes manifests for different environments:

### Deploy to Development
```bash
kubectl apply -f k8s/qa-enterprise-search-manifest/
```

### Deploy to Production
```bash
kubectl apply -f k8s/prod-enterprise-search-manifest/
```

## 🔐 Security Features

- **Data Encryption**: All data encrypted in transit and at rest
- **RBAC**: Role-based access control with granular permissions
- **Input Validation**: Comprehensive validation using Zod schemas
- **CSRF Protection**: Built-in CSRF protection
- **Rate Limiting**: API rate limiting and abuse prevention
- **Audit Logging**: Comprehensive audit trails for compliance

## 📊 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component with optimization
- **Caching Strategy**: Multi-layer caching (Redis, browser, CDN)
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Performance Monitoring**: Built-in performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed by Kroolo. All rights reserved.

## 🆘 Support

For support and questions:
- 📧 Email: support@kroolo.com
- 📖 Documentation: [docs.kroolo.com](https://docs.kroolo.com)
- 🐛 Issues: [GitHub Issues](https://github.com/deekshith-b48/poligap-kroolo/issues)

## 🙏 Acknowledgments

- Built with ❤️ by the Kroolo team
- Powered by Next.js and React
- UI components by Radix UI
- Styling by Tailwind CSS
- AI capabilities by Google Gemini

---

**Made with 💙 by [Kroolo](https://kroolo.com) - Empowering businesses with AI-driven compliance solutions.**