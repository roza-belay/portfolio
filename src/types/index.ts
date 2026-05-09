export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  detail: string;
};
