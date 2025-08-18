import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { setCurrentPage } from '../../App/store/reducers/VacancySlice';

const PaginationList = () => {
  const { pages, currentPage } = useAppSelector(
    (state) => state.vacancyReducer,
  );
  const dispatch = useAppDispatch();

  return (
    <Pagination
      total={pages}
      value={currentPage}
      onChange={(page) => {
        dispatch(setCurrentPage(page));
      }}
      withEdges
    />
  );
};

export default PaginationList;
