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
import { constants } from "../common/header/store";
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeWrapper>
                    <InfoList />
                    <MiddleWrapper>
                        <div>動態</div>
                        <ContentWrapper>
                            <PostVlog />
                            <ContentListItem>
                                <ContentListOwner>
                                    <img
                                        src="http://fakeimg.pl/28x28"
                                        alt="11"
                                    />
                                    <ListItemOwner>
                                        <h1>東森新聞</h1>
                                        <p>4小時</p>
                                    </ListItemOwner>
                                    <FontAwesomeIcon
                                        className="item"
                                        icon={faEllipsisH}
                                    />
                                </ContentListOwner>
                                <ContentListTitle>
                                    <p>#放假去哪編：又多4人確診了！</p>
                                    <p>最新消息都在這👉https://goo.gl/Ui51Xe</p>
                                    <p>#武漢肺炎 #確診 #莊人祥</p>
                                </ContentListTitle>
                                <img src="http://fakeimg.pl/500x260" alt="11" />
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
                                    <p className="item">171</p>
                                    <p>1次分享</p>
                                    <p>2則留言</p>
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
                        </ContentWrapper>
                    </MiddleWrapper>
                    <FriendList />
                </HomeWrapper>
            </React.Fragment>
        );
    }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Home);
