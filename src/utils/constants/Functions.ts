import Animated from "react-native-reanimated";


// function to format the date to long ago
export function formatDateToDayAgo(date: Date): string {
    const now:Date = new Date();
    const diff: number = date.getTime() - now.getTime();
  
    // convertir le temps en millisecondes en jours
    //const diffInDays = Math.floor(diff / (24 * 60 * 60  * 1000));
    const diffInDays = Math.floor(Math.abs(diff) / (24 * 60 * 60 * 1000));
    if(diffInDays === 0){
      return 'Today'
    }else if (diffInDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffInDays} days ago`;
    }
    
}


export const onScrollEvent = (contentOffset: {
  x?: Animated.Node<number>;
  y?: Animated.Node<number>;
}) => {
  //console.log();
  
  return (...args: any[]) => {
    // Utilisez contentOffset.x et contentOffset.y comme vous le souhaitez ici
    // args contiendra les autres arguments passés à la fonction
  };
};








