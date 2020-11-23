import React, { Component } from 'react';
import slugify from 'slugify';
import ItemOptions from '../ItemOptions/ItemOptions'


class ListItems extends Component {
    render() {
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <ItemOptions 
                    selected={this.props.selected}
                    itemHash={itemHash}
                    feature={this.props.feature}
                    item={item}
                    key={item.name}
                    updateFeature={this.props.updateFeature}
                />
            )
        });
        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}

export default ListItems;