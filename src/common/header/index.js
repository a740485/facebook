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
    UserImg,
    UserName,
    RightItem,
} from "./style";

class Header extends React.Component {
    render() {
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
                        <UserImg />
                        <UserName>一二三</UserName>
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
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(Header);
