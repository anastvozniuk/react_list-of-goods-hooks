import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  None = 'none',
  Alphabetically = 'alphabetically',
  Length = 'length',
  Reverse = 'reverse',
}

export const App: React.FC = () => {
  const [sortType, setSortType] = useState<SortType>(SortType.None);

  const getSortedGoods = () => {
    switch (sortType) {
      case SortType.Alphabetically:
        return [...goodsFromServer].sort((a, b) => a.localeCompare(b));
      case SortType.Length:
        return [...goodsFromServer].sort((a, b) => a.length - b.length);
      case SortType.Reverse:
        return [...goodsFromServer].slice().reverse();
      default:
        return goodsFromServer;
    }
  };

  const goodsToDisplay = getSortedGoods();

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => setSortType(SortType.Alphabetically)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={() => setSortType(SortType.Length)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={() => setSortType(SortType.Reverse)}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => setSortType(SortType.None)}
        >
          Reset
        </button>
      </div>

      <ul>
        {goodsToDisplay.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
