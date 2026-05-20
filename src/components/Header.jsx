export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <a href="#home" className="logo">
          근성 로그
          <span>Muscle Archive</span>
        </a>
        <nav>
          <a href="#home">홈</a>
          <a href="#features">기능</a>
          <a href="#home" className="nav-cta">
            시작하기
          </a>
        </nav>
      </div>
    </header>
  );
}
