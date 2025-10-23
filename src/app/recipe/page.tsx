"use client";

import { useEffect, useState } from "react";
import { RecipeListType } from "../utils/types";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";

const Recipe = () => {
  const [recipeListArray, setRecipeListArray] = useState<RecipeListType[]>([]);
  const [randomRecipe, setRandomRecipe] = useState<boolean>(false);
  const API_ENDPOINT: string = "https://www.themealdb.com/api/json/v1/1/";

  // ✅ 1️⃣ Fetch a random recipe and save to local storage
  const getRandomRecipe = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}random.php`);
      const data = await response.json();

      const recipeList: RecipeListType[] = data.meals.map((item: any) => ({
        name: item.strMeal,
        image: item.strMealThumb,
        id: item.idMeal,
      }));

      setRecipeListArray(recipeList);
      // ✅ Save to local storage
      localStorage.setItem("savedRecipes", JSON.stringify(recipeList));
    } catch (error) {
      console.log("Error fetching random recipe:", error);
    }
  };

  // ✅ 2️⃣ Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("savedRecipes");
    if (saved) {
      setRecipeListArray(JSON.parse(saved));
    } else {
      getRandomRecipe();
    }
  }, []);

  // ✅ 3️⃣ Optional: re-fetch when randomRecipe changes
  useEffect(() => {
    if (randomRecipe) {
      getRandomRecipe();
      setRandomRecipe(false);
    }
  }, [randomRecipe]);

  // ✅ Optional helper to clear local storage
  const clearLocalStorage = () => {
    localStorage.removeItem("savedRecipes");
    setRecipeListArray([]);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
      <Box maxWidth="lg" textAlign="center" width="100%">
        <Typography variant="h4" fontWeight="bold" color="text.primary" mt={6}>
          👋 Welcome to My Recipes
        </Typography>

        <Typography variant="h5" fontWeight={600} color="text.secondary" mt={4}>
          🍽️ Your Favourite Recipe
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={4}
          mt={3}
          mb={6}
        >
          {recipeListArray.length > 0 ? (
            recipeListArray.map((item) => (
              <Card
                key={item.id}
                sx={{
                  width: 320,
                  bgcolor: "grey.900",
                  color: "white",
                  borderRadius: 2,
                  p: 2,
                  textAlign: "center",
                  boxShadow: 4,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <div>
                    <Typography
                      variant="h6"
                      component="a"
                      sx={{
                        color: "white",
                        textDecoration: "none"
                      }}
                    >
                      {item.name}
                    </Typography>
                  </div>
                </CardContent>

                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                  alt={item.name}
                  sx={{ borderRadius: 2 }}
                />
              </Card>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No recipes found. Try fetching a new one!
            </Typography>
          )}
        </Stack>

        
        <Box mt={20} mb={6} margin="auto" maxWidth="200px" display="flex" flexDirection="column" justifyContent="center" gap={2}>
          <Button
            onClick={() => setRandomRecipe(true)}
            variant="contained"
            sx={{
              bgcolor: "orange.500",
              "&:hover": { bgcolor: "orange.600" },
              px: 4,
              py: 1.5,
              boxShadow: 3,
              fontWeight: 500,
            }}
          >
            🔄 Want another Recipe
          </Button>

          <Button
            onClick={clearLocalStorage}
            variant="outlined"
            sx={{
              color: "text.primary",
              borderColor: "text.primary",
              px: 3,
              py: 1.5,
              mb: 6
            }}
          >
            🧹 Clear Saved
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Recipe;
