
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
}

export interface Rule {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
