import { NavLink } from 'react-router-dom'

// 하단 탭 — 시니어 친화: 아이콘 + 글씨 둘 다, 큰 터치 영역(최소 56px)
const TABS = [
  { to: '/closet', label: '옷장', icon: ClosetIcon },
  { to: '/coordi', label: '코디', icon: CoordiIcon },
  { to: '/my', label: 'MY', icon: MyIcon },
]

export default function TabBar() {
  return (
    <nav
      className="fixed bottom-0 left-1/2 w-full max-w-[480px] -translate-x-1/2
                 border-t border-line bg-surface"
      aria-label="주요 메뉴"
    >
      <ul className="m-0 grid list-none grid-cols-3 p-0">
        {TABS.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex min-h-tap flex-col items-center justify-center gap-1 py-2 ` +
                `text-base font-semibold no-underline ` +
                (isActive ? 'text-brand' : 'text-ink-soft')
              }
            >
              {({ isActive }) => (
                <>
                  <Icon active={isActive} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ClosetIcon({ active }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      stroke="currentColor" strokeWidth={active ? 2.4 : 1.9}
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 3v18M9 8h0M15 8h0" />
    </svg>
  )
}

function CoordiIcon({ active }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      stroke="currentColor" strokeWidth={active ? 2.4 : 1.9}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2.2 4.5L19 8l-3.5 3.4.8 4.9L12 14l-4.3 2.3.8-4.9L5 8l4.8-.5L12 3z" />
    </svg>
  )
}

function MyIcon({ active }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      stroke="currentColor" strokeWidth={active ? 2.4 : 1.9}
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    </svg>
  )
}
