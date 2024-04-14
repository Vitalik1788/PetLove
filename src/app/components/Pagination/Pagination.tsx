import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa6';

export default function Pagination({
  handlePageClick,
  totalPages,
  itemOffset,
  setItemOffset,
}: any) {
  return (
    <div className={css.component_box}>
      <button
        onClick={() => setItemOffset(1)}
        type="button"
        className={css.start_angle}
        disabled={itemOffset === 1}
      >
        <FaAnglesLeft width={20} height={20} />
      </button>
      <ReactPaginate
        initialPage={itemOffset - 1}
        pageRangeDisplayed={1}
        breakLabel="..."
        pageCount={totalPages}
        onPageChange={handlePageClick}
        previousLabel={<FaAngleLeft />}
        nextLabel={<FaAngleRight />}
        marginPagesDisplayed={0}
        disableInitialCallback={true}
        containerClassName={css.container}
        pageClassName={css.item_style}
        breakClassName={css.breakClassName}
        previousClassName={css.previousClassName}
        activeClassName={css.activeClassName}
        nextClassName={css.nextClassName}
        disabledClassName={css.disabledClassName}
        disabledLinkClassName={css.disabledLinkClassName}
        previousLinkClassName={css.previousLinkClassName}
        nextLinkClassName={css.nextLinkClassName}
      />
      <button
        onClick={() => setItemOffset(totalPages)}
        type="button"
        className={css.end_angle}
        disabled={itemOffset === totalPages}
      >
        <FaAnglesRight width={20} height={20} />
      </button>
    </div>
  );
}
