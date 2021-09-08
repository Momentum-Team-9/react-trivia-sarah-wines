import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((response) => {
      setCategories(
        response.data.trivia_categories.map((category) => [
          category.name,
          category.id,
        ])
      );
    });
  }, []);
  console.log(categories);
  return <></>;
};
