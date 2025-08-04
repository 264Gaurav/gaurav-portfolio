// type TSection = {
//   p: string;
//   h2: string;
//   content?: string;
// };

// type TConfig = {
//   html: {
//     title: string;
//     fullName: string;
//     email: string;
//   };
//   hero: {
//     name: string;
//     p: string[];
//   };
//   contact: {
//     form: {
//       name: {
//         span: string;
//         placeholder: string;
//       };
//       email: {
//         span: string;
//         placeholder: string;
//       };
//       message: {
//         span: string;
//         placeholder: string;
//       };
//     };
//   } & TSection;
//   sections: {
//     about: Required<TSection>;
//     experience: TSection;
//     feedbacks: TSection;
//     works: Required<TSection>;
//   };
// };

// export const config: TConfig = {
//   html: {
//     title: "Gaurav Singh — 3D Portfolio",
//     fullName: "Gaurav Singh",
//     email: "gauravsingh264209@mail.com",
//   },
//   hero: {
//     name: "Gaurav Singh",
//     p: ["I am iOS and Full-Stack developer", "I am a quick learner and a team player"],
//   },
//   contact: {
//     p: "Get in touch",
//     h2: "Contact.",
//     form: {
//       name: {
//         span: "Your Name",
//         placeholder: "What's your name?",
//       },
//       email: { span: "Your Email", placeholder: "What's your email?" },
//       message: {
//         span: "Your Message",
//         placeholder: "What do you want to say?",
//       },
//     },
//   },
//   sections: {
//     about: {
//       p: "Introduction",
//       h2: "Overview.",
//       content: `I'm a skilled Research & Software Engineer currently working at IDEMIA in the Innovation Team. 
//       I have expertise in TypeScript, JavaScript, React, Node.js, Swift, SwiftUI, and Python, with a strong foundation in full-stack development. 
//       I’m passionate about building scalable, efficient, and user-friendly solutions that solve real-world problems. 
//       A quick learner and collaborator, I bring innovative ideas to life and specialize in integrating AI features into products. 
//       I have hands-on experience in AI/ML, MLOps, and tools like LangChain, LangGraph, OpenAI, Ollama, and Hugging Face. 
//       I'm also proficient in real-time technologies such as Socket.io, WebSockets, and WebRTC, along with backend tools including Express.js, MongoDB, and Postman. 
//       Let’s work together to turn your vision into reality!`,
//     },
//     experience: {
//       p: "What I have done so far",
//       h2: "Work Experience.",
//     },
//     feedbacks: {
//       p: "What others say",
//       h2: "Testimonials.",
//     },
//     works: {
//       p: "My work",
//       h2: "Projects.",
//       content: `Following projects showcases my skills and experience through
//     real-world examples of my work. Each project is briefly described with
//     links to code repositories and live demos in it. It reflects my
//     ability to solve complex problems, work with different technologies,
//     and manage projects effectively.`,
//     },
//   },
// };



type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "John Doe — 3D Portfolio",
    fullName: "John Doe",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "John Doe",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};