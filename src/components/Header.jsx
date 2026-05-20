export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <a href="#home" className="logo">
          <span className="logo-dot"></span>
          FitLog
        </a>
        <nav>
          <a href="#home">홈</a>
          <a href="#features">소개</a>
          <a href="#log">운동기록</a>
          <a href="#home" className="nav-cta">
            시작하기
          </a>
        </nav>
      </div>
    </header>
  );
}
