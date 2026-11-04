export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false
}) {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border bg-amber-500/10 text-amber-700 border-amber-500/30">
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-navy-950'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

