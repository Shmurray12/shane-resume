import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from 'src/images/headerBackground.jpg';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Shane Murray's Resume Website",
  description: 'Built with React',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Shane Murray`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Massachussets based, third year student at{' '}
        <strong className="text-stone-100">Santa Clara University</strong>, specializing in{' '}
        <strong className="text-stone-100">Software Developement </strong>
        and <strong className="text-stone-100">Cybersecurity Engineering</strong> by pursuing a{' '}
        <strong className="text-stone-100">bachelors degree in Computer Science</strong> with an emphasis on{' '}
        <strong className="text-stone-100">Cybersecurity</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I love to play <strong className="text-stone-100">Basketball, Rock Climb</strong>, go to
        the <strong className="text-stone-100">Gym</strong>, or go on <strong className="text-stone-100">Hikes</strong>{' '}
        wherever I can find them.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://shmurray12.github.io/shane-resume/resume.pdf',
      target: '_blank',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },

    {
      href: 'mailto:shanemurray2004@gmail.com', //`#${SectionId.Contact}`,
      text: 'Email Me',
      primary: false,
      target: '_self',
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Since my first coding class in middle school, I've always had a passion for computer science and problem solving. 
  I have a strong desire to learn and improve my abilities, and I love a challenge that involves picking up new skills.
  I'm a team player in a group setting, and am happy taking a leadership position to help solve the task at hand.`,
  aboutItems: [
    {label: 'Location', text: 'Wellesley, MA', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'US Citizen', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Climbing, Hiking, Working out, Music, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Santa Clara University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full Time Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Flutter',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Carbon',
    description:
      'During the INRIX 2023 hackathon, myself and a group of peers created an app that aimed to gamify eco-friendliness.',
    url: 'https://devpost.com/software/carbon-6785gb',
    image: porfolioImage1,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio/resume website built using React with typescript',
    url: 'https://shmurray12.github.io/shane-resume/',
    image: porfolioImage2,
  },
  /*{
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage11,
  }, 
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2022 - (expected) June 2026',
    location: 'Santa Clara University',
    title: 'Bachelors in Computer Science',
    content: (
      <p>
        At Santa Clara, I have been enrolled in rigorous courses covering a variety of topics within computer science.
        I've taken upper-division classes in networks and automata. I've taken specialized courses covering object
        oriented programming, data structures, and advanced programming.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2025 - Present',
    location: 'Santa Clara University',
    title: 'Standards Director at Zeta Beta Tau Fraternity',
    content: (
      <p>
        After serving on the standards board for nearly 2 years, I was selected for the role of Standards Director. In
        this role, it is my responsibility to hold other brothers of the chapter accountable for their actions, and
        choose just punishment. I lead the standards board, a group of members that I selected based on their character,
        and hold meetings in order to ensure that the correct course of action is taken when dealing with misconduct.
      </p>
    ),
  },
  {
    date: 'November 2023',
    location: 'Santa Clara University',
    title: 'INRIX Hackathon 2023',
    content: (
      <p>
        Worked with a team of 5 other students to create an app that aimed to gamify eco-friendliness. With only 24
        hours to complete our task, we had to delegate roles and work as a coherent team to accomplish our goals. We
        placed in the top 25% of teams and received an honorable mention.
      </p>
    ),
  },
];

/**
 * Testimonial section -- Unfinished
 */

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel Free to Reach Out!',
  items: [
    {
      type: ContactType.Email,
      text: 'shanemurray2004@gmail.com',
      href: 'mailto:shanemurray2004@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Wellesley, MA',
      href: 'https://www.google.ca/maps/place/Wellesley,+MA/@42.3102769,-71.2958863,14.39z',
    },
    {
      type: ContactType.Instagram,
      text: '@shanemurray_12',
      href: 'https://www.instagram.com/shanemurray_12/',
    },
    {
      type: ContactType.Github,
      text: 'Shmurray12',
      href: 'https://github.com/Shmurray12',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Shmurray12'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shane--murray/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/shanemurray_12/'},
];
