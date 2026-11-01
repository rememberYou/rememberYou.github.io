/**
 * Everything the page says about me, in one place. The components only lay it
 * out: updating the site means editing this file.
 */
import type { ImageMetadata } from 'astro';

import awsCloudPractitioner from '../assets/badges/aws-cloud-practitioner.png';
import awsDeveloper from '../assets/badges/aws-developer.png';
import awsDevopsPro from '../assets/badges/aws-devops-pro.png';
import awsSaAssociate from '../assets/badges/aws-sa-assoc.png';
import awsSaPro from '../assets/badges/aws-sa-pro.png';
import awsSysops from '../assets/badges/aws-sysops.png';
import azureAdmin from '../assets/badges/azure-admin.png';
import azureAi from '../assets/badges/azure-ai.png';
import azureFundamentals from '../assets/badges/azure-fundamentals.png';
import psm1 from '../assets/badges/psm1.png';
import cbtw from '../assets/logos/cbtw.svg';
import cronos from '../assets/logos/cronos.svg';
import deloitte from '../assets/logos/deloitte.svg';
import envalior from '../assets/logos/envalior.svg';
import imec from '../assets/logos/imec.svg';
import partenamut from '../assets/logos/partenamut.svg';

export const person = {
  firstName: 'Terencio',
  lastName: 'Agozzino',
  role: 'Solutions Architect',
  credentials: 'AWS & Azure Certified',
  country: 'Belgium',
  region: 'Wallonia',
  /** What search engines show under the title: at most about 155 characters. */
  description:
    'Solutions Architect, AWS & Azure certified: secure cloud foundations, data platforms and the automation that runs them, with a research background.',
  pitch:
    '5+ years across cloud, data and software: secure AWS & Azure foundations, data platforms, and the automation that runs them — with a research background in knowledge graphs.',
  email: 'terencio.agozzino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/terencioagozzino/',
  github: 'https://github.com/rememberYou',
  credly: 'https://www.credly.com/users/terencio-agozzino/badges',
  employer: { name: 'CBTW', url: 'https://cbtw.tech' },
  school: 'Haute École en Hainaut',
  /** What search engines associate with the name. */
  topics: [
    'Cloud architecture',
    'Amazon Web Services',
    'Microsoft Azure',
    'Infrastructure as code',
    'Data engineering',
    'Knowledge graphs',
  ],
  /** Served from public/; replace the file there to update it. */
  cv: '/terencio-agozzino-cv.pdf',
  thesis: '/terencio-agozzino-master-thesis.pdf',
} as const;

/**
 * A company logo, shown in its original colours. The parts drawn in
 * `currentColor` (black or near-black in the original) take `ink` by day and
 * the theme's text colour by evening, so no logo disappears on a dark
 * background. Brand colours are left as they are.
 */
export interface Logo {
  name: string;
  /**
   * An SVG, inlined. A logo only available as a single-colour PNG is wrapped
   * in one, as a mask over a currentColor rectangle (see envalior.svg).
   */
  src: ImageMetadata;
  /** Display height in pixels on large screens; logos differ in proportions. */
  height: number;
  /** The original colour of the parts drawn in `currentColor`. */
  ink?: string;
}

export const companies: Logo[] = [
  { name: 'Partenamut', src: partenamut, height: 32, ink: '#1b1f55' },
  { name: 'CBTW', src: cbtw, height: 22, ink: '#1c1c1c' },
  { name: 'Deloitte', src: deloitte, height: 24, ink: '#0f0b0b' },
  { name: 'Envalior', src: envalior, height: 30, ink: '#000000' },
  { name: 'imec', src: imec, height: 24, ink: '#3c3c3b' },
  { name: 'Cronos', src: cronos, height: 42 },
];

export type Icon = 'compass' | 'shield' | 'chart' | 'people';

export const expertise: { icon: Icon; title: string; summary: string; points: string[] }[] = [
  {
    icon: 'compass',
    title: 'Business-driven architecture',
    summary: 'From a business need to an architecture a client can decide on.',
    points: [
      'RFPs and client proposals on AWS and Azure',
      'Requirements turned into technical specifications',
      'Trade-offs made explicit: cost, risk, time to market',
    ],
  },
  {
    icon: 'shield',
    title: 'Secure cloud foundations',
    summary: 'Platforms that are secure by default, and that teams want to use.',
    points: [
      'Landing zones, guardrails and security reviews',
      'One CI/CD platform shared by several teams',
      'Terraform starter kits for EKS and serverless',
    ],
  },
  {
    icon: 'chart',
    title: 'Data & AI for the business',
    summary: 'From raw sources to decisions, and fewer manual tasks.',
    points: [
      'Document processing with Amazon Textract and Bedrock',
      'SAP data on AWS for reporting and finance teams',
      'Microsoft Fabric platforms for logistics clients',
    ],
  },
  {
    icon: 'people',
    title: 'Bringing people together',
    summary: 'Clients, engineers and operations working from the same plan.',
    points: [
      'Tech lead of a Data Engineering squad; certified Scrum Master',
      'Contributor to the AWS Guild at Envalior',
      'Handovers and documentation that let teams run on their own',
    ],
  },
];

/** One assignment: for a client when there is one, for the employer otherwise. */
export interface Mission {
  role: string;
  /** Who the work was for, when it was not the employer itself. */
  client?: string;
  period: string;
  place: string;
  summary: string;
  /** A phrase of the summary that downloads a document, such as a thesis. */
  link?: { text: string; url: string };
  stack: string[];
}

/** An employer, and the missions done while employed there, newest first. */
export interface Employer {
  name: string;
  period: string;
  /** What the employment was, when it is more than its missions. */
  summary?: string;
  current?: boolean;
  missions: Mission[];
}

export const experience: Employer[] = [
  {
    name: 'CBTW',
    period: 'Mar 2026 – Present',
    current: true,
    missions: [
      {
        role: 'AWS Platform Engineer / Solutions Architect',
        client: 'Partenamut',
        period: 'Aug 2026 – Present',
        place: 'Brussels, Belgium · Hybrid',
        summary:
          'A multi-account CI/CD pipeline factory, a central monitoring platform, AI document processing in production with Textract and Bedrock, and 18 tables loaded daily into Redshift.',
        stack: ['AWS CDK', 'CodePipeline', 'Step Functions', 'Bedrock'],
      },
      {
        role: 'Solutions Architect',
        period: 'Mar – Aug 2026',
        place: 'Brussels, Belgium',
        summary:
          'RFP responses on AWS and Azure, the AWS Partner Network work that keeps CBTW an AWS Advanced Tier Services Partner, and the Terraform foundation of an internal AI platform on Bedrock.',
        stack: ['Terraform', 'Bedrock', 'AgentCore', 'Textract'],
      },
    ],
  },
  {
    name: 'Deloitte',
    period: 'Dec 2025 – Jan 2026',
    summary: 'Cloud platform proposals for clients.',
    missions: [
      {
        role: 'Solutions Architect',
        period: 'Dec 2025 – Jan 2026',
        place: 'Zaventem, Belgium',
        summary:
          'Secure AWS & Azure Terraform modules and starter kits to accelerate cloud adoption; security reviews and guardrails.',
        stack: ['AWS', 'Azure', 'Terraform', 'EKS'],
      },
    ],
  },
  {
    name: 'Nemeon · Cronos Group',
    period: 'Nov 2021 – Nov 2025',
    summary: 'Consultant, placed with clients in Belgium and the Netherlands.',
    missions: [
      {
        role: 'Azure Data Engineer',
        client: 'Sparkle',
        period: 'Oct – Nov 2025',
        place: 'Kontich, Belgium',
        summary:
          'LLM-based summarisation of civil-engineering documents with Azure AI Foundry, in a containerised Azure pipeline.',
        stack: ['Azure AI Foundry', 'Azure Blob Storage', 'Docker', 'Python'],
      },
      {
        role: 'Solutions Architect',
        client: 'Logistics Companies',
        period: 'Aug – Nov 2025',
        place: 'Kontich, Belgium',
        summary:
          'Microsoft Fabric environments and data pipelines from Boltrics and TAS for more than five logistics clients, with data governance and quality.',
        stack: ['Microsoft Fabric', 'Azure Data Factory', 'SQL'],
      },
      {
        role: 'Solutions Architect',
        client: 'Envalior (former DSM)',
        period: 'Jan – Aug 2025',
        place: 'Geleen, Netherlands',
        summary:
          "In a team of eight, the move of the data platform (around 30 business use cases) from DSM's AWS environment to Envalior's new landing zone, without disrupting operations.",
        stack: ['AWS CDK', 'CodePipeline', 'Glue', 'Athena'],
      },
      {
        role: 'AWS Cloud Developer',
        client: 'Envalior (former DSM)',
        period: 'Sep 2022 – Dec 2024',
        place: 'Geleen, Netherlands',
        summary:
          'SAP data provisioning with Theobald and AWS Glue across raw, cleansed and harmonised layers, and four manufacturing plants moved to AWS IoT Greengrass V2.',
        stack: ['AWS CDK', 'Glue', 'IoT Greengrass', 'PySpark'],
      },
      {
        role: 'Software Engineer',
        client: 'SoccerLAB',
        period: 'Aug – Sep 2022',
        place: 'Hasselt, Belgium',
        summary: 'A Svelte proof of concept against React and Angular, with a design system.',
        stack: ['Svelte', 'TypeScript', 'Storybook', 'Tailwind CSS'],
      },
      {
        role: 'Data Scientist',
        client: 'Datavillage',
        period: 'Jan – Apr 2022',
        place: 'Liège, Belgium',
        summary:
          'A knowledge-graph migration and a faster recommendation system, with lower SPARQL and Cypher latency.',
        stack: ['Neo4j', 'Python', 'DBpedia', 'Wikidata'],
      },
    ],
  },
  {
    name: 'IDLab – imec',
    period: 'Feb – Jun 2021',
    missions: [
      {
        role: 'Machine Learning Intern',
        period: 'Feb – Jun 2021',
        place: 'Ghent, Belgium',
        summary:
          "Built pyRDF2Vec, now a widely cited library for knowledge-graph embeddings, and evaluated BERT within RDF2Vec for my Master's thesis.",
        link: { text: "Master's thesis", url: person.thesis },
        stack: ['Python', 'Knowledge graphs', 'NLP', 'CI/CD'],
      },
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge: ImageMetadata;
  /** How many certifications the badge stands for, when more than one. */
  count?: number;
}

export const certifications: { tier: string; items: Certification[] }[] = [
  {
    tier: 'Professional',
    items: [
      {
        name: 'AWS Certified DevOps Engineer – Professional',
        issuer: 'Amazon Web Services',
        year: '2024',
        badge: awsDevopsPro,
      },
      {
        name: 'AWS Certified Solutions Architect – Professional',
        issuer: 'Amazon Web Services',
        year: '2023',
        badge: awsSaPro,
      },
    ],
  },
  {
    tier: 'Associate',
    items: [
      { name: 'Azure Administrator', issuer: 'Microsoft', year: '2026', badge: azureAdmin },
      { name: 'AWS SysOps Administrator', issuer: 'AWS', year: '2022', badge: awsSysops },
      { name: 'AWS Developer', issuer: 'AWS', year: '2022', badge: awsDeveloper },
      { name: 'AWS Solutions Architect', issuer: 'AWS', year: '2021', badge: awsSaAssociate },
    ],
  },
  {
    tier: 'Foundations & agile',
    items: [
      { name: 'AWS Cloud Practitioner', issuer: 'AWS', year: '2021', badge: awsCloudPractitioner },
      { name: 'Azure Fundamentals', issuer: 'Microsoft', year: '2021', badge: azureFundamentals },
      {
        name: 'Azure AI & Data Fundamentals',
        issuer: 'Microsoft',
        year: '2022–2023',
        badge: azureAi,
        count: 2,
      },
      { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2022', badge: psm1 },
    ],
  },
];

const certificationCount = certifications
  .flatMap(({ items }) => items)
  .reduce((total, { count = 1 }) => total + count, 0);

export const figures = [
  {
    value: '15+',
    label: 'Years of software development, 5+ of them in professional cloud & data roles',
  },
  { value: String(certificationCount), label: 'AWS, Azure & Scrum certifications' },
  { value: '900+', label: 'GitHub stars on open-source projects I built' },
  {
    value: '6',
    label: 'Client industries: health insurance, chemicals, logistics, engineering, sport, data',
  },
];

export const publications = [
  {
    venue: 'Springer Nature · 2023',
    title: 'pyRDF2Vec: A Python Implementation and Extension of RDF2Vec',
    authors: ['G. Vandewiele', 'B. Steenwinckel', 'T. Agozzino', 'F. Ongenae'],
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-33455-9_28',
  },
  {
    venue: 'Data Mining & Knowledge Discovery · 2022',
    title: 'INK: Knowledge Graph Embeddings for Node Classification',
    authors: [
      'B. Steenwinckel',
      'G. Vandewiele',
      'M. Weyns',
      'T. Agozzino',
      'F. De Turck',
      'F. Ongenae',
    ],
    url: 'https://link.springer.com/article/10.1007/s10618-021-00806-z',
  },
];

export const highlights = [
  {
    title: 'pyRDF2Vec · ★ 269',
    text: 'Lead contributor, with 1,100+ commits, to this library for knowledge-graph embeddings.',
  },
  {
    title: 'GNU Emacs configuration · ★ 485',
    text: 'My literate Org configuration, shared with the Emacs community.',
  },
  {
    title: 'Master in Computer & Systems Engineering',
    text: 'Haute École en Hainaut, Mons · 2021',
    url: person.thesis,
    link: 'Read the thesis',
  },
];
