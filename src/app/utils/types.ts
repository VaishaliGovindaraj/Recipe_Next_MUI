export interface RecipeListType {
    name: string,
    image: string,
    id: string
}

export interface RecipeDisplayType {
  mealName: string;
  mealCategory: string;
  mealRegion: string;
  mealInstruction: string;
  mealImage: string;
  mealIngredients: string[]; 
  mealVideo?: string; 
}
