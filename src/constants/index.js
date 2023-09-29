import {
  fitnece_app,
  Image_editor,
  Ecommerce,
  weather_app,
    mobile,
    backend,
    creator,
    web,
    javascript,
    smart,
    gpt3,
    typescript,
    mySql,
    c,
    cs,
    arduino,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "c#,c++ Developer",
      icon: web,
    },
    {
      title: "python Developer",
      icon: mobile,
    },
    {
      title: "front_end Developer",
      icon: backend,
    },
    {
      title: "Arduino Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    
    {
      name: "c++",
      icon: c,
    },
    {
      name: "c#",
      icon: cs,
    },
    {
      name: "typescript",
      icon:  typescript,
    },{
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },{
      name: "redux",
      icon: redux,
    },{
      name: "mySql",
      icon: mySql,
    },
    
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "arduino",
      icon: arduino,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Smart home",
      description:
        "Web-based platform that allows users to control, and now all the sensor outputs and status ",
      tags: [
        {
          name: "Arduino & esp",
          color: "blue-text-gradient",
        },
        {
          name: "html&css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: smart,
      source_code_link: "https://kenanhomsi.github.io/Smart-home/",
    },
    {
      name: "E-commerce project",
      description:
        "An e-commerce website allows the user to review and purchase products by adding them to the shopping cart and confirming the purchase at the end.",
      tags: [
        {
          name: " React js",
          color: "blue-text-gradient",
        },
        {
          name: "ReduxToolkit",
          color: "green-text-gradient",
        },
        {
          name: "React routing",
          color: "pink-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: Ecommerce,
      source_code_link: "https://kenanhomsi.github.io/E-commerce/",
    },
    {
      name: "Image Editor project",
      description:
        "An online image editing site that allows you to modify images, such as cropping images, increasing brightness, and applying many filters.",
      tags: [
        {
          name: " React js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: Image_editor,
      source_code_link: "https://kenanhomsi.github.io/K-editor/",
    },
    {
      name: "WeatherApp project",
      description:
        "A website that accurately displays the weather conditions at the current time and for a period of five days according to the name of the city.",
      tags: [
        {
          name: " React js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "openWeatherApi",
          color: "red-text-gradient",
        }
      ],
      image: weather_app,
      source_code_link: "https://kenanhomsi.github.io/WeatherApp/",
    }
      ,{
      name: "gpt-3",
      description:
        "It is a site that shows the many and wonderful capabilities of the new gpt3 tools (especially building this site was a training on the basics of react )",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://kenanhomsi.github.io/gpt3__react/",
    },
    {
      name: "Fitness_Club website",
      description:
        "A site that displays many exercises with the ability to search or customize a specific muscle, taken from the API.",
      tags: [
        {
          name: "Reactjs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },{
          name: "Api",
          color: "red-text-gradient",
        },
      ],
      image: fitnece_app,
      source_code_link: "https://kenanhomsi.github.io/Fitness_Club/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };