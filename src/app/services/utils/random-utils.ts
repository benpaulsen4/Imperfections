export class RandomUtils {
    /**
     * Returns an array of random values from the input array, ensuring that results are 'fresh' 
     * (not used recently).
     * 
     * The goal here is to emulate a freshly shuffled deck of cards.
     * 
     * @param options The input array to select values from.
     * @param x The number of unique random values to return.
     * @param indicesToIgnore A set of recently used indices that should not be reused unless there 
     * are few other options remaining (the indices used in this run will be added here automatically).
     */
    static getFreshRandom<T>(options: T[], x: number, indicesToIgnore?: Set<number>): T[] {
        //if there are less than 10% of fresh options remaining, reuse old results
        if (!!indicesToIgnore && (indicesToIgnore.size / options.length) > 0.9) indicesToIgnore.clear();

        const usedIndices = new Set<number>();
        
        while (usedIndices.size < x) {
            const index = Math.floor(Math.random() * options.length);

            if(indicesToIgnore?.has(index)) continue;
            usedIndices.add(index);
        }

        if (!!indicesToIgnore){
            for (let index of usedIndices) indicesToIgnore.add(index)
        }
        
        return Array.from(usedIndices).map(i => options[i]);
    }
  
}