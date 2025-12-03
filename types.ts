export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}