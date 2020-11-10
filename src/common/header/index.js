import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
    faTimes,
    faCog,
    faQuestionCircle,
    faMoon,
    faSignOutAlt,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebook,
    faYoutube,
    faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreator } from "../../login/store";
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
    AccountView,
    AccountItem,
} from "./style";

class Header extends React.Component {
    getSearchListBody() {
        const {
            searchFocus,
            searchBodyMouseIn,
            handleListBodyEnter,
            handleListBodyLeave,
            searchHistory,
        } = this.props;

        function searchHistoryView() {
            if (searchHistory.size) {
                return searchHistory.map((item, index) => {
                    return (
                        <SearchListItem key={index}>
                            <div className="iconBox">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faClock}
                                />
                            </div>
                            <div className="item">{item}</div>
                            <div className="deleteBox">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </SearchListItem>
                    );
                });
            } else {
                return (
                    <SearchListItem className="noData" key="0">
                        沒有近期搜尋紀錄
                    </SearchListItem>
                );
            }
        }

        if (searchFocus || searchBodyMouseIn) {
            return (
                <SearchListBody
                    onMouseEnter={handleListBodyEnter}
                    onMouseLeave={handleListBodyLeave}
                >
                    {searchHistoryView()}
                </SearchListBody>
            );
        }
    }

    getAccountView() {
        const {
            showAccountView,
            handleAccountViewEnter,
            handleAccountViewLeave,
            hadleLogout,
        } = this.props;
        if (showAccountView) {
            return (
                <AccountView
                    onMouseEnter={handleAccountViewEnter}
                    onMouseLeave={handleAccountViewLeave}
                >
                    <AccountItem>
                        <div className="iconBox">
                            <FontAwesomeIcon icon={faCog} />
                        </div>
                        <p>設定和隱私</p>
                        <FontAwesomeIcon
                            className="nextIcon"
                            icon={faChevronRight}
                        />
                    </AccountItem>
                    <AccountItem>
                        <div className="iconBox">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </div>
                        <p>協助和支援</p>
                        <FontAwesomeIcon
                            className="nextIcon"
                            icon={faChevronRight}
                        />
                    </AccountItem>
                    <AccountItem>
                        <div className="iconBox">
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <p>顯示方式偏好設定</p>
                        <FontAwesomeIcon
                            className="nextIcon"
                            icon={faChevronRight}
                        />
                    </AccountItem>
                    <AccountItem onClick={hadleLogout}>
                        <div className="iconBox">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </div>
                        <p>登出</p>
                        <FontAwesomeIcon
                            className="nextIcon"
                            icon={faChevronRight}
                        />
                    </AccountItem>
                </AccountView>
            );
        }
    }

    render() {
        const {
            loginState,
            userInfo,
            pageIn,
            searchFocus,
            handleInputFocus,
            searchBodyMouseIn,
            handleInputBlur,
            handleAccountViewBlur,
            showAccountView,
            handleAccountViewShow,
        } = this.props;

        if (!loginState) {
            return <Redirect to="/login" />;
        }

        return (
            <React.Fragment>
                <HeaderBlock />
                <HeaderWrapper>
                    <Left
                        className={
                            searchFocus || searchBodyMouseIn ? "focus" : null
                        }
                    >
                        <SearchListHeader>
                            <Link to="/">
                                <FontAwesomeIcon
                                    className="logo"
                                    icon={faFacebook}
                                />
                            </Link>
                            <label
                                htmlFor="headerSearchInput"
                                className="search"
                            >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="searchIcon"
                                />
                            </label>
                            <Search
                                id="headerSearchInput"
                                className={
                                    searchFocus || searchBodyMouseIn
                                        ? "searchInput"
                                        : null
                                }
                                onFocus={() => handleInputFocus()}
                                onBlur={handleInputBlur}
                            />
                        </SearchListHeader>
                        {this.getSearchListBody()}
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
                        <RightItem
                            onBlur={handleAccountViewBlur}
                            onClick={() => {
                                handleAccountViewShow(showAccountView);
                            }}
                        >
                            <FontAwesomeIcon
                                className="item"
                                icon={faCaretDown}
                            />
                        </RightItem>
                        {this.getAccountView()}
                    </Right>
                </HeaderWrapper>
            </React.Fragment>
        );
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["login", "loginState"]),
    userInfo: state.getIn(["login", "userInfo"]),
    pageIn: state.getIn(["header", "pageIn"]),
    searchFocus: state.getIn(["header", "searchFocus"]),
    searchBodyMouseIn: state.getIn(["header", "searchBodyMouseIn"]),
    searchHistory: state.getIn(["header", "searchHistory"]),
    showAccountView: state.getIn(["header", "showAccountView"]),
});

const mapDispatch = (dispatch) => ({
    getUserInfo() {
        dispatch(actionCreators.getUserInfo());
    },
    handleInputFocus() {
        dispatch(actionCreators.getSeachHistory());
        dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur());
    },
    handleListBodyEnter() {
        dispatch(actionCreators.listBodyEnter());
    },
    handleListBodyLeave() {
        dispatch(actionCreators.listBodyLeave());
    },
    handleAccountViewShow(showFlag) {
        dispatch(actionCreators.showAccountView(showFlag));
    },
    handleAccountViewEnter() {
        dispatch(actionCreators.accountViewEnter());
    },
    handleAccountViewLeave() {
        dispatch(actionCreators.accountViewLeave());
    },
    hadleLogout() {
        dispatch(loginActionCreator.accountLogout());
    },
});
export default connect(mapState, mapDispatch)(Header);
