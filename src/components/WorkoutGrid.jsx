import { useState } from "react";
import { workouts } from "../data/workouts";

function WorkoutCard({ workout, onClick }) {
  return (
    <article
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "#111111",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.2s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "rgba(57,255,20,0.3)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
      }}
    >
      {/* 상단 날짜 + 이모지 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            color: "#39FF14",
            letterSpacing: "0.08em",
            fontWeight: "500",
          }}
        >
          {workout.date}
        </span>
        <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
          {workout.condition.split(" ")[0]}
        </span>
      </div>

      {/* 제목 */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#FFFFFF",
          marginBottom: "8px",
        }}
      >
        {workout.title}
      </h3>

      {/* 운동 목록 */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "#A0A0A0",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        {workout.exercises.map((e) => e.name).join(" · ")}
      </p>

      {/* 구분선 + 태그 */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "16px",
          display: "flex",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            background: "rgba(57,255,20,0.1)",
            color: "#39FF14",
            padding: "5px 12px",
            borderRadius: "6px",
            fontWeight: "600",
            border: "1px solid rgba(57,255,20,0.2)",
          }}
        >
          볼륨 {workout.volume.toLocaleString()}kg
        </span>
        <span
          style={{
            fontSize: "0.72rem",
            background: "rgba(255,255,255,0.05)",
            color: "#A0A0A0",
            padding: "5px 12px",
            borderRadius: "6px",
            fontWeight: "500",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {workout.duration}분
        </span>
      </div>
    </article>
  );
}

export default function WorkoutGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "80px 24px 60px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* 헤더 */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#39FF14",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Muscle Archive
          </p>
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "900",
              color: "#FFFFFF",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            운동 기록
          </h2>
          <p style={{ color: "#A0A0A0", fontSize: "0.9rem" }}>
            카드를 클릭하면 상세 내용을 볼 수 있어요.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onClick={() => setSelected(workout)}
            />
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "16px",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "32px",
              maxWidth: "440px",
              width: "100%",
              boxShadow: "0 32px 64px rgba(0,0,0,0.6)",
            }}
          >
            {/* 모달 헤더 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                    {selected.condition.split(" ")[0]}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#39FF14",
                      fontWeight: "600",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {selected.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#FFFFFF",
                  }}
                >
                  {selected.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#A0A0A0",
                    marginTop: "3px",
                  }}
                >
                  {selected.condition.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  color: "#A0A0A0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>

            {/* 운동 목록 */}
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#39FF14",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              운동 목록
            </p>
            <div style={{ marginBottom: "20px" }}>
              {selected.exercises.map((ex, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    {ex.name}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "#A0A0A0" }}>
                    {ex.weight > 0 ? `${ex.weight}kg × ` : ""}
                    {ex.sets}세트 × {ex.reps}회
                  </span>
                </div>
              ))}
            </div>

            {/* 통계 */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "rgba(57,255,20,0.1)",
                  color: "#39FF14",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  border: "1px solid rgba(57,255,20,0.2)",
                }}
              >
                총 볼륨 {selected.volume.toLocaleString()}kg
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  color: "#A0A0A0",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {selected.duration}분
              </span>
            </div>

            {/* 메모 */}
            {selected.memo && (
              <div
                style={{
                  background: "#1A1A1A",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#39FF14",
                    marginBottom: "6px",
                    fontWeight: "600",
                  }}
                >
                  메모
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#A0A0A0",
                    lineHeight: 1.6,
                  }}
                >
                  {selected.memo}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
