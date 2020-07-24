import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class SummaryBox extends React.Component {
    render() {
        const summaryItems = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
                <SummaryItem
                    key={featureHash}
                    id={featureHash}
                    feature={feature}
                    selected={selectedOption.name}
                    cost={USCurrencyFormat.format(selectedOption.cost)}/>
            );
        });
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summaryItems}
                <SummaryTotal
                    total={USCurrencyFormat.format(total)}/>
          </section>
        )
    }
}

export default SummaryBox;