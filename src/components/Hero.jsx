export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <div className="hero-badge fade-up">운동 아카이브 앱</div>
        <h2 className="fade-up delay-1">
          수도의 운동,
          <br />
          <em>기록에서</em>
          <br />
          성장까지
        </h2>
        <p className="fade-up delay-2">
          오늘의 운동과 몸의 변화를 기록하고
          <br />
          성장 과정을 쌓아가는 운동 아카이브.
        </p>
        <div className="hero-actions fade-up delay-3">
          <a href="#" className="btn-primary">
            지금 시작하기
          </a>
          <a href="#features" className="btn-secondary">
            기능 보기 →
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up delay-4">
        <div className="hero-card">
          <p className="card-date">2025년 05월 20일 · 오후 7시</p>
          <p className="card-title">오늘의 하체 루틴</p>
          <div className="workout-item">
            <span className="workout-name">스쿼트</span>
            <span className="workout-detail">
              <span className="workout-badge">PR</span>
              120kg × 5
            </span>
          </div>
          <div className="workout-item">
            <span className="workout-name">레그프레스</span>
            <span className="workout-detail">200kg × 10</span>
          </div>
          <div className="workout-item">
            <span className="workout-name">루마니안 데드리프트</span>
            <span className="workout-detail">90kg × 8</span>
          </div>
          <div className="workout-item">
            <span className="workout-name">레그 컬</span>
            <span className="workout-detail">55kg × 12</span>
          </div>
          <div className="card-stats">
            <div className="stat-box">
              <p className="stat-label">총 볼륨</p>
              <p className="stat-value">
                4,820<span>kg</span>
              </p>
            </div>
            <div className="stat-box">
              <p className="stat-label">운동 시간</p>
              <p className="stat-value">
                68<span>분</span>
              </p>
            </div>
          </div>
        </div>
        <div className="float-card">
          <p className="float-label">이번 달 성장</p>
          <p className="float-value">+12%</p>
          <p className="float-sub">중량 증가율</p>
        </div>
      </div>
    </section>
  );
}
