// 화면 공통 래퍼: 큰 제목 + 넉넉한 좌우 여백.
// 시니어 가독성을 위해 제목은 28px 이상, 본문 영역은 16px 패딩.
export default function Screen({ title, subtitle, children }) {
  return (
    <section className="px-4 pt-6">
      {title && (
        <header className="mb-5">
          <h1 className="m-0 text-2xl font-extrabold text-ink">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-base text-ink-soft">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
