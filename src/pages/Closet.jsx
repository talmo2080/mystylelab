import Screen from '../components/ui/Screen.jsx'
import Button from '../components/ui/Button.jsx'

// 옷장 갤러리 — 카테고리별 보기 (뼈대).
// 다음 단계에서: 사진 업로드 → AI 자동 태깅 → 카테고리 그리드 채우기.
const CATEGORIES = ['상의', '하의', '아우터', '신발', '기타']

export default function Closet() {
  return (
    <Screen title="내 옷장" subtitle="옷을 등록하면 AI가 자동으로 분류해요">
      <Button full className="mb-5">
        + 옷 사진 등록하기
      </Button>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((c, i) => (
          <button
            key={c}
            className={
              'min-h-tap shrink-0 rounded-card px-5 text-base font-bold ' +
              (i === 0
                ? 'bg-brand text-white'
                : 'border-2 border-line bg-surface text-ink-soft')
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* 등록 전 빈 상태 자리표시 */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center
                       rounded-card border-2 border-dashed border-line
                       bg-surface text-base text-ink-soft"
          >
            아직 옷이 없어요
          </div>
        ))}
      </div>
    </Screen>
  )
}
