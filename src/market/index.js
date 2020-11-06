import React from "react";
import { connect } from "react-redux";
import Header from "../common/header";
import { actionCreators as headerActionCreators } from "../common/header/store";
class Market extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Market</h1>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.changePage();
    }
}

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    changePage() {
        dispatch(headerActionCreators.changePageIn("market"));
    },
});
export default connect(mapState, mapDispatch)(Market);
