export default function Logo({ className = '', size = 'default' }) {
  const sizeStyles = {
    small: { fontSize: '1.25rem', letterSpacing: '0.08em' },
    default: { fontSize: '1.75rem', letterSpacing: '0.08em' },
    large: { fontSize: '2.5rem', letterSpacing: '0.1em' },
  }

  return (
    <div
      className={`logo-sixcaps ${className}`}
      style={{
        ...sizeStyles[size],
        lineHeight: '1.2',
        display: 'inline-block',
      }}
    >
      RENDERCODESTUDIOS
    </div>
  )
}
