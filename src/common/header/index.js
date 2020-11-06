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
    HeaderBlock,
    HeaderWrapper,
    Left,
    SearchListHeader,
    SearchListBody,
    SearchListItem,
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
        const {
            userInfo,
            pageIn,
            searchFocus,
            handleInputFocus,
            handleInputBlur,
            searchHistory,
        } = this.props;

        return (
            <React.Fragment>
                <HeaderBlock />
                <HeaderWrapper>
                    <Left className={searchFocus ? "focus" : null}>
                        <SearchListHeader>
                            <Link to="/">
                                <FontAwesomeIcon
                                    className="logo"
                                    icon={faFacebook}
                                />
                            </Link>
                            <FontAwesomeIcon
                                className="search"
                                icon={faSearch}
                            />
                            <Search
                                onFocus={() => handleInputFocus()}
                                onBlur={handleInputBlur}
                            />
                        </SearchListHeader>
                        {searchFocus ? (
                            <SearchListBody>
                                {searchHistory.map((item, index) => {
                                    return (
                                        <SearchListItem key={index}>
                                            {item}
                                        </SearchListItem>
                                    );
                                })}
                            </SearchListBody>
                        ) : null}
                    </Left>
                    <Center>
                        <Link to="/">
                            {pageIn.home ? (
                                <CenterItem className="onPage">
                                    <FontAwesomeIcon
                                        className="item onPage"
                                        icon={faHome}
                                    />
                                </CenterItem>
                            ) : (
                                <CenterItem className="notPage">
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faHome}
                                    />
                                </CenterItem>
                            )}
                        </Link>
                        <Link to="/watch">
                            {pageIn.watch ? (
                                <CenterItem className="onPage">
                                    <FontAwesomeIcon
                                        className="item onPage"
                                        icon={faYoutube}
                                    />
                                </CenterItem>
                            ) : (
                                <CenterItem className="notPage">
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faYoutube}
                                    />
                                </CenterItem>
                            )}
                        </Link>
                        <Link to="/market">
                            {pageIn.market ? (
                                <CenterItem className="onPage">
                                    <FontAwesomeIcon
                                        className="item onPage"
                                        icon={faStore}
                                    />
                                </CenterItem>
                            ) : (
                                <CenterItem className="notPage">
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faStore}
                                    />
                                </CenterItem>
                            )}
                        </Link>
                        <Link to="/societies">
                            {pageIn.societies ? (
                                <CenterItem className="onPage">
                                    <FontAwesomeIcon
                                        className="item onPage"
                                        icon={faUsers}
                                    />
                                </CenterItem>
                            ) : (
                                <CenterItem className="notPage">
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faUsers}
                                    />
                                </CenterItem>
                            )}
                        </Link>
                        <Link to="/game">
                            {pageIn.game ? (
                                <CenterItem className="onPage">
                                    <FontAwesomeIcon
                                        className="item onPage"
                                        icon={faGamepad}
                                    />
                                </CenterItem>
                            ) : (
                                <CenterItem className="notPage">
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faGamepad}
                                    />
                                </CenterItem>
                            )}
                        </Link>
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
                            <FontAwesomeIcon
                                className="item"
                                icon={faCaretDown}
                            />
                        </RightItem>
                    </Right>
                </HeaderWrapper>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.getUserInfo();
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["header", "loginState"]),
    userInfo: state.getIn(["header", "userInfo"]),
    pageIn: state.getIn(["header", "pageIn"]),
    searchFocus: state.getIn(["header", "searchFocus"]),
    searchHistory: state.getIn(["header", "searchHistory"]),
});

const mapDispatch = (dispatch) => ({
    getUserInfo() {
        dispatch(actionCreators.getUserInfo());
    },
    handleInputFocus() {
        // dispatch(actionCreators.getSeachHistory());
        dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur());
    },
});
export default connect(mapState, mapDispatch)(Header);
