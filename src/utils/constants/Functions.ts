

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