# UnuCSS - Unused CSS Detector & Cleaner

A modern web application that helps developers identify and remove unused CSS from their projects. Built with Next.js, React, and advanced CSS analysis tools.

## Overview

UnuCSS is a powerful tool designed to optimize your stylesheets by analyzing your codebase and removing CSS rules that are not being used. This helps reduce file size, improve performance, and maintain cleaner stylesheets.

## Features

✨ **Key Capabilities:**
- **Upload Folder Analysis**: Upload entire project folders for comprehensive CSS analysis
- **Plain Text Cleaning**: Submit HTML, CSS, and JavaScript text directly for quick analysis
- **Visual Results**: Interactive pie charts showing CSS usage statistics
- **Automatic Cleanup**: Remove unused CSS rules with a single click
- **ZIP Download**: Download cleaned CSS files packaged in a ZIP archive
- **Multi-format Support**: Analyze projects with various CSS frameworks and structures
- **Feedback System**: Submit feedback and bug reports directly through the app

## Tech Stack

### Frontend
- **Next.js 13.4** - React framework with App Router
- **React 18.2** - UI library
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Chart.js** - Data visualization for statistics
- **React Dropzone** - File upload handling

### Backend
- **Node.js** - Server runtime
- **PurgeCSS** - Advanced CSS purging engine
- **Cheerio** - HTML parsing and DOM manipulation
- **Mongoose & MongoDB** - Database for feedback and data storage
- **Archiver** - ZIP file creation
- **Axios** - HTTP client

### Build & Development Tools
- **PostCSS** - CSS transformation
- **Autoprefixer** - Vendor prefix automation
- **HTML Minifier** - HTML optimization
- **Gulp** - Task automation

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- MongoDB (for feedback storage)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd unused-css

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with MongoDB connection string if needed
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
unused-css/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── feedback/             # Feedback submission
│   │   ├── formcleaner/          # Text-based CSS cleaning
│   │   └── upload-folder/        # Folder upload and analysis
│   ├── page.js                   # Home page
│   ├── layout.js                 # Root layout
│   ├── globals.css               # Global styles
│   ├── about/                    # About page
│   ├── blogs/                    # Blog page
│   ├── contact/                  # Contact page
│   └── how-it-works/             # How it works guide
├── components/                   # React components
│   ├── DownloadBtn.js            # Download functionality
│   ├── Form.js                   # Text input form
│   ├── UploadFolder.js           # Folder upload component
│   ├── piechart.js               # Statistics visualization
│   ├── navbar.js                 # Navigation bar
│   ├── footer.js                 # Footer component
│   ├── SVG/                      # SVG icon components
│   └── ...                       # Other UI components
├── public/
│   ├── uploads/                  # Temporary file uploads
│   ├── zip/                      # Generated ZIP files
│   └── utils/                    # Utility functions
│       ├── createZip.js          # ZIP file creation
│       ├── handleFolderAndFileTree.js  # File tree processing
│       ├── handlePath.js         # Path utilities
│       └── dataBase.js           # Database operations
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
└── package.json                  # Dependencies
```

## How It Works

### Form Cleaner
1. Users input HTML, CSS, and JavaScript content directly
2. System uses PurgeCSS to analyze and identify unused rules
3. Results are displayed with visual statistics
4. Cleaned CSS can be downloaded

### Folder Upload
1. Users upload entire project folders
2. System scans all HTML, CSS, and JavaScript files
3. Analyzes CSS usage across the entire project
4. Generates cleaned CSS files
5. Provides downloadable ZIP with results

## API Routes

### POST `/api/formcleaner`
**Description**: Cleans CSS from submitted text content

**Request Body**:
```json
{
  "css": "/* CSS content */",
  "html": "<!-- HTML content -->",
  "js": "// JavaScript content"
}
```

**Response**: Cleaned CSS and analysis results

### POST `/api/upload-folder`
**Description**: Analyzes and cleans CSS from uploaded folder

**Request**: FormData with project folder

**Response**: Cleaned CSS files as ZIP

### POST `/api/feedback`
**Description**: Submits user feedback

**Request Body**:
```json
{
  "email": "user@example.com",
  "message": "Feedback message"
}
```

## Configuration

### Tailwind CSS
Configure in `tailwind.config.js` - Includes custom utilities and theme extensions

### PostCSS
Configured in `postcss.config.js` with Autoprefixer and Tailwind support

### Next.js
Configured in `next.config.js` with:
- App Router enabled
- MongoDB support (ESM externals)
- Webpack optimizations
- Top-level await support

## Usage Tips

💡 **Best Practices**:
- For accurate results, include all CSS frameworks and custom stylesheets
- Ensure HTML files contain all possible class/id combinations
- JavaScript frameworks should be included to detect dynamically added classes
- Test cleaned CSS thoroughly before deploying to production
- Use the feedback system to report any issues

## Contributing

Contributions are welcome! Please feel free to:
- Report bugs through the feedback system
- Submit feature requests
- Create pull requests with improvements

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or feedback:
- Use the in-app feedback system
- Check the "How It Works" page for guides
- Visit the Contact page for support options

## Roadmap

Potential future enhancements:
- Batch processing for multiple projects
- Integration with build tools (Webpack, Vite)
- Advanced filtering options
- Performance metrics dashboard
- Team collaboration features
- Cloud storage integration

---

**Made with ❤️ to help developers write cleaner, faster code.**
