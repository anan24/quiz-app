//for randomising the answers to the querstions

export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);