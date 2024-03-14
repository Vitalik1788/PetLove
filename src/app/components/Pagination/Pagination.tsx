import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa6';

export default function Pagination({
  pageCount,
  handlePageClick,
  itemOffset,
}: any) {
  return (
    <div className={css.component_box}>
      <button
        type="button"
        className={css.start_angle}
        disabled={itemOffset === 0}
      >
        <FaAnglesLeft width={20} height={20} />
      </button>
      <ReactPaginate
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel={<FaAngleLeft />}
        nextLabel={<FaAngleRight />}
        renderOnZeroPageCount={null}
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
      <button type="button" className={css.end_angle}>
        <FaAnglesRight width={20} height={20} />
      </button>
    </div>
  );
}
