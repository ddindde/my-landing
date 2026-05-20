import { useState } from "react";
import { workouts } from "../data/workouts";

function WorkoutCard({ workout, onClick }) {
  return (
    <article
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "#a8896c",
            letterSpacing: "0.05em",
          }}
        >
          {workout.date}
        </span>
        <span style={{ fontSize: "1.25rem" }}>
          {workout.condition.split(" ")[0]}
        </span>
      </div>
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#1A1410",
          marginBottom: "8px",
        }}
      >
        {workout.title}
      </h3>
      <p style={{ fontSize: "0.8rem", color: "#8B5E3C", marginBottom: "16px" }}>
        {workout.exercises.map((e) => e.name).join(" · ")}
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        <span
          style={{
            fontSize: "0.75rem",
            background: "#F5EFE6",
            color: "#5C3D1E",
            padding: "4px 12px",
            borderRadius: "100px",
          }}
        >
          볼륨 {workout.volume.toLocaleString()}kg
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            background: "#F5EFE6",
            color: "#5C3D1E",
            padding: "4px 12px",
            borderRadius: "100px",
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
        background: "#F5EFE6",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* 헤더 */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C49A6C",
              marginBottom: "8px",
            }}
          >
            Muscle Archive
          </p>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "2.5rem",
              fontWeight: "900",
              color: "#1A1410",
            }}
          >
            운동 기록
          </h2>
          <p style={{ color: "#8B5E3C", marginTop: "8px", fontSize: "0.9rem" }}>
            카드를 클릭하면 상세 내용을 볼 수 있어요.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "16px",
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
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
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
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>
                    {selected.condition.split(" ")[0]}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#C49A6C" }}>
                    {selected.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1A1410",
                  }}
                >
                  {selected.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#8B5E3C",
                    marginTop: "2px",
                  }}
                >
                  {selected.condition.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  color: "#ccc",
                  cursor: "pointer",
                  lineHeight: 1,
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
                    padding: "10px 0",
                    borderBottom: "1px solid #f0ece6",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#1A1410",
                    }}
                  >
                    {ex.name}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#8B5E3C" }}>
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
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                총 볼륨 {selected.volume.toLocaleString()}kg
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "#F5EFE6",
                  color: "#5C3D1E",
                  padding: "4px 12px",
                  borderRadius: "100px",
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
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C49A6C",
                    marginBottom: "6px",
                  }}
                >
                  메모
                </p>
                <p style={{ fontSize: "0.875rem", color: "#5C3D1E" }}>
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
