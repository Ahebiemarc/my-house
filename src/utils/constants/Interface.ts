import { minMaxImg } from "./Type";

// Item de bulle de message
export interface ItemMessageProps {
  id: string;
  image: string;
  name: string;
  message: string;
  date: Date;
}

// card Message props
export interface CardMessageProps {
  id: string
  image: string;
  name: string;
  message: string;
  date: Date;
  scale?: any;
  onPress?: () => void;
  onDismiss?: (bulleMessage: ItemMessageProps) => void;
  onLongPress?: () => void;
}

// data appart props
export interface dataProps{
  id: string;
  location: string;
  title: string;
  date: string;
  rent: string;
  description: string[];
  price: string;
  image: minMaxImg;
  category?: CategoriesProps[]
}


export interface review {
  imageUser : string,
  comment: string;
  star?: number,
  date: string
}


export interface CategoriesProps {
  id: string;
  name: string;
  icon: string;
}