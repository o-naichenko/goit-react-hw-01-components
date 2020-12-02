import PropTypes from "prop-types";

const Transaction = ({ item }) =>
    <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>;

Transaction.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Transaction;    