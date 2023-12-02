interface Skill {
  name: string;
  iconUrl: string;
}

interface Category {
  name: string;
  skills: Skill[];
}

interface Social extends Skill {
  href: string;
}

export const categories: Category[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C#',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'C++',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        name: 'Java',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'JavaScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Python',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'TypeScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'QT',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg',
      },
    ],
  },
  {
    name: 'Backend Frameworks',
    skills: [
      {
        name: '.NET',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      },
      {
        name: 'Express.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Firebase',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'Node.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'PHP',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
    ],
  },
  {
    name: 'Frontend Frameworks',
    skills: [
      {
        name: 'React',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Vue.js',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Docker',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: 'Linux',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
];

export const socials: Social[] = [
  {
    name: 'GitHub',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    href: 'https://github.com/nicanderhery',
  },
  {
    name: 'LinkedIn',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    href: 'https://www.linkedin.com/in/nicanderhery/',
  },
  {
    name: 'Instagram',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png',
    href: 'https://www.instagram.com/nicanderhery/',
  },
  {
    name: 'Facebook',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    href: 'https://www.facebook.com/nicanderhery',
  },
];

export const certifications: Social[] = [
  {
    name: 'Responsive Web Design',
    iconUrl: 'certificates/responsive-web-design.png',
    href: 'https://www.freecodecamp.org/certification/nicanderhery/responsive-web-design',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    iconUrl: 'certificates/javascript-algorithms-and-data-structures.png',
    href: 'https://www.freecodecamp.org/certification/nicanderhery/javascript-algorithms-and-data-structures',
  },
  {
    name: 'Back End Development and APIs',
    iconUrl: 'certificates/back-end-development-and-apis.png',
    href: 'https://www.freecodecamp.org/certification/nicanderhery/back-end-development-and-apis',
  },
  {
    name: 'Scientific Computing with Python',
    iconUrl: 'certificates/scientific-computing-with-python.png',
    href: 'https://www.freecodecamp.org/certification/nicanderhery/scientific-computing-with-python-v7',
  },
  {
    name: 'Problem Solving (Basic)',
    iconUrl: 'certificates/problem-solving-basic.png',
    href: 'https://www.hackerrank.com/certificates/3f518b1c827f',
  },
  {
    name: 'C# (Basic)',
    iconUrl: 'certificates/csharp-basic.png',
    href: 'https://www.hackerrank.com/certificates/916899a88470',
  },
  {
    name: 'Software Engineer',
    iconUrl: 'certificates/software-engineer.png',
    href: 'https://www.hackerrank.com/certificates/846295152b74',
  },
  {
    name: 'Software Engineer Intern',
    iconUrl: 'certificates/software-engineer-intern.png',
    href: 'https://www.hackerrank.com/certificates/7bc37652ceee',
  },
];
