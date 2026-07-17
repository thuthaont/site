export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  image2?: string;
  image3?: string;
  tableauUrl: string;
  collabUrl: string;
  description: string;
  extendedDescription?: string;
  metrics?: { label: string; value: string }[];
  datasetSize?: string;
  methodology?: string;
}

export interface Skillset {
  category: string;
  skills: string[];
}
