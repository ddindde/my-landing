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

// 더미 데이터는 컴포넌트 바깥에 — workouts.js에서 import

// ── 자식 컴포넌트 ──
function WorkoutCard({ workout, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer bg-[#111111] border border-white/8 hover:border-[#39FF14]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold tracking-wide text-[#39FF14]">
            {workout.date}
          </span>
          <span className="text-xl leading-none">
            {workout.condition.split(" ")[0]}
          </span>
        </div>
        <CardTitle className="text-white text-lg">{workout.title}</CardTitle>
        <CardDescription className="text-[#A0A0A0] text-sm">
          {workout.exercises.map((e) => e.name).join(" · ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 pt-2 border-t border-white/8">
          <Badge className="bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 hover:bg-[#39FF14]/20 text-xs">
            볼륨 {workout.volume.toLocaleString()}kg
          </Badge>
          <Badge className="bg-white/5 text-[#A0A0A0] border border-white/8 hover:bg-white/10 text-xs">
            {workout.duration}분
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

// ── 부모 컴포넌트 ──
export default function WorkoutGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#0A0A0A] py-20 px-6 border-t border-white/8">
      <div className="max-w-[1200px] mx-auto">
        {/* 헤더 */}
        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase text-[#39FF14] font-semibold mb-2">
            Muscle Archive
          </p>
          <h2 className="text-4xl font-black text-white tracking-tight mb-2">
            운동 기록
          </h2>
          <p className="text-[#A0A0A0] text-sm">
            카드를 클릭하면 상세 내용을 볼 수 있어요.
          </p>
        </div>

        {/* 카드 그리드 — workouts.map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onClick={() => setSelected(workout)}
            />
          ))}
        </div>
      </div>

      {/* Dialog — 부모에서 selected 상태로 제어 */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="bg-[#111111] border border-white/10 text-white max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl leading-none">
                {selected?.condition.split(" ")[0]}
              </span>
              <span className="text-xs text-[#39FF14] font-semibold tracking-wide">
                {selected?.date}
              </span>
            </div>
            <DialogTitle className="text-white text-xl">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-[#A0A0A0]">
              {selected?.condition.split(" ").slice(1).join(" ")}
            </DialogDescription>
          </DialogHeader>

          {/* 운동 목록 */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#39FF14] font-semibold mb-3">
              운동 목록
            </p>
            <div className="space-y-1 mb-5">
              {selected?.exercises.map((ex, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 border-b border-white/6"
                >
                  <span className="text-sm font-semibold text-white">
                    {ex.name}
                  </span>
                  <span className="text-sm text-[#A0A0A0]">
                    {ex.weight > 0 ? `${ex.weight}kg × ` : ""}
                    {ex.sets}세트 × {ex.reps}회
                  </span>
                </div>
              ))}
            </div>

            {/* 통계 */}
            <div className="flex gap-2 mb-4">
              <Badge className="bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20 text-xs">
                총 볼륨 {selected?.volume.toLocaleString()}kg
              </Badge>
              <Badge className="bg-white/5 text-[#A0A0A0] border border-white/8 text-xs">
                {selected?.duration}분
              </Badge>
            </div>

            {/* 메모 */}
            {selected?.memo && (
              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/6">
                <p className="text-xs uppercase tracking-widest text-[#39FF14] font-semibold mb-2">
                  메모
                </p>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
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
