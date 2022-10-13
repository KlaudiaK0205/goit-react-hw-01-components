import PropTypes from 'prop-types';
import Transactions from './transactionHistory.styles.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={Transactions.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
    };

    TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ),
};

// DONE
