# Personal Website - Next.js Portfolio

A modern, responsive personal website built with Next.js and Tailwind CSS. This portfolio showcases your professional information, projects, and provides a contact form for potential clients or employers.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Display your projects with images, descriptions, and tech stacks
- **Contact Form**: Ready-to-use contact form for inquiries
- **Social Links**: Integration with social media platforms
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management with useState
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your website.

## Customization

### Personal Information

Edit the `personalInfo` object in `app/page.js`:

```javascript
const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  email: "your.email@example.com",
  location: "Your Location",
  photo: "/your-photo.jpg"
};
```

### Projects

Update the `projects` array in `app/page.js` with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    image: "/project-image.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://your-project-url.com"
  }
  // Add more projects...
];
```

### Skills

Modify the `skills` array to showcase your technical skills:

```javascript
const skills = ["JavaScript", "React", "Node.js", "Your Skills..."];
```

### Images

1. Place your images in the `public/` directory
2. Update the image paths in the code:
   - Profile photo: `personalInfo.photo`
   - Project images: `project.image`

### Styling

The website uses Tailwind CSS. You can customize colors, spacing, and other styles by modifying the Tailwind classes in the components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Project Structure

```
personal-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Main page component
├── public/                  # Static assets
│   ├── profile.jpg          # Your profile photo
│   ├── project1.jpg         # Project images
│   └── ...
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md               # This file
```

## Features to Add

Consider adding these features to enhance your portfolio:

- **Blog Section**: Share your thoughts and expertise
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Add more interactive animations
- **Contact Form Backend**: Connect the contact form to a backend service
- **Analytics**: Add Google Analytics or similar tracking
- **SEO Optimization**: Add more meta tags and structured data

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with customization or deployment, feel free to reach out!
