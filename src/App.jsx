import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

export const goods = [
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

export const App = () => {
  const [goodsSelected, setGoodsSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodsSelected === ''
          ? 'No goods selected'
          : `${goodsSelected} is selected`}

        {goodsSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGoodsSelected('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === goodsSelected;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={`${isSelected ? 'has-background-success-light' : ''}`}
              >
                <td>
                  {!isSelected ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setGoodsSelected(good)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setGoodsSelected('')}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
