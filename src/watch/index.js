import React from "react";
import Header from "../common/header";
import { connect } from "react-redux";
import { actionCreators as headerActionCreators } from "../common/header/store";
class Watch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Watch</h1>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.changePage();
    }
}
const mapDispatch = (dispatch) => ({
    changePage() {
        dispatch(headerActionCreators.changePageIn("watch"));
    },
});
export default connect(null, mapDispatch)(Watch);
