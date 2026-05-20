import { useState } from "react";
import { workouts } from "../data/workouts";

function WorkoutCard({ workout, onClick }) {
  return (
    <article
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "white",
        borderRadius: "20px",
        padding: "24px",
        border: "1px solid rgba(92,61,30,0.1)",
        transition: "all 0.2s",
        boxShadow: "0 2px 8px rgba(26,20,16,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,20,16,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,20,16,0.06)";
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
            color: "#C49A6C",
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
          color: "#1A1410",
          marginBottom: "8px",
          fontFamily: "'Noto Serif KR', serif",
        }}
      >
        {workout.title}
      </h3>

      {/* 운동 목록 */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "#8B5E3C",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        {workout.exercises.map((e) => e.name).join(" · ")}
      </p>

      {/* 구분선 */}
      <div
        style={{
          borderTop: "1px solid rgba(92,61,30,0.08)",
          paddingTop: "16px",
          display: "flex",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            background: "#F5EFE6",
            color: "#5C3D1E",
            padding: "5px 12px",
            borderRadius: "100px",
            fontWeight: "500",
          }}
        >
          볼륨 {workout.volume.toLocaleString()}kg
        </span>
        <span
          style={{
            fontSize: "0.72rem",
            background: "#F5EFE6",
            color: "#5C3D1E",
            padding: "5px 12px",
            borderRadius: "100px",
            fontWeight: "500",
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
    <section style={{ background: "#F5EFE6", padding: "80px 24px 60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* 헤더 */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C49A6C",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            Muscle Archive
          </p>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "2.4rem",
              fontWeight: "900",
              color: "#1A1410",
              marginBottom: "8px",
            }}
          >
            운동 기록
          </h2>
          <p style={{ color: "#8B5E3C", fontSize: "0.9rem" }}>
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
            background: "rgba(26,20,16,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "16px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "32px",
              maxWidth: "440px",
              width: "100%",
              boxShadow: "0 32px 64px rgba(26,20,16,0.2)",
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
                      color: "#C49A6C",
                      fontWeight: "500",
                    }}
                  >
                    {selected.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1A1410",
                    fontFamily: "'Noto Serif KR', serif",
                  }}
                >
                  {selected.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#8B5E3C",
                    marginTop: "3px",
                  }}
                >
                  {selected.condition.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "#F5EFE6",
                  border: "none",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  fontSize: "1rem",
                  color: "#8B5E3C",
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
                color: "#C49A6C",
                marginBottom: "12px",
                fontWeight: "500",
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
                    borderBottom: "1px solid #F5EFE6",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#1A1410",
                    }}
                  >
                    {ex.name}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "#8B5E3C" }}>
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
                  background: "#F5EFE6",
                  color: "#5C3D1E",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontWeight: "500",
                }}
              >
                총 볼륨 {selected.volume.toLocaleString()}kg
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "#F5EFE6",
                  color: "#5C3D1E",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontWeight: "500",
                }}
              >
                {selected.duration}분
              </span>
            </div>

            {/* 메모 */}
            {selected.memo && (
              <div
                style={{
                  background: "#FAF7F2",
                  borderRadius: "14px",
                  padding: "16px",
                  border: "1px solid rgba(92,61,30,0.08)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C49A6C",
                    marginBottom: "6px",
                    fontWeight: "500",
                  }}
                >
                  메모
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#5C3D1E",
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
