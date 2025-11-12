# ⌨️ VS Code Shortcuts Bootcamp

Interactive web application to learn VS Code keyboard shortcuts and Git commands, specifically designed for full-stack development bootcamp students.

![VS Code Shortcuts Bootcamp](https://img.shields.io/badge/React-18.2.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)
![i18n](https://img.shields.io/badge/i18n-Bilingual-green)
![License](https://img.shields.io/badge/License-UNLICENSED-red)

## 🌟 Features

### Core Functionality
- **122 VS Code Shortcuts** - Organized in 10 categories
- **51 Git Commands** - Essential commands for version control
- **Real-time Search** - Find shortcuts instantly
- **Category Filters** - Browse by functionality
- **OS Toggle** - Switch between Windows and Mac shortcuts

### Interactive Features
- ⭐ **Favorites System** - Mark your most-used shortcuts
- ✅ **Progress Tracking** - Track what you've learned
- 🎮 **Practice Mode** - Test your knowledge interactively
- 📊 **Statistics** - View your learning progress

### Customization
- 🌐 **Bilingual** - Full support for English and Spanish
- 🌑 **Dark Theme** - Professional dark mode interface
- 💾 **Local Storage** - Your preferences persist
- 🔄 **Smart Sorting** - Shortcuts sorted by relevance by default

### Design
- 📱 **Responsive** - Works on mobile, tablet, and desktop
- ⚡ **Fast** - Built with Vite for optimal performance
- 🎨 **Bootstrap 5.3** - Professional, clean design

## 🌍 Languages

- 🇬🇧 **English** (default)
- 🇪🇸 **Spanish**

The interface automatically detects your browser language and switches between English and Spanish. You can manually change the language using the language switcher in the header.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- A code editor (VS Code recommended!)

### Installation

```bash
# Clone the repository
git clone https://github.com/MiguelToyasP/vscode-shortcuts-bootcamp.git

# Navigate to the project directory
cd vscode-shortcuts-bootcamp

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The production files will be in the `dist/` directory.

## 📦 Tech Stack

### Frontend
- **React 18** - Modern UI library with Hooks
- **Vite** - Next-generation frontend tooling
- **Bootstrap 5.3** - CSS framework with dark mode support
- **Bootstrap Icons** - Icon library

### Internationalization
- **react-i18next** - React integration for i18next
- **i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Language detection

### Storage
- **LocalStorage API** - Client-side data persistence

## 🎯 How to Use

### For Students

#### 1️⃣ **Learn Shortcuts**
- Browse through all 122 VS Code shortcuts
- Switch between Windows and Mac mode
- Search for specific shortcuts
- Filter by category (Essentials, Editing, Navigation, etc.)

#### 2️⃣ **Track Your Progress**
- Mark shortcuts as **Favorites** ⭐ for quick access
- Mark shortcuts as **Learned** ✅ to track progress
- View statistics showing your learning progress

#### 3️⃣ **Practice**
- Enter Practice Mode to test your knowledge
- Answer random questions about shortcuts
- Get instant feedback
- Track your accuracy percentage

#### 4️⃣ **Master Git**
- Learn 51 essential Git commands
- Organized in 7 categories
- Follow the recommended workflow
- Real command examples

### For Instructors

This application is perfect for:
- **Teaching** - Use as a reference during bootcamp classes
- **Homework** - Assign students to learn specific shortcuts
- **Evaluation** - Check progress via Practice Mode statistics
- **Code Examples** - Show students a real React + Bootstrap project

## 📂 Project Structure

```
vscode-shortcuts-bootcamp/
├── src/
│   ├── components/           # React components
│   │   ├── Layout.jsx        # Main layout with navigation
│   │   ├── shortcuts/        # Shortcuts-related components
│   │   │   ├── ShortcutCard.jsx
│   │   │   └── filters/      # Filter components
│   │   │       ├── SearchBar.jsx
│   │   │       ├── FilterControls.jsx
│   │   │       ├── CategoryFilters.jsx
│   │   │       └── ActiveFilters.jsx
│   │   ├── git/              # Git commands components
│   │   │   ├── GitCommand.jsx
│   │   │   └── GitWorkflow.jsx
│   │   └── practice/         # Practice mode components
│   │       └── PracticeQuestion.jsx
│   ├── context/              # React Context
│   │   └── AppContext.jsx    # Global state management
│   ├── data/                 # Data files
│   │   ├── shortcutsData.js  # All VS Code shortcuts
│   │   └── gitData.js        # All Git commands
│   ├── hooks/                # Custom React hooks
│   │   ├── useShortcutsFilter.js
│   │   └── usePractice.js
│   ├── i18n/                 # Internationalization
│   │   ├── config.js         # i18next configuration
│   │   └── locales/
│   │       ├── en/
│   │       │   └── translation.json
│   │       └── es/
│   │           └── translation.json
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Shortcuts.jsx
│   │   ├── Git.jsx
│   │   └── Practice.jsx
│   ├── styles/               # CSS files
│   │   └── main.css          # Unified styles
│   ├── utils/                # Utility functions
│   │   └── categoryIcons.js  # Category icon mappings
│   ├── App.jsx               # Main App component
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization

### Adding New Shortcuts

Edit `src/data/shortcutsData.js` and add to the `shortcutsData` array:

```javascript
{
  id: 'myShortcut-category',
  action: 'myShortcut',
  windows: 'Ctrl+Alt+N',
  mac: '⌥⌘N',
  category: 'category',
  relevance: 5  // 1-10, higher = more important
}
```

Then add translations to both translation files in `src/i18n/locales/`:

```json
{
  "shortcuts": {
    "myShortcut": "My New Shortcut"
  },
  "descriptions": {
    "myShortcut": "Description of what it does"
  }
}
```

### Adding New Git Commands

Edit `src/data/gitData.js` and add to the appropriate category in `gitCommands`:

```javascript
{
  command: 'git my-command',
  desc: 'myCommand'
}
```

Add translation to `src/i18n/locales/en/translation.json` and `es/translation.json`:

```json
{
  "git": {
    "descriptions": {
      "myCommand": "Description of the command"
    }
  }
}
```

### Customizing Styles

Edit `src/styles/main.css` to customize the appearance. The app uses Bootstrap 5.3 with dark theme enabled by default in `index.html`:

```html
<html lang="en" data-bs-theme="dark">
```

### Adding New Categories

1. Add the category to `src/data/shortcutsData.js` in the `categories` array
2. Add translations for the category in both language files
3. Add a category icon in `src/utils/categoryIcons.js`

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Done! Your site is live.

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Other Platforms

The `dist/` folder contains static files that can be hosted anywhere:
- AWS S3
- Firebase Hosting
- Surge
- Render

## 📊 Data Sources

All shortcuts and commands are based on official documentation:
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)
- [Git Documentation](https://git-scm.com/doc)

## 🤝 Contributing

This is an educational project for bootcamp students. Contributions are welcome!

### How to Contribute

We've made it easy to contribute! There are several ways to help improve this project:

#### 🐛 Report a Bug

Found a bug? Help us fix it!

1. Go to the [Bug Report template](https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=bug&template=bug_report.md)
2. Fill in the details about the bug
3. Submit the issue

#### 💡 Suggest an Improvement

Have an idea for a new feature or enhancement?

1. Go to the [Feature Request template](https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=enhancement&template=feature_request.md)
2. Describe your idea
3. Submit the issue

#### 🔧 Submit Code Changes

Want to contribute code directly?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Ideas for Contributions

- 📝 Add more shortcuts
- 🔧 Add more Git commands
- 🌐 Improve translations
- 🗣️ Add more languages (French, German, Portuguese, etc.)
- 🎨 Improve UI/UX
- ⌨️ Add keyboard shortcut testing
- 📄 Add export functionality (PDF, print)
- 🎮 Enhance practice mode
- 📊 Add more statistics and analytics

## 📝 License

**UNLICENSED** - All Rights Reserved

© 2025 Miguel Toyas Pernichi. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software, via any medium, is strictly prohibited.

## 👨‍💻 Author

**Miguel Toyas Pernichi**
- Full Stack Development Bootcamp Instructor
- GitHub: [@mitoperni](https://github.com/mitoperni)
- LinkedIn: [Miguel Toyas Pernichi](https://www.linkedin.com/in/migueltoyaspernichi/)

## 🙏 Acknowledgments

- [VS Code](https://code.visualstudio.com/) - For the amazing editor
- [Bootstrap](https://getbootstrap.com/) - For the CSS framework
- [React](https://react.dev/) - For the UI library
- [Vite](https://vitejs.dev/) - For the build tool
- [i18next](https://www.i18next.com/) - For internationalization

## 📞 Support

If you have questions or need help:

1. Check this README first
2. Look at the code comments
3. [Report a bug](https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=bug&template=bug_report.md) or [suggest an improvement](https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=enhancement&template=feature_request.md)
4. Browse existing [GitHub Issues](https://github.com/mitoperni/vscode-shortcuts/issues)
5. Contact the author via [GitHub](https://github.com/mitoperni) or [LinkedIn](https://www.linkedin.com/in/migueltoyaspernichi/)

## 🎓 Educational Value

### What Students Learn

#### Using the App:
- VS Code productivity shortcuts
- Git version control commands
- Efficient workflow practices

#### Analyzing the Code:
- React Hooks (useState, useEffect, useMemo)
- Context API for global state management
- Custom hooks for business logic
- LocalStorage API with lazy initialization
- React Router v6 for navigation
- i18next internationalization
- Bootstrap 5.3 with dark mode
- Responsive design
- Component-based architecture
- Separation of concerns (data, logic, UI)

## 💡 Tips for Students

1. **Start with Essentials** - Learn the 10 essential shortcuts first
2. **Practice Daily** - Consistency is key to muscle memory
3. **Use Practice Mode** - Test yourself regularly
4. **Track Progress** - Mark shortcuts as learned
5. **Customize** - Mark favorites for quick reference
6. **Git Workflow** - Follow the recommended workflow section

## 🐛 Known Issues

None at the moment! Report bugs via GitHub Issues.

## 🔮 Future Enhancements

Potential features for future versions:
- [ ] Export progress to PDF
- [ ] Keyboard shortcut tester (press keys to verify)
- [ ] More languages (French, German, Portuguese)
- [ ] Spaced repetition algorithm
- [ ] Social sharing features
- [ ] Leaderboard (optional backend)
- [ ] VS Code themes preview
- [ ] Extension recommendations
- [ ] Video tutorials integration

## 📈 Version History

### v1.1.0 (2025-01-12)
- Refactored to professional component architecture
- Added React Router for navigation
- Implemented Context API for state management
- Added custom hooks for business logic
- Improved performance with lazy initialization
- Fixed page load flash issue
- Default sorting by relevance
- Enhanced code organization and maintainability

### v1.0.0 (2025-01-11)
- Initial release
- 122 VS Code shortcuts
- 51 Git commands
- Bilingual support (EN/ES)
- Practice mode
- Favorites and progress tracking
- Dark theme
- Responsive design

---

**Made with ❤️ for Full Stack Bootcamp 2025**

*Remember: Practice these shortcuts daily to master them! 💪*
