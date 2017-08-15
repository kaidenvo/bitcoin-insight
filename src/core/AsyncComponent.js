import React, { PureComponent } from 'react';

export default (importComponent, ops = {}) => class AsyncComponent extends PureComponent {
    state = {}

    async componentDidMount() {
        const { default: Component } = await importComponent();
        this.setState({
            Component,
        });
    }

    render() {
        const { Component } = this.state;
        return Component ? <Component { ...ops} { ...this.props} /> : null;
    }
}
