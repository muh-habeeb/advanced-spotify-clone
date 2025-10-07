# 🤝 Contributing Guide

Thank you for your interest in contributing to the Realtime Spotify Clone! This guide will help you get started.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git
- Code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/yourusername/realtime-spotify-clone.git
   cd realtime-spotify-clone
   ```

2. **Set up environment**
   ```bash
   # Install dependencies
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` files in both backend and frontend
   - Fill in your development credentials

4. **Start development servers**
   ```bash
   # From root directory
   npm run dev
   ```

## Project Structure

```
├── backend/          # Express.js API server
├── frontend/         # React TypeScript client
├── docs/            # Documentation
└── README.md        # Project overview
```

## Development Workflow

### 1. Choose an Issue
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to let others know you're working on it
- Wait for approval from maintainers for larger changes

### 2. Create a Branch
```bash
# Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Make Changes
- Follow the coding standards below
- Write clear, descriptive commit messages
- Test your changes thoroughly

### 4. Commit Changes
```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add user playlist functionality"

# Or for bug fixes
git commit -m "fix: resolve audio playback issue on Safari"
```

### Commit Message Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### 5. Push and Create PR
```bash
# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

## Coding Standards

### TypeScript/JavaScript
- Use TypeScript for new frontend code
- Follow ESLint rules (run `npm run lint`)
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### React Components
- Use functional components with hooks
- Follow the existing component structure
- Use proper TypeScript interfaces
- Implement error boundaries where appropriate

### Backend Code
- Use ES6+ features
- Implement proper error handling
- Validate input data
- Follow RESTful API principles

### CSS/Styling
- Use Tailwind CSS utilities
- Follow mobile-first responsive design
- Use semantic class names
- Maintain consistent spacing and typography

## Testing

### Frontend Testing
```bash
cd frontend
npm run test
```

### Backend Testing
```bash
cd backend
npm run test
```

### Manual Testing
1. Test all user flows
2. Verify real-time features work
3. Test on different browsers
4. Test responsive design on mobile

## Documentation

### Code Documentation
- Add JSDoc comments for functions
- Update type definitions
- Comment complex logic

### User Documentation
- Update README if needed
- Add API documentation for new endpoints
- Update deployment guides

## Pull Request Guidelines

### Before Submitting
- [ ] Code follows project standards
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Code is properly documented
- [ ] Changes are tested manually

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots of UI changes

## Notes
Any additional information or context
```

### Review Process
1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged

## Feature Development

### Adding New Features

#### Frontend Features
1. Create component in appropriate directory
2. Add to routing if it's a page
3. Update state management if needed
4. Add TypeScript interfaces
5. Style with Tailwind CSS

#### Backend Features
1. Create model (if needed)
2. Add controller functions
3. Create API routes
4. Add authentication middleware
5. Update API documentation

### Real-time Features
- Use Socket.io for real-time functionality
- Test with multiple browser windows/users
- Handle connection/disconnection gracefully
- Update both frontend and backend

## Bug Reporting

### Before Reporting
1. Check existing issues
2. Reproduce the bug consistently
3. Test in different browsers
4. Note your environment details

### Bug Report Template
```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 95]
- Node.js version: [e.g., 18.0.0]

## Screenshots
If applicable, add screenshots
```

## Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes

### Release Steps
1. Update version numbers
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production
5. Announce release

## Security

### Reporting Security Issues
- **DO NOT** create public issues for security vulnerabilities
- Email security@yourproject.com
- Include detailed information about the vulnerability
- Allow time for fixes before public disclosure

### Security Guidelines
- Never commit secrets or API keys
- Use environment variables for sensitive data
- Validate and sanitize all user inputs
- Follow OWASP security guidelines

## Community

### Getting Help
- [GitHub Discussions](https://github.com/yourusername/realtime-spotify-clone/discussions)
- [Discord Server](#) (if available)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/spotify-clone)

### Communication
- Be respectful and professional
- Ask questions clearly with context
- Help others when you can
- Follow up on your issues and PRs

## Recognition

### Contributors
All contributors are recognized in:
- README.md contributors section
- CONTRIBUTORS.md file
- Release notes for significant contributions

### Types of Contributions
We value all types of contributions:
- Code contributions
- Bug reports
- Documentation improvements
- Design suggestions
- Testing and QA
- Community support

Thank you for contributing to the Realtime Spotify Clone! 🎵