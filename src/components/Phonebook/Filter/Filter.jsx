import React from 'react';
import { nanoid } from 'nanoid';
import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContscts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.filter.data);

  const handleChange = e => {
    dispatch(filterContscts(e.target.value));
  };

  const filterId = nanoid();

  return (
    <div className={css.filter}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        type="text"
        name="filter"
        value={name}
        onChange={handleChange}
        className={css.input}
        placeholder="Choise name"
      />
    </div>
  );
};
