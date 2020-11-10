import styled from "styled-components";

export const HeaderBlock = styled.div`
    width: 100%;
    height: 56px;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 8px #ddd;
    z-index: 1;
`;

export const Left = styled.div`
    position: absolute;
    width: 360px;
    /* height: 56px; */
    background: #fff;
    float: left;
    box-sizing: border-box;
    background-color: none;
    position: relative;
    border-radius: 0 10px 10px 10px;
    &.focus {
        z-index: 1;
        position: absolute;
        box-shadow: -5px 3px 10px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const SearchListBody = styled.div`
    width: 360px;
    /* height: 100px; */
    background: #fff;
    border-radius: 0 0 10px 10px;

    .noData {
        color: rgb(188, 190, 192);
    }
`;

export const SearchListItem = styled.div`
    height: 56px;
    box-sizing: border-box;
    margin: 0 10px 8px;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background: #eee;
    }
    .iconBox {
        height: 36px;
        width: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ddd;
        border-radius: 50%;
        .icon {
            font-size: 20px;
            line-height: 20px;
        }
    }
    .item {
        height: 20px;
        width: 200px;
        line-height: 19px;
        font-size: 16px;
    }

    .deleteBox {
        height: 28px;
        width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #aaa;
        :hover {
            background: #ddd;
        }
    }
`;

export const SearchListHeader = styled.div`
    width: 360px;
    height: 56px;
    display: flex;
    align-items: center;

    .logo {
        width: 40px;
        height: 40px;
        margin-left: 13px;
    }

    .search {
        position: absolute;
        left: 60px;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        width: 40px;
        padding: 10px;
        color: rgb(91, 93, 97);
        z-index: 10;
        display: flex;
        cursor: pointer;
        .searchIcon {
            height: 20px;
            width: 20px;
        }

        @media screen and (max-width: 1260px) {
            /* font-size: 20px; */
            border-radius: 50%;
            background-color: rgb(238, 240, 243);
        }
    }

    .searchInput {
        width: 280px;
    }
`;

export const Search = styled.input.attrs({
    placeholder: "搜尋 Facebook",
})`
    width: 280px;
    height: 40px;
    box-sizing: border-box;
    position: relative;
    background-color: rgb(238, 240, 243);
    padding-left: 40px;
    border-radius: 40px;
    line-height: 30px;
    font-size: 17px;
    border: none;
    margin-left: 7px;
    z-index: 2;
    &::placeholder {
        color: #999;
    }
    &:focus {
        border: none;
        outline: none;
    }

    @media screen and (max-width: 1260px) {
        width: 0;
    }
`;

// ========== Center ===========
export const Center = styled.div`
    max-width: 590px;
    width: 40%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    /* right: 80px; */
    z-index: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CenterItem = styled.div`
    max-width: 111px;
    min-width: 52px;
    width: 180px;
    position: relative;
    box-sizing: border-box;
    height: 56px;
    line-height: 30px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.onPage {
        ::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 3px;
            top: 53px;
            background: rgb(23, 108, 240);
        }
    }
    &.notPage {
        &:hover {
            height: 50px;
            background: rgb(242, 242, 242);
            border-radius: 5px;
        }
    }

    .item {
        color: rgb(172, 173, 175);
    }
    .onPage {
        color: rgb(23, 108, 240);
    }
`;

export const Right = styled.div`
    /* width: 320px; */
    position: relative;
    margin-right: 10px;
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    overflow: visible;
`;

export const UserInfo = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 60px;
    cursor: pointer;
    user-select: none;
    :hover {
        background: rgb(242, 242, 242);
    }

    > {
        height: 28px;
        width: 28px;

        background: rgb(17, 241, 144);
        border-radius: 100%;
    }

    @media screen and (max-width: 1260px) {
        visibility: hidden;
    }
`;

export const UserName = styled.div`
    height: 19px;
    display: inline-block;
    margin: 0 10px;
    color: #050505;
`;

export const RightItem = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(222, 224, 230);
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        background: rgb(213, 214, 220);
    }
`;

export const AccountView = styled.div`
    width: 360px;
    max-height: 100vh;
    min-height: 76px;
    background: #fff;
    position: absolute;
    cursor: default;
    top: 56px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px 8px;
    right: 0;
    z-index: 2;
    overflow-y: auto;
    box-shadow: 0 2px 3px 1px #ccc;
`;

export const AccountItem = styled.div`
    height: 52px;
    width: 344px;
    box-sizing: border-box;
    padding: 0 8px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background: #eee;
    }
    .iconBox {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        background: #ddd;
        border-radius: 50%;
    }

    p {
        width: 227px;
        height: 20px;
        line-height: 20px;
        margin-right: 10px;
        user-select: none;
    }

    .nextIcon {
        height: 24px;
        width: 24px;
        color: #aaa;
    }
`;
