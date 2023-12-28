import { RandomUtils } from "./random-utils";

describe('getFreshRandom function', () => {
    it('should return an empty array if x is less than or equal to 0', () => {
      const options = [1, 2, 3];
      expect(RandomUtils.getFreshRandom(options, 0)).toEqual([]);
      expect(RandomUtils.getFreshRandom(options, -1)).toEqual([]);
    });
  
    it('should return an array with length x', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getFreshRandom(options, 3);
      expect(values.length).toBe(3);
    });
  
    it('should return an array with unique elements', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getFreshRandom(options, 3);
      expect(values[0]).not.toEqual(values[1]);
      expect(values[0]).not.toEqual(values[2]);
    });
  
    it('should return an array with elements from the input options', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getFreshRandom(options, 3);
      expect(values).toContain(options[0]);
      expect(values).toContain(options[1]);
      expect(values).toContain(options[2]);
    });

    it('should keep the results fresh', () => {
      const options = []
      for (let i = 0; i < 100; i++) options.push(i);

      //values 1, 2, 3 have already been used
      const usedIndices = new Set([1, 2, 3]);
      let results: number[] = [];

      //after running 18 times at 5 results per run, we still shouldn't see values reused
      for (let i = 0; i < 18; i++){
        results = results.concat(RandomUtils.getFreshRandom(options, 5, usedIndices))
      }

      expect(results).not.toContain(1)
      expect(results).not.toContain(2)
      expect(results).not.toContain(3)
    })
  });
  