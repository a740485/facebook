import styled from "styled-components";

export const BodyWrapper = styled.div`
    width: 100%;
    height: 400px;
    padding: 92px 0 132px;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const LoginWrapper = styled.div`
    margin-top: 40px;
    width: 396px;
    padding: 10px 0 24px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 5px 2px #ccc;
    .inputBox {
        width: 396px;
        height: 128px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .line {
        height: 1px;
        width: 364px;
        margin: 20px 16px;
        background: #ddd;
    }
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 364px;
    height: 52px;
    padding: 14px 16px;
    border: 1px solid rgb(221, 223, 226);
    border-radius: 6px;
    color: rgb(29, 33, 41);
    font-size: 18px;
    line-height: 16px;
    vertical-align: middle;
    cursor: text;

    :focus {
        -moz-outline-radius: 6px;
        outline: 1px solid rgb(24, 119, 242);
    }
    ::-webkit-input-placeholder {
        color: #bbb;
    }
`;

export const Button = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 6px;
    width: 364px;
    height: 48px;
    background: rgb(24, 119, 242);
    color: #fff;
    font-weight: 700;
    padding: 0 16px;
    border-radius: 6px;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    cursor: pointer;
`;

export const ForgotPassWord = styled.div`
    width: 100%;
    height: 48px;

    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: auto;
        height: auto;
        color: rgb(24, 119, 242);
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const CreateButton = styled.div`
    width: 122px;
    height: 48px;
    margin: 26px auto 0;
    background: rgb(66, 183, 42);
    color: #fff;
    font-weight: 700;
    border-radius: 6px;
    text-align: center;
    line-height: 48px;
    font-size: 18px;
`;
