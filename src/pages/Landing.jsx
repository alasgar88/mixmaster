import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: data.drinks };
};

const Landing = () => {
  const { drinks } = useLoaderData();

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;