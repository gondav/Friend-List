import Food from '../models/food.model';

export const foodRepository = {
  getAllFood(): Promise<Food[]> {
    return Food.findAll();
  },

  getFoodByName(name: string): Promise<Food | null> {
    return Food.findOne({
      where: {
        name
      }
    });
  },

  createFood(name: string): Promise<Food> {
    return Food.create({ name });
  }
};
