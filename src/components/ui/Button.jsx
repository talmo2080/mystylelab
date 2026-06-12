// 시니어 친화 큰 버튼: 최소 높이 56px, 큰 글씨, 넉넉한 좌우 여백.
// variant: 'primary'(채움) | 'soft'(연한 배경) | 'ghost'(테두리)
export default function Button({
  variant = 'primary',
  full = false,
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex min-h-tap items-center justify-center rounded-card px-6 ' +
    'text-lg font-bold no-underline transition active:scale-[0.98] ' +
    'disabled:opacity-40 disabled:active:scale-100'

  const variants = {
    primary: 'bg-brand text-white',
    soft: 'bg-brand-soft text-brand-dark',
    ghost: 'border-2 border-line bg-surface text-ink',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
