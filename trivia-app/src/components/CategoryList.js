import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Questions } from './Questions';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((response) => {
      setCategories(response.data.trivia_categories);
    });
  }, []);
  // console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.id)}
          key={category.id}
        >
          {category.name}
        </button>
      ))}
      <div>
        {selectedCategory ? <Questions id={selectedCategory} /> : <div></div>}
      </div>
    </div>
  );
};
