import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faImages, faLaugh } from "@fortawesome/free-solid-svg-icons";
import { PostVlogBox, VlogUpper, VlogItem } from "../style";
// import { actionCreators } from "../store";
class PostVlog extends React.Component {
    render() {
        return (
            <PostVlogBox>
                <VlogUpper>
                    <img src="http://fakeimg.pl/28x28" alt="11" />
                    <p>阿寶，在想些什麼？</p>
                </VlogUpper>
                <VlogItem>
                    <div>
                        <FontAwesomeIcon
                            className="item video"
                            icon={faVideo}
                        />
                        <p>直播視訊</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="item pic" icon={faImages} />
                        <p>相片 / 影片</p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            className="item smile"
                            icon={faLaugh}
                        />
                        <p>感受 / 活動</p>
                    </div>
                </VlogItem>
            </PostVlogBox>
        );
    }
}

const mapState = (state) => ({
    friendList: state.getIn(["home", "friendList"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(PostVlog);
