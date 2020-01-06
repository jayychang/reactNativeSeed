import { useDispatch } from 'react-redux';

const EXAMPLE_ACTION = 'example/something/add';

export const useExampleAction = () => {
  const dispatch = useDispatch();

  return (
    ({ value }: CardParams) => dispatch({
      type: EXAMPLE_ACTION,
      payload: {
        value,
      }
    })
  );
};
