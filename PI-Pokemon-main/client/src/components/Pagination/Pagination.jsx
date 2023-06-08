import React from 'react';
import styles from './estilos.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const totalVisiblePages = 9; // Número de páginas visibles en el paginado

    const startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

    let pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div className={styles.pageContainer}>
            <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
            >
            <span className={styles.pageNumber}>{i}</span>
            </button>
        </div>
      );
    }

    return pageNumbers;
  };

  return <div className={styles.pagination}>{renderPageNumbers()}</div>;
};

export default Pagination;

