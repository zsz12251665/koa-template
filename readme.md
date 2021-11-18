# Koa Template

A Template Repository based on Koa

## Directory Structure

```bash
koa-template
| .env                  # dotenv Configuration (Not Included)
| .env.template         # dotenv Template Configuration
| .eslintrc.json        # ESLint Configuration
| .gitignore            # Git Ignore List
| LICENCE               # Open Source License
| package-lock.json     # NPM Package List
| package.json          # NPM Configuration
| readme.md             # ReadMe Document
| tsconfig.json         # TypeScript Configuration
|
|-- app                 # Server Application
|   | index.ts          # Application Script
|
|-- bin                 # Script Entries
|   | start.ts          # Start the server with the original TypeScript files
|
|-- dist                # Distribution Outputs
|
|-- lib                 # Module Library
|   |
|   |-- conf            # config Module
|   |   | error.ts      # ConfigurationError Class
|   |   | index.ts      # Getter Function Script
|   |   | prefix.ts     # Fallback Prefixes
|   |
|   |-- jwt             # JsonWebToken Module
|   |   | index.ts      # Function Script
|   |   | options.ts    # Sign Options Presets
|   |
|   |-- logger          # Logging Module
|       | index.ts      # Logger Script
|
|-- logs                # Default Log Directory
|
|-- routes              # Application Routers
|   | index.ts          # Root Router
|
|-- static              # Default Static Resources Directory
```
