import React from 'react';
import { CategoryList } from './CategoryList';

export const App = () => {
  return (
    <div>
      <h1 className="appTitle">
        Trivia{' '}
        <div>
          <img src={process.env.PUBLIC_URL + 'thinking.png'} alt="mypic" />
        </div>
        Ne<div class="x">x</div>us
      </h1>
      <div>
        <CategoryList />
      </div>
    </div>
  );
};
