import React from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { actionCreators } from "./store";

class Header extends React.Component {
    render() {
        const { loginState, handleTestClick, apiData } = this.props;
        console.log(loginState);
        return (
            <HeaderWrapper>
                header: {loginState}
                <button onClick={handleTestClick}>test</button>
                <p>{apiData}</p>
            </HeaderWrapper>
        );
    }

    componentDidMount() {
        this.props.getData();
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["header", "loginState"]),
    apiData: state.getIn(["header", "apiData"]),
});

const mapDispatch = (dispatch) => ({
    handleTestClick() {
        dispatch(actionCreators.testAction());
    },
    getData() {
        console.log("dispatch: getData()");
        dispatch(actionCreators.getDataInfo());
    },
});
export default connect(mapState, mapDispatch)(Header);
