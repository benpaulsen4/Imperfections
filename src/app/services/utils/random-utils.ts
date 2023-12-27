export class RandomUtils {
    /**
     * Returns an array of random values from the input array, ensuring no duplicates.
     * @param options The input array to select values from.
     * @param x The number of unique random values to return.
     */
    static getXUniqueRandom<T>(options: T[], x: number): T[] {
        const usedIndices = new Set<number>();
        
        while (usedIndices.size < x) {
            const index = Math.floor(Math.random() * options.length);
            usedIndices.add(index);
        }
        
        return Array.from(usedIndices).map(i => options[i]);
    }
  
}