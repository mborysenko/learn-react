import React, {PropTypes} from "react";

export class Elipsis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frame: 1,
            intervalSubscription: null
        };
    }

    componentDidMount() {
        this.setState({intervalSubscription: setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            })
        }, this.props.interval)});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalSubscription);
    }

    render() {
        let dots = this.state.frame % (this.props.dots +1);
        let text = "";
        while (dots > 0) {
            text += ".";
            dots--;
        }
        return <span {...this.props}>{text}</span>;
    }
}

Elipsis.defaultProps = {
    interval: 300,
    dots: 3
};

Elipsis.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};

