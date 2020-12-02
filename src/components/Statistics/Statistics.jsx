import PropTypes from "prop-types";
import "./Statistics.css";
const Statistics = ({ stats, title } ) =>
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => 
                <li key={id} className="item" style={{backgroundColor: getRandomColor()}} >
                    <span className="label">{ label }</span>
                <span className="percentage">{ percentage }%</span>
                </li>
               ) }
        </ul>
    </section>;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;

function getRandomColor() { 
   return '#' + Math.floor(Math.random()*16777215).toString(16);
}
