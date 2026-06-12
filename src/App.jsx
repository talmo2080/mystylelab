import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Closet from './pages/Closet.jsx'
import Coordi from './pages/Coordi.jsx'
import My from './pages/My.jsx'

export default function App() {
  return (
    <Routes>
      {/* 온보딩은 하단 탭 없이 전체 화면 */}
      <Route path="/onboarding" element={<Onboarding />} />

      {/* 메인 화면들: 공통 레이아웃(하단 탭) 안에서 */}
      <Route element={<AppLayout />}>
        <Route path="/closet" element={<Closet />} />
        <Route path="/coordi" element={<Coordi />} />
        <Route path="/my" element={<My />} />
      </Route>

      {/* 첫 진입 → 온보딩 (추후 프로필 유무로 분기) */}
      <Route path="/" element={<Navigate to="/onboarding" replace />} />
      <Route path="*" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  )
}
