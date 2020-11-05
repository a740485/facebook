import React from "react";
import { connect } from "react-redux";
import Header from "../common/header";
import InfoList from "./components/infoList";
import FriendList from "./components/friendList";
import PostVlog from "./components/postVlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisH,
    faLaughSquint,
    faThumbsUp,
    faSurprise,
    faComment,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
    HomeWrapper,
    MiddleWrapper,
    ContentWrapper,
    ContentListItem,
    ContentListOwner,
    ListItemOwner,
    ContentListTitle,
    Statistics,
    DoSomeThingBox,
} from "./style";
import { actionCreators } from "./store/";
class Home extends React.Component {
    render() {
        const { mainData } = this.props;
        return (
            <React.Fragment>
                <Header />
                <HomeWrapper>
                    <InfoList />
                    <MiddleWrapper>
                        <div>動態</div>
                        <ContentWrapper>
                            <PostVlog />
                            {mainData.map((item) => {
                                return (
                                    <ContentListItem key={item.get("id")}>
                                        <ContentListOwner>
                                            <img
                                                src={item.get("ownerImg")}
                                                alt="11"
                                            />
                                            <ListItemOwner>
                                                <h1>{item.get("ownerName")}</h1>
                                                <p>{item.get("time")}</p>
                                            </ListItemOwner>
                                            <FontAwesomeIcon
                                                className="item"
                                                icon={faEllipsisH}
                                            />
                                        </ContentListOwner>

                                        {/* dangerouslySetInnerHTML 不會被轉譯 */}
                                        <ContentListTitle
                                            dangerouslySetInnerHTML={{
                                                __html: item.get("title"),
                                            }}
                                        />
                                        <img
                                            className="mainImg"
                                            src={item.get("img")}
                                            alt="11"
                                        />
                                        <Statistics>
                                            <FontAwesomeIcon
                                                className="item"
                                                icon={faThumbsUp}
                                            />
                                            <FontAwesomeIcon
                                                className="item"
                                                icon={faSurprise}
                                            />
                                            <FontAwesomeIcon
                                                className="item"
                                                icon={faLaughSquint}
                                            />
                                            <p className="item">
                                                {item.get("likeAmount")}
                                            </p>
                                            <p>
                                                {item.get("shareAmount")}次分享
                                            </p>
                                            <p>{item.get("msgAmount")}則留言</p>
                                        </Statistics>
                                        <DoSomeThingBox>
                                            <div className="item">
                                                <FontAwesomeIcon
                                                    className="item"
                                                    icon={faThumbsUp}
                                                />
                                                <h1>讚</h1>
                                            </div>
                                            <div className="item">
                                                <FontAwesomeIcon
                                                    className="item"
                                                    icon={faComment}
                                                />
                                                <h1>留言</h1>
                                            </div>
                                            <div className="item">
                                                <FontAwesomeIcon
                                                    className="item"
                                                    icon={faShare}
                                                />
                                                <h1>分享</h1>
                                            </div>
                                        </DoSomeThingBox>
                                    </ContentListItem>
                                );
                            })}
                        </ContentWrapper>
                    </MiddleWrapper>
                    <FriendList />
                </HomeWrapper>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapState = (state) => ({
    mainData: state.getIn(["home", "mainData"]),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeData());
    },
});

export default connect(mapState, mapDispatch)(Home);
