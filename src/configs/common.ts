
export type JobInfoItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  salary: string;
  experience: string;
  education: string;
  skills: string[];
  category: string;
  tags: string[];
  postedDate: string;
};

export const JobsList: JobInfoItem[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York, USA',
    employmentType: 'Full-time',
    salary: '$120,000 - $150,000',
    experience: '3-5 years',
    education: "Bachelor's degree",
    skills: ['React', 'JavaScript', 'Node.js', 'AWS'],
    category: 'Software Development',
    tags: ['Urgent', 'Remote'],
    postedDate: '2024-01-15'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Seattle, USA',
    employmentType: 'Full-time',
    salary: '$130,000 - $160,000',
    experience: '5-7 years',
    education: "Master's degree",
    skills: ['Product Strategy', 'Agile', 'JIRA', 'Analytics'],
    category: 'Product Management',
    tags: ['Featured'],
    postedDate: '2024-01-14'
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'Apple',
    location: 'California, USA',
    employmentType: 'Contract',
    salary: '$90,000 - $120,000',
    experience: '2-4 years',
    education: "Bachelor's degree",
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    category: 'Design',
    tags: ['Remote'],
    postedDate: '2024-01-13'
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Boston, USA',
    employmentType: 'Full-time',
    salary: '$140,000 - $180,000',
    experience: '4-6 years',
    education: "Master's degree",
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    category: 'Data Science',
    tags: ['Urgent', 'Featured'],
    postedDate: '2024-01-12'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Remote',
    employmentType: 'Full-time',
    salary: '$125,000 - $155,000',
    experience: '3-5 years',
    education: "Bachelor's degree",
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
    category: 'DevOps',
    tags: ['Remote'],
    postedDate: '2024-01-11'
  },
  {
    id: 6,
    title: 'Frontend Developer',
    company: 'Meta',
    location: 'London, UK',
    employmentType: 'Full-time',
    salary: '£70,000 - £90,000',
    experience: '2-4 years',
    education: "Bachelor's degree",
    skills: ['React', 'TypeScript', 'CSS', 'HTML'],
    category: 'Software Development',
    tags: ['Urgent'],
    postedDate: '2024-01-10'
  },
  {
    id: 7,
    title: 'Backend Developer',
    company: 'Salesforce',
    location: 'Singapore',
    employmentType: 'Full-time',
    salary: 'SGD 8,000 - 12,000',
    experience: '3-5 years',
    education: "Bachelor's degree",
    skills: ['Java', 'Spring Boot', 'MySQL', 'MongoDB'],
    category: 'Software Development',
    tags: ['Featured'],
    postedDate: '2024-01-09'
  },
  {
    id: 8,
    title: 'Mobile Developer',
    company: 'Grab',
    location: 'Remote',
    employmentType: 'Contract',
    salary: '$100,000 - $130,000',
    experience: '3-5 years',
    education: "Bachelor's degree",
    skills: ['React Native', 'iOS', 'Android', 'Flutter'],
    category: 'Mobile Development',
    tags: ['Remote'],
    postedDate: '2024-01-08'
  },
  {
    id: 9,
    title: 'Cloud Architect',
    company: 'IBM',
    location: 'Toronto, Canada',
    employmentType: 'Full-time',
    salary: 'CAD 130,000 - 160,000',
    experience: '7-10 years',
    education: "Master's degree",
    skills: ['AWS', 'Azure', 'GCP', 'Terraform'],
    category: 'Cloud Computing',
    tags: ['Featured', 'Urgent'],
    postedDate: '2024-01-07'
  },
  {
    id: 10,
    title: 'QA Engineer',
    company: 'Adobe',
    location: 'Sydney, Australia',
    employmentType: 'Full-time',
    salary: 'AUD 90,000 - 120,000',
    experience: '2-4 years',
    education: "Bachelor's degree",
    skills: ['Selenium', 'Jest', 'Cypress', 'TestNG'],
    category: 'Quality Assurance',
    tags: ['Remote'],
    postedDate: '2024-01-06'
  }
];

export const CandidatesList = [
  {
    id: 1,
    name: 'John Smith',
    age: 28,
    location: 'New York, USA',
    jobTitle: 'Senior Software Engineer',
    experience: '5 years',
    education: "Master's in Computer Science",
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    languages: ['English', 'Spanish'],
    desiredSalary: '$130,000 - $150,000',
    availability: 'Immediate'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    age: 32,
    location: 'London, UK',
    jobTitle: 'Product Manager',
    experience: '7 years',
    education: "MBA",
    skills: ['Product Strategy', 'Agile', 'Data Analytics', 'Leadership'],
    languages: ['English', 'French'],
    desiredSalary: '£80,000 - £95,000',
    availability: '1 month notice'
  },
  {
    id: 3,
    name: 'David Chen',
    age: 26,
    location: 'Singapore',
    jobTitle: 'UX Designer',
    experience: '3 years',
    education: "Bachelor's in Design",
    skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research'],
    languages: ['English', 'Mandarin'],
    desiredSalary: 'SGD 7,000 - 9,000',
    availability: '2 weeks notice'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    age: 30,
    location: 'Toronto, Canada',
    jobTitle: 'Data Scientist',
    experience: '5 years',
    education: "PhD in Statistics",
    skills: ['Python', 'R', 'Machine Learning', 'SQL'],
    languages: ['English', 'French'],
    desiredSalary: 'CAD 120,000 - 140,000',
    availability: 'Immediate'
  },
  {
    id: 5,
    name: 'Michael Brown',
    age: 29,
    location: 'Berlin, Germany',
    jobTitle: 'DevOps Engineer',
    experience: '4 years',
    education: "Bachelor's in Computer Science",
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    languages: ['English', 'German'],
    desiredSalary: '€65,000 - €80,000',
    availability: '3 months notice'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    age: 27,
    location: 'Sydney, Australia',
    jobTitle: 'Frontend Developer',
    experience: '3 years',
    education: "Bachelor's in Software Engineering",
    skills: ['React', 'Vue.js', 'CSS', 'JavaScript'],
    languages: ['English'],
    desiredSalary: 'AUD 95,000 - 110,000',
    availability: '2 weeks notice'
  },
  {
    id: 7,
    name: 'Alex Martinez',
    age: 31,
    location: 'Madrid, Spain',
    jobTitle: 'Backend Developer',
    experience: '6 years',
    education: "Master's in Software Engineering",
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    languages: ['English', 'Spanish'],
    desiredSalary: '€45,000 - €55,000',
    availability: '1 month notice'
  },
  {
    id: 8,
    name: 'Emily Turner',
    age: 25,
    location: 'Remote',
    jobTitle: 'Mobile Developer',
    experience: '2 years',
    education: "Bachelor's in Computer Science",
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    languages: ['English'],
    desiredSalary: '$85,000 - $100,000',
    availability: 'Immediate'
  },
  {
    id: 9,
    name: 'Robert Kim',
    age: 35,
    location: 'Seoul, South Korea',
    jobTitle: 'Solutions Architect',
    experience: '10 years',
    education: "Master's in Computer Engineering",
    skills: ['AWS', 'Azure', 'System Design', 'Cloud Architecture'],
    languages: ['English', 'Korean'],
    desiredSalary: '₩90,000,000 - ₩110,000,000',
    availability: '2 months notice'
  },
  {
    id: 10,
    name: 'Anna Kowalski',
    age: 28,
    location: 'Warsaw, Poland',
    jobTitle: 'QA Engineer',
    experience: '4 years',
    education: "Bachelor's in Computer Science",
    skills: ['Selenium', 'Cypress', 'TestNG', 'Automation'],
    languages: ['English', 'Polish'],
    desiredSalary: 'PLN 12,000 - 15,000',
    availability: '1 month notice'
  }
];