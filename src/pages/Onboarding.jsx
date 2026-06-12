import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'

// STEP 5에서 체형 프로파일 입력 폼으로 완성 예정.
// 지금은 진입 화면 뼈대 + "시작하기" 동작만.
export default function Onboarding() {
  const navigate = useNavigate()

  return (
    <section className="flex min-h-svh flex-col justify-between px-6 py-10">
      <div className="pt-10 text-center">
        <p className="m-0 text-lg font-semibold text-brand">마이스타일랩AI</p>
        <h1 className="mb-3 mt-2 text-2xl font-extrabold leading-snug text-ink">
          사진만 찍으면<br />AI가 코디를 골라드려요
        </h1>
        <p className="m-0 text-lg text-ink-soft">
          내 체형에 맞는 옷차림을<br />쉽고 간단하게 추천받으세요
        </p>
      </div>

      <div className="space-y-3">
        <Button full onClick={() => navigate('/closet')}>
          시작하기
        </Button>
        <p className="m-0 text-center text-base text-ink-soft">
          다음 단계에서 체형 정보를 입력합니다
        </p>
      </div>
    </section>
  )
}
