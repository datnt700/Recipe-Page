import axios from 'axios';

export const fetchFoodByCategory = async (opts: { categoryName: string }) => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${opts?.categoryName}`
  );
  return response.data.meals;
};
