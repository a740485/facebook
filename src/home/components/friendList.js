import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faVideo,
    faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import {
    FriendListWrapper,
    FriendMsgList,
    FriendListMsgTitle,
    ListItem,
} from "../style";
import { actionCreators } from "../store";

class FriendList extends React.Component {
    render() {
        const { friendList } = this.props;
        return (
            <FriendListWrapper>
                <FriendMsgList>
                    <FriendListMsgTitle>
                        <h3>聯絡人</h3>
                        <FontAwesomeIcon className="item" icon={faEllipsisH} />
                        <FontAwesomeIcon className="item" icon={faVideo} />
                        <FontAwesomeIcon className="item" icon={faSearch} />
                    </FriendListMsgTitle>
                    {friendList.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img src={item.get("img")} alt="11" />
                                <p>{item.get("name")}</p>
                            </ListItem>
                        );
                    })}
                </FriendMsgList>
            </FriendListWrapper>
        );
    }

    componentDidMount() {
        this.props.getFriendList();
    }
}
const mapState = (state) => ({
    friendList: state.getIn(["home", "friendList"]),
});

const mapDispatch = (dispatch) => ({
    getFriendList() {
        dispatch(actionCreators.getFriendList());
    },
});

export default connect(mapState, mapDispatch)(FriendList);
