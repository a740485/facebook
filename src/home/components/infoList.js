import React from "react";
import { connect } from "react-redux";
import { InfoListWrapper, ListItem } from "../style";

class InfoList extends React.Component {
    render() {
        return (
            <InfoListWrapper>
                <ListItem>
                    <img src="http://fakeimg.pl/28x28" alt="11" />
                    <p>user name</p>
                </ListItem>
                <ListItem>
                    <img src="http://fakeimg.pl/28x28" alt="11" />
                    <p>新冠病毒資訊中心</p>
                </ListItem>
                <ListItem>
                    <img src="http://fakeimg.pl/28x28" alt="11" />
                    <p>user name</p>
                </ListItem>
            </InfoListWrapper>
        );
    }
}

const mapState = (state) => ({
    friendList: state.getIn(["home", "friendList"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(InfoList);
