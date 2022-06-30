### project structre
```  
  |--src/
  |  |--App/App.js                                     <-- Root, Renders shared components and pages, theme change 
  |  |--pages/Home/Home.jsx                            <-- Home page parent, Renders home page
  |  |--pages/Home/components/intro.jsx                <-- The intro section with main info about me
  |  |--pages/Home/components/skills.jsx               <-- The skills section
  |  |--pages/Home/components/Projects/Projects.jsx    <-- My Recent Work section
  |  |--pages/Home/components/Projects/ProjectCard.jsx <-- Card with image and pref info
  |  |--pages/Home/components/Contact/Contact.jsx      <-- Contact me sectino
  |  |--pages/Home/components/Contact/ContactForm.jsx  <-- The input fields part with   validation and HTTP request to submit the message 
  |  |--pages/Home/components/Contact/FeedBack.jsx     <-- Snack bar that gives a feedback about the reuest if it's successfully sent or failed
  |  |--pages/Home/Assets                              <-- All Assets used in Home page
  |  |--pages/Projects/Project.jsx                     <-- Renderes the selected project from home page with more details and bigger image.
  |  |--config/Projects.js                             <-- Static data about the projects section
  |  |--config/Themes.js                               <-- Static data about the dark and light theme colors
  |  .
  .
  ```

### To run this project on your machine:


1.  git clone https://github.com/mahmodHammad/me.git

1.  cd me

1. npm init

1.  npm install

1.  npm start

1. Open http://localhost:3000 to view it in the browser.

#### Don't forget to visit `projects` branch 
