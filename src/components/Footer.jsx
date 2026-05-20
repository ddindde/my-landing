export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            근성 로그
            <span>Muscle Archive</span>
          </div>
          <p>
            Made by 수도 &nbsp;·&nbsp;{" "}
            <a href="mailto:ttq921116@naver.com">ttq921116@naver.com</a>
          </p>
        </div>
        <div className="footer-sns">
          <a className="sns-btn" href="#">
            IG
          </a>
          <a className="sns-btn" href="#">
            X
          </a>
          <a className="sns-btn" href="#">
            YT
          </a>
        </div>
      </div>
    </footer>
  );
}
