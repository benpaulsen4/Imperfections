import { RandomUtils } from "./random-utils";

describe('getXUniqueRandom function', () => {
    it('should return an empty array if x is less than or equal to 0', () => {
      const options = [1, 2, 3];
      expect(RandomUtils.getXUniqueRandom(options, 0)).toEqual([]);
      expect(RandomUtils.getXUniqueRandom(options, -1)).toEqual([]);
    });
  
    it('should return an array with length x', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getXUniqueRandom(options, 3);
      expect(values.length).toBe(3);
    });
  
    it('should return an array with unique elements', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getXUniqueRandom(options, 3);
      expect(values[0]).not.toEqual(values[1]);
      expect(values[0]).not.toEqual(values[2]);
    });
  
    it('should return an array with elements from the input options', () => {
      const options = [1, 2, 3];
      const values = RandomUtils.getXUniqueRandom(options, 3);
      expect(values).toContain(options[0]);
      expect(values).toContain(options[1]);
      expect(values).toContain(options[2]);
    });
  });
  