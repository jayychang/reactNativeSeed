import { useSelector } from 'react-redux';

export const useExampleSelector = () => useSelector(state => state.example)
