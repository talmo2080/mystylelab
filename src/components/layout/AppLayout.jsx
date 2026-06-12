import { Outlet } from 'react-router-dom'
import TabBar from './TabBar.jsx'

// 공통 레이아웃: 화면 내용 + 하단 탭.
// 하단 탭에 가리지 않도록 본문 아래 여백(pb)을 충분히 둔다.
export default function AppLayout() {
  return (
    <div className="min-h-svh bg-canvas">
      <main className="pb-28">
        <Outlet />
      </main>
      <TabBar />
    </div>
  )
}
