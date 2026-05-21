import { useState } from "react";
import { workouts } from "../data/workouts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

function WorkoutCard({ workout, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:border-[#39FF14]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "8px",
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <span
            style={{
              fontSize: "0.72rem",
              color: "#39FF14",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            {workout.date}
          </span>
          <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
            {workout.condition.split(" ")[0]}
          </span>
        </div>
        <CardTitle style={{ color: "#ffffff", fontSize: "1.1rem" }}>
          {workout.title}
        </CardTitle>
        <CardDescription style={{ color: "#A0A0A0", fontSize: "0.8rem" }}>
          {workout.exercises.map((e) => e.name).join(" · ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            gap: "8px",
            paddingTop: "12px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Badge
            style={{
              background: "rgba(57,255,20,0.1)",
              color: "#39FF14",
              border: "1px solid rgba(57,255,20,0.2)",
              fontSize: "0.72rem",
            }}
          >
            볼륨 {workout.volume.toLocaleString()}kg
          </Badge>
          <Badge
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#A0A0A0",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "0.72rem",
            }}
          >
            {workout.duration}분
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default function WorkoutGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "80px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* 헤더 */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#39FF14",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Muscle Archive
          </p>
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: 900,
              color: "#ffffff",
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
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
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

      {/* Dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ffffff",
            maxWidth: "480px",
            padding: "32px",
            borderRadius: "20px",
          }}
        >
          <DialogHeader style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                {selected?.condition.split(" ")[0]}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#39FF14",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                {selected?.date}
              </span>
            </div>
            <DialogTitle
              style={{
                color: "#ffffff",
                fontSize: "1.3rem",
                marginBottom: "6px",
              }}
            >
              {selected?.title}
            </DialogTitle>
            <DialogDescription style={{ color: "#A0A0A0" }}>
              {selected?.condition.split(" ").slice(1).join(" ")}
            </DialogDescription>
          </DialogHeader>

          <div style={{ marginTop: "8px" }}>
            {/* 운동 목록 */}
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#39FF14",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              운동 목록
            </p>
            <div style={{ marginBottom: "24px" }}>
              {selected?.exercises.map((ex, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#ffffff",
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
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              <Badge
                style={{
                  background: "rgba(57,255,20,0.1)",
                  color: "#39FF14",
                  border: "1px solid rgba(57,255,20,0.2)",
                  fontSize: "0.75rem",
                  padding: "6px 14px",
                }}
              >
                총 볼륨 {selected?.volume.toLocaleString()}kg
              </Badge>
              <Badge
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#A0A0A0",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.75rem",
                  padding: "6px 14px",
                }}
              >
                {selected?.duration}분
              </Badge>
            </div>

            {/* 메모 */}
            {selected?.memo && (
              <div
                style={{
                  background: "#1A1A1A",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#39FF14",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  메모
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#A0A0A0",
                    lineHeight: 1.7,
                  }}
                >
                  {selected.memo}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
