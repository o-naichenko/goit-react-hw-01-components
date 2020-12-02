import PropTypes from "prop-types";
import Transaction from "./Transaction";
import "./TransactionHistory.css";


const TransactionHistory = ({ items }) =>
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item =>
                (<Transaction
                key={item.id}
                    item={item}
                />)
            )}
        </tbody>
    </table>;

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;