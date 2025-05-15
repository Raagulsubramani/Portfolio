export interface TimelineItem {
  title: string;
  company?: string;
  date: string;
  description: string;
  skills?: string[];
}

export interface Section {
  id: string;
  title: string;
}