import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators } from "./store";
import {
    BodyWrapper,
    LoginWrapper,
    Input,
    Button,
    ForgotPassWord,
    CreateButton,
} from "./style";

class Login extends React.Component {
    render() {
        const { loginState, handleLogin } = this.props;

        if (loginState) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <BodyWrapper>
                    <LoginWrapper>
                        <div className="inputBox">
                            <Input
                                placeholder="電子郵件地址或手機號碼"
                                ref={(input) => {
                                    this.account = input;
                                }}
                            />
                            <Input
                                placeholder="密碼"
                                type="password"
                                ref={(input) => {
                                    this.password = input;
                                }}
                            />
                        </div>
                        <Button
                            onClick={() =>
                                handleLogin(this.account, this.password)
                            }
                        >
                            登入
                        </Button>
                        <ForgotPassWord>
                            <p>忘記密碼?</p>
                        </ForgotPassWord>
                        <div className="line" />
                        <CreateButton>建立新帳號</CreateButton>
                    </LoginWrapper>
                </BodyWrapper>
            </React.Fragment>
        );
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["login", "loginState"]),
});

const mapDispatch = (dispatch) => ({
    handleLogin(accountDom, passwordDom) {
        dispatch(actionCreators.login(accountDom.value, passwordDom.value));
    },
});
export default connect(mapState, mapDispatch)(Login);
