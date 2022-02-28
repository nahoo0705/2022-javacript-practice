const quotes = [
    {
        quote: "세상이 널 버렸다고 생각하지마라. 세상은 널 가진적이 없다.",
        author: "에르빈 롬멜",
    },
    {
        quote: "친구란, 내 슬픔을 자기 등에 지고 가는 자.",
        author: "인디언 명언",
    },{
        quote: "모든 시련은 결국에는 축복이 되기 마련이다.",
        author: "리처드 바흐",
    },{
        quote: "당신이 높은 지위에 오르기를 원한다면 반드시 된다는 신념을 품어라.",
        author: "나폴레옹 힐",
    },{
        quote: "삶에서 끌어내는 즐거움은 얼마나 환경 탓을 하는지에 반비례한다.",
        author: "앤드류 매튜스",
    },{
        quote: "녹은 쇠에서 생기지만 차차 그 쇠를 먹어버린다. 이와 마찬가지로 마음이 옳지 못하면 그 마음이 사람을 먹어버린다.",
        author: "법화경",
    },{
        quote: "인생에서 가장 큰 공백은 아는 것과 행동하는 것 사이에 있다.",
        author: "딕 빅스",
    },{
        quote: "미숙한 사랑은 '당신이 필요해서 당신을 사랑한다'고 하지만 성숙한 사랑은 '사랑하니까 당신이 필요하다'고 한다.",
        author: "윈스턴 처칠",
    },{
        quote: "텔레비전은 현실이 아니다 현실에서는 커피를 마셨으면 일을 시작해야 한다.",
        author: "빌 게이츠",
    },{
        quote: "사람이 먼 곳을 향하는 생각이 없다면 큰일을 이루기 어렵다.",
        author: "안중근",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
