import { useNavigate } from 'react-router-dom'
import Screen from '../components/ui/Screen.jsx'
import Button from '../components/ui/Button.jsx'

// MY — 내 체형 프로파일 확인/수정, 로그인 정보 (뼈대).
const PROFILE_ROWS = [
  { label: '나이대', value: '미입력' },
  { label: '성별', value: '미입력' },
  { label: '체형유형', value: '미입력' },
  { label: '고민 부위', value: '미입력' },
  { label: '퍼스널컬러', value: '미입력' },
]

export default function My() {
  const navigate = useNavigate()

  return (
    <Screen title="내 정보" subtitle="체형 정보를 입력하면 추천이 더 정확해져요">
      <div className="mb-5 overflow-hidden rounded-card border-2 border-line bg-surface">
        {PROFILE_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={
              'flex items-center justify-between px-5 py-4 text-lg ' +
              (i > 0 ? 'border-t border-line' : '')
            }
          >
            <span className="font-bold text-ink">{row.label}</span>
            <span className="text-ink-soft">{row.value}</span>
          </div>
        ))}
      </div>

      <Button variant="soft" full onClick={() => navigate('/onboarding')}>
        체형 정보 입력하기
      </Button>
    </Screen>
  )
}
