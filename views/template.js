module.exports = {
  template: (email, link) => {
    return `
      <section class="
        display: block;
        margin-left: 300px;
        margin-top: 50px;
        width: 1500px;
        height: 750px;
        background-color: #eee;
        font-size: 10px;
      > 
        <article style="
          display: block;
          width: 900px;
          height: 650px;
          background-color: white;
          display: flex;
          align-items: center;
          border-radius: 25px;
          box-sizing: border-box;
          font-size: 10px;"
        > 
          <img style="margin-top: 20px;" src="https://duzzle.emirim.kr/logo.png" alt="logo" />
          <h1 style="
            margin: 0;
            margin-top: 55px;
            margin-bottom: 40px;
            font-size: 28px;
            font-weight: bold;"
          >이메일 주소 인증</h1>
          <div style="
            font-weight: normal;
            font-size: 18px;
            color: #2d2d2d;
            line-height: 1.75;
            margin-bottom: 40px;
          ">
            <span style="color: #2ddca7 !important; text-decoration: underline;">${email}</span> 님, 회원가입의 마지막 단계입니다.<br />아래의
            버튼을 클릭하여 이메일 인증을 완료해주세요. 감사합니다.
          </div>
          <div style="
            padding-top: 20px;
            text-align: center;
            background-color: #2ddca7;
            border-radius: 10px;
            width: 180px;
            height: 60px;
            margin-bottom: 90px;
          ">
            <a href="${link}" style="
              text-decoration: none;
              color: white;
              font-size: 24px;
              font-weight: bold;
            ">인증하기</a>
          </div>
          <span style="
            display: block;
            margin-bottom: 12px;
            font-size: 18px;
            color: #6d6d6d;
            font-weight: 500;"
          >DUZZLE 팀 드림</span>
          <a href="https://duzzle.emirim.hs.kr" style="
            color: #bbbbbb;
            font-size: 18px;
            font-weight: normal;
            text-decoration: none;"
          >https://duzzle.emirim.hs.kr</span>
        </article>
      </section>
    `;
  },
};
