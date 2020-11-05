import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faHome,
    faStore,
    faUsers,
    faGamepad,
    faPlus,
    faBell,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faYoutube,
    faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import {
    HeaderWrapper,
    Left,
    Search,
    Center,
    Right,
    CenterItem,
    UserInfo,
    UserName,
    RightItem,
} from "./style";

class Header extends React.Component {
    render() {
        const { userInfo } = this.props;
        console.log();
        return (
            <HeaderWrapper>
                <Left>
                    <Link to="/">
                        <FontAwesomeIcon className="logo" icon={faFacebook} />
                    </Link>

                    <FontAwesomeIcon className="search" icon={faSearch} />
                    <Search />
                </Left>
                <Center>
                    <CenterItem>
                        <FontAwesomeIcon className="item" icon={faHome} />
                    </CenterItem>
                    <CenterItem>
                        <FontAwesomeIcon className="item" icon={faYoutube} />
                    </CenterItem>
                    <CenterItem>
                        <FontAwesomeIcon className="item" icon={faStore} />
                    </CenterItem>
                    <CenterItem>
                        <FontAwesomeIcon className="item" icon={faUsers} />
                    </CenterItem>
                    <CenterItem>
                        <FontAwesomeIcon className="item" icon={faGamepad} />
                    </CenterItem>
                </Center>
                <Right>
                    <UserInfo>
                        <img src={userInfo.get("img")} alt="11" />
                        <UserName>{userInfo.get("name")}</UserName>
                    </UserInfo>
                    <RightItem>
                        <FontAwesomeIcon className="item" icon={faPlus} />
                    </RightItem>
                    <RightItem>
                        <FontAwesomeIcon
                            className="item"
                            icon={faFacebookMessenger}
                        />
                    </RightItem>
                    <RightItem>
                        <FontAwesomeIcon className="item" icon={faBell} />
                    </RightItem>
                    <RightItem>
                        <FontAwesomeIcon className="item" icon={faCaretDown} />
                    </RightItem>
                </Right>
            </HeaderWrapper>
        );
    }

    componentDidMount() {
        this.props.getUserInfo();
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["header", "loginState"]),
    userInfo: state.getIn(["header", "userInfo"]),
});

const mapDispatch = (dispatch) => ({
    getUserInfo() {
        dispatch(actionCreators.getUserInfo());
    },
});
export default connect(mapState, mapDispatch)(Header);
