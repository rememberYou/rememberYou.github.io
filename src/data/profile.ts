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
import envalior from '../assets/logos/envalior.png';
import imec from '../assets/logos/imec.svg';

export const person = {
  firstName: 'Terencio',
  lastName: 'Agozzino',
  role: 'Solutions Architect',
  credentials: 'AWS & Azure Certified',
  country: 'Belgium',
  region: 'Wallonia',
  pitch:
    '5+ years across cloud, data and software: secure AWS & Azure foundations, data platforms, and the automation that runs them — with a research background in knowledge graphs.',
  email: 'terencio.agozzino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/terencioagozzino/',
  github: 'https://github.com/rememberYou',
  credly: 'https://www.credly.com/users/terencio-agozzino/badges',
} as const;

export interface Logo {
  name: string;
  src: ImageMetadata;
  /** Display height in pixels on large screens; logos differ in proportions. */
  height: number;
}

export const companies: Logo[] = [
  { name: 'Deloitte', src: deloitte, height: 24 },
  { name: 'Envalior', src: envalior, height: 30 },
  { name: 'imec', src: imec, height: 24 },
  { name: 'CBTW', src: cbtw, height: 22 },
  { name: 'Cronos', src: cronos, height: 42 },
];

export const figures = [
  { value: '5+', label: 'Years of experience in cloud, data & software' },
  { value: '11', label: 'AWS, Azure & Scrum certifications' },
  { value: '2', label: 'Peer-reviewed publications (Springer)' },
  { value: '4', label: 'Languages: French, English, Dutch, Italian' },
];

export type Icon = 'cloud' | 'terminal' | 'chart';

export const expertise: { icon: Icon; title: string; summary: string; points: string[] }[] = [
  {
    icon: 'cloud',
    title: 'Cloud architecture & security',
    summary: 'Secure foundations on AWS and Azure that teams can build on.',
    points: [
      'Terraform modules and starter kits for EKS and serverless',
      'Security reviews and guardrails across projects',
      'Migration to a new AWS landing zone',
    ],
  },
  {
    icon: 'terminal',
    title: 'DevOps & automation',
    summary: 'Infrastructure as code and pipelines, so every change is reviewed and repeatable.',
    points: [
      'AWS CDK and CloudFormation, CI/CD pipelines',
      'Manufacturing plants migrated to AWS IoT Greengrass V2',
      'Docker and GNU/Linux at the edge',
    ],
  },
  {
    icon: 'chart',
    title: 'Data & AI',
    summary: 'Data platforms that turn raw sources into decisions.',
    points: [
      'AWS Glue lake layers for SAP data, Athena',
      'Microsoft Fabric for logistics clients',
      'LLM document summarisation on Azure AI Foundry',
    ],
  },
];

export const experience = [
  {
    period: 'Dec 2025 – Feb 2026',
    place: 'Zaventem, Belgium',
    role: 'Solutions Architect',
    company: 'Deloitte',
    summary:
      'Secure AWS & Azure Terraform modules and starter kits to accelerate cloud adoption; security reviews and guardrails.',
    stack: ['AWS', 'Azure', 'Terraform', 'EKS'],
  },
  {
    period: 'Aug – Nov 2025',
    place: 'Kontich, Belgium',
    role: 'Solutions Architect & Azure Data Engineer',
    company: 'Nemeon',
    summary:
      'Microsoft Fabric environments for logistics clients, and an LLM-based summarisation of civil-engineering documents for Sparkle.',
    stack: ['Microsoft Fabric', 'Azure Data Factory', 'Azure AI Foundry', 'Docker'],
  },
  {
    period: 'Sep 2022 – Aug 2025',
    place: 'Geleen, Netherlands',
    role: 'AWS Cloud Developer',
    company: 'Envalior (former DSM), via Nemeon',
    summary:
      "SAP data provisioning with AWS Glue, the migration of manufacturing plants to AWS IoT Greengrass V2, and the move to Envalior's landing zone.",
    stack: ['AWS CDK', 'Glue', 'IoT Greengrass', 'PySpark'],
  },
  {
    period: '2022',
    place: 'Liège & Hasselt, Belgium',
    role: 'Data Scientist & Software Engineer',
    company: 'Datavillage, SoccerLAB',
    summary:
      'A knowledge-graph migration for a recommendation system, and a Svelte proof of concept with a design system.',
    stack: ['Neo4j', 'Python', 'Svelte', 'TypeScript'],
  },
  {
    period: 'Feb – Jun 2021',
    place: 'Ghent, Belgium',
    role: 'Machine Learning Intern',
    company: 'IDLab – imec',
    summary:
      "Built pyRDF2Vec, now a widely cited library for knowledge-graph embeddings, and evaluated BERT within RDF2Vec for my Master's thesis.",
    stack: ['Python', 'Knowledge graphs', 'NLP', 'CI/CD'],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge: ImageMetadata;
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
      },
      { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2022', badge: psm1 },
    ],
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
    text: 'Open-source library for knowledge-graph embeddings, on GitHub.',
  },
  {
    title: 'Master in Computer & Systems Engineering',
    text: 'Haute École en Hainaut, Mons · 2021',
  },
  {
    title: 'Cyber Security Challenge Belgium',
    text: 'Honorable mentions in 2020 and 2021; WIRE.HACK 2020.',
  },
];
