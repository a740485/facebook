import styled from "styled-components";

export const HomeWrapper = styled.div`
    margin-top: 56px;
    box-sizing: border-box;
    padding: 0 5px 0;
    display: flex;
`;

export const MiddleWrapper = styled.div`
    width: 590px;

    margin: 0 auto;

    @media screen and (max-width: 1100px) {
        left: 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
`;

export const FriendListWrapper = styled.div`
    max-width: 350px;
    width: 20%;
    min-width: 280px;
    height: 100%;
    box-sizing: border-box;
    position: fixed;
    right: 0;
    overflow-y: auto;

    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    :hover {
        ::-webkit-scrollbar:vertical {
            width: 12px;
            height: 100%;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 2px solid rgb(228, 230, 233);
            background-color: rgb(180, 184, 188);
        }
    }
`;

// ========== Info List ==========
export const InfoListWrapper = styled.div`
    max-width: 350px;
    width: 25%;
    height: 100vh;
    position: fixed;
    overflow-y: auto;

    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    :hover {
        ::-webkit-scrollbar:vertical {
            width: 12px;
            height: 100%;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 2px solid rgb(228, 230, 233);
            background-color: rgb(180, 184, 188);
        }
    }

    @media screen and (max-width: 1100px) {
        position: absolute;
        visibility: hidden;
    }
`;

export const ListItem = styled.div`
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
    :hover {
        background: blue;
        border-radius: 10px;
        background: rgb(223, 225, 228);
    }
    :first-child {
        margin-top: 30px;
    }

    :last-child {
        margin-bottom: 10px;
    }

    img {
        height: 36px;
        width: 36px;
    }

    p {
        margin-left: 10px;
        line-height: 19px;
        font-size: 15px;
        font-weight: 500;
        color: #050505;
    }
`;

// ========== Friend List ==========
export const FriendMsgList = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-left: 10px;
    border-bottom: solid 1px rgb(195, 198, 201);
    margin-bottom: 50px;
`;

export const FriendListMsgTitle = styled.div`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;

    position: relative;
    h3 {
        color: rgb(100, 102, 106);
        line-height: 20px;
        font-size: 17px;
        float: left;
    }

    .item {
        box-sizing: border-box;
        width: 32px;
        height: 32px;
        padding: 7px;
        margin-top: -6px;
        margin-left: 5px;
        float: right;
        line-height: 20px;
        font-size: 20px;
        cursor: pointer;

        :hover {
            background: rgb(225, 227, 230);
            border-radius: 50%;
        }
    }
`;

// ========== PostVlog ==========

export const PostVlogBox = styled.div`
    margin-top: 40px;
    width: 500px;
    height: 123px;
    box-sizing: border-box;
    padding: 12px 16px 10px 16px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgb(205, 205, 205);

    > div {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    > div ~ div {
        border-top: 1px solid #aaa;
    }
`;

export const VlogUpper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 10px;
    img {
        width: 40px;
        height: 40px;
    }
    p {
        box-sizing: border-box;
        width: 418px;
        margin-left: 10px;
        padding-left: 10px;
        line-height: 32px;
        color: rgb(144, 146, 150);
        background: rgb(238, 240, 243);
        border-radius: 20px;
        cursor: pointer;
        :hover {
            background: rgb(226, 228, 231);
        }
    }
`;

export const VlogItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    .item {
        font-size: 25px;
    }

    .video {
        color: rgb(238, 36, 64);
    }

    .pic {
        color: rgb(60, 181, 87);
    }
    .smile {
        color: rgb(246, 176, 36);
    }

    > div {
        margin: 5px 10px;
        width: 156px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover {
            background: rgb(242, 242, 242);
            border-radius: 5px;
        }
        > p {
            margin-left: 10px;
        }
    }
`;

// ========== Content ==========
export const ContentListItem = styled.div`
    width: 500px;
    background: #fff;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgb(205, 205, 205);

    .mainImg {
        width: 500px;
    }
`;

export const ContentListOwner = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    margin-bottom: 12px;
    padding: 12px 16px 0;

    > img {
        float: left;
        height: 40px;
        width: 40px;
    }

    > .item {
        box-sizing: border-box;
        height: 36px;
        width: 36px;
        padding: 10px;
        float: right;
        :hover {
            background: rgb(242, 242, 242);
            border-radius: 50%;
        }
    }
`;

export const ListItemOwner = styled.div`
    height: 44px;
    float: left;
    margin-left: 10px;

    > h1 {
        font-size: 15px;
        font-weight: 500;
    }

    > p {
        margin-top: 5px;
        font-size: 13px;
        color: rgb(200, 200, 200);
    }
`;

export const ContentListTitle = styled.div`
    padding: 5px 16px;
    line-height: 19px;
    font-size: 15px;
`;

export const Statistics = styled.div`
    height: 42px;
    width: 468px;
    padding: 10px 0;
    box-sizing: border-box;
    margin: 0 16px;

    > .item {
        float: left;
        margin-right: 1px;
        border: 1px solid #fff;
        text-align: center;
        cursor: pointer;
    }

    > p {
        float: right;
        margin-left: 10px;
        color: rgb(150, 150, 150);
        line-height: 19px;
        font-size: 15px;
        text-align: center;
        cursor: pointer;
    }
`;

export const DoSomeThingBox = styled.div`
    height: 42px;
    width: 468px;
    border-top: 1px solid rgb(199, 202, 206);
    padding: 10px 0;
    box-sizing: border-box;
    margin: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    > .item {
        display: flex;
        height: 42px;
        width: 139px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        > h1 {
            margin-left: 5px;
        }

        :hover {
            background: rgb(242, 242, 242);
            height: 35px;
            border-radius: 5px;
        }
    }
`;
