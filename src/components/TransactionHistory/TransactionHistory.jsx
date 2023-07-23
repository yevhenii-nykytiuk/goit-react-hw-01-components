import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory} cellspacing={0}>
      <thead>
        <tr className={css.tableList}>
          <th className={css.tableItem}>Type</th>
          <th className={css.tableItem}>Amount</th>
          <th className={css.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
      
      {items.map(({id, type, amount, currency}) => (

        <tr key={id} align="center">
          <td className={css.tableItemTd}>{type}</td>
          <td className={css.tableItemTd}>{amount}</td>
          <td className={css.tableItemTd}>{currency}</td>
        </tr>

      ))}

      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
}

