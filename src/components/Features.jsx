export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-header">
        <h3>
          간단하지만
          <br />
          강력한 기능들
        </h3>
        <p>
          운동 기록부터 성장 분석까지, 필요한 모든 것을 하나의 앱에서
          경험하세요.
        </p>
      </div>
      <div className="features-grid">
        <article className="feature-card">
          <span className="feature-number">01</span>
          <div className="feature-icon">💪</div>
          <h4>운동 기록 저장</h4>
          <p>
            운동 종목, 세트, 중량, 컨디션까지 체계적으로 기록하고 관리하세요.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-number">02</span>
          <div className="feature-icon">📈</div>
          <h4>성장 데이터 분석</h4>
          <p>
            중량 증가와 운동 빈도를 시각적으로 확인하며 나의 성장을 추적하세요.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-number">03</span>
          <div className="feature-icon">🔗</div>
          <h4>루틴 & 기록 공유</h4>
          <p>나만의 운동 루틴을 공유하고 다른 사람의 루틴도 참고해보세요.</p>
        </article>
      </div>
    </section>
  );
}
