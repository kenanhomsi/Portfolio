import {
  Mostaql,
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
    blog,
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
      title: "back-end Developer",
      icon: web,
    },
    {
      title: "front_end Developer",
      icon: backend,
    },
    {
      title: "Arduino Developer",
      icon: creator,
    },
    {
      title: "python Developer",
      icon: mobile,
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
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "freelancer job",
      company_name: "mostaql",
      icon: Mostaql,
      iconBg: "#E6DEDD",
      date: " Sep 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "فنان بمجاله ومتعاون جدا",
      name: "مارينا الحامد",
      designation: "CMO",
      company: "dkoomedia",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:`انسان متميز ومحترف بعمله، طلبت الكثير من التعديلات وأتمها كلها بدون أي تأخير أو ملل.
        شكرا أخي وأكيد لن يكون آخر تعامل، وأنصح كل شخص يحتاج إلى مبرمج متميز يتعامل معاه..`,
      name: "Omar Emadi",
      designation: "Senior Project Manager",
      company: "mostaql",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        `مبدع ومتعاون
        شكرًا لك أخوي محمد`,
      name: "ابو فهد ",
      designation: "Senior Project Manager",
      company: " mostaql",
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
          name: "html&css&js",
          color: "green-text-gradient",
        },
        {
          name: "nodejs & express & mongoDB",
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
      name: "Blog project",
      description:`A  blog to display articles and the ability to like or write a comment for those who log in either by entering an email  or via Google, with a dashboard to control the blog.`,
      tags: [
        {
          name: "Node.js & Express & MongoDB",
          color: "green-text-gradient",
        },
        {
          name: " React.js & tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleAuth",
          color: "red-text-gradient",
        }
      ],
      image: blog,
      source_code_link: "https://mern-blog-lteh.onrender.com/",
    }
      ,{
      name: "Design and build a website",
      description:
        "تصميم موقع تعريفي احترافي لصالح شركة دكو ميديا السعودية على متجر سلة",
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
      image:'https://mostaql.hsoubcdn.com/uploads/thumbnails/2695813/650ae63436a60/202309141735090000.png?s=medium',
      source_code_link: "https://kenanhomsi.github.io/landing-page-mostaql/",
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