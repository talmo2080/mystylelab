import Screen from '../components/ui/Screen.jsx'
import Button from '../components/ui/Button.jsx'

// 코디 추천 — 상황 선택 → 옷장 조합 추천 + 슬리밍 점수 + 이유 (뼈대).
// 다음 단계에서: Claude Sonnet 호출로 실제 추천 생성.
const SITUATIONS = ['동창 모임', '경조사', '나들이·산책', '병원·관공서', '집 근처 외출']

export default function Coordi() {
  return (
    <Screen title="오늘 뭐 입지?" subtitle="가는 곳을 고르면 코디를 추천해드려요">
      <div className="space-y-3">
        {SITUATIONS.map((s) => (
          <button
            key={s}
            className="flex min-h-tap w-full items-center justify-between
                       rounded-card border-2 border-line bg-surface px-5
                       text-lg font-bold text-ink"
          >
            <span>{s}</span>
            <span aria-hidden="true" className="text-brand">›</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-base text-ink-soft">
        상황을 고르면 옷장 속 옷으로<br />어울리는 한 벌을 골라드려요
      </p>
    </Screen>
  )
}
