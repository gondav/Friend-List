import Food from '../models/food.model';

export const foodRepository = {
  getAllFood(): Promise<Food[]> {
    return Food.findAll();
  },

  createFood(name: string): Promise<Food> {
    return Food.create({ name });
  }
};
