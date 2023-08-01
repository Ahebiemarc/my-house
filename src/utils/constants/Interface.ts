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


