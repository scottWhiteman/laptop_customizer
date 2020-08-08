import React from 'react';
import SummaryTotalNumber from '../SummaryTotalNumber/SummaryTotalNumber';

class SummaryTotal extends React.Component {
    render() {
        const total = Object.keys(this.props.total).reduce(
            (acc, curr) => acc + this.props.total[curr].cost,
            0
          );
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <SummaryTotalNumber total={total}/>
            </div>
        );
    }
}

export default SummaryTotal;