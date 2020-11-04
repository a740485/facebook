const defaultState = {
    friendList: [
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_1",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_2",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_3",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_4",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_5",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_6",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_7",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_8",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_9",
        },
        {
            img: "http://fakeimg.pl/28x28",
            name: "friend_10",
        },
    ],
    mainData: [
        {
            id: 1,
            ownerImg: "http://fakeimg.pl/28x28",
            ownerName: "東森新聞",
            time: "4小時",
            title:
                "#放假去哪編：又多4人確診了！ 最新消息都在這👉https://goo.gl/Ui51Xe #武漢肺炎 #確診",
            img: "http://fakeimg.pl/500x260",
            likeAmount: 171,
            msgAmount: 2,
            shareAmount: 1,
        },
    ],
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
