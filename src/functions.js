import { postsProvider } from "./postsProvider";

export const getMostFrequent = (array) => {

    let defaultMostFrequent  = 1; 
    let counter = 0;
    let MostFrequentItem;
    
    for (let i=0; i<array.length; i++){

        //loop through next elements in array to compare calculate frequency of current element
        for (let j=i; j<array.length; j++){

            //see if element occurs again in the array and increment counter if it does
                if (array[i] == array[j]){
                    counter++;
                }
                
                //compare current items frequency with maximum frequency and store the most frequent element
                if (defaultMostFrequent<counter){
                    defaultMostFrequent=counter; 
                    MostFrequentItem = array[i];
                }
        }
        // reset counter to 0 for next element
        counter = 0;
    }

    return MostFrequentItem;
}

export const mostActiveUser =  async () => {

    const result = [];
    const data = await postsProvider();

    data.map(item => result.push(item.userId));
    
    return getMostFrequent(result);
}
