import { useDispatch } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (_, action: PayloadAction<string>) => action.payload.toLowerCase(),
    reset: () => '',
  },
});

const { change, reset } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

const useFilter = () => {
  const filter = useAppSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (value: string) => dispatch(change(value));
  const handleFilterReset = () => dispatch(reset());

  return { filter, handleFilterChange, handleFilterReset };
};

export { useFilter, filterReducer };
