export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: P with drill bit and lightning bolt */}
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House outline behind the P */}
        <path
          d="M6 26 L26 8 L46 26 L46 46 L6 46 Z"
          fill="none"
          stroke="#1A56DB"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />
        {/* P letter shape - navy fill */}
        <path
          d="M14 38 L14 14 L28 14 C33 14 37 17.5 37 22.5 C37 27.5 33 31 28 31 L22 31 L22 38 Z M22 24 L28 24 C29.5 24 30.5 23 30.5 22.5 C30.5 22 29.5 21 28 21 L22 21 Z"
          fill="#0D1F4C"
        />
        {/* P letter outline */}
        <path
          d="M14 38 L14 14 L28 14 C33 14 37 17.5 37 22.5 C37 27.5 33 31 28 31 L22 31 L22 38 Z M22 24 L28 24 C29.5 24 30.5 23 30.5 22.5 C30.5 22 29.5 21 28 21 L22 21 Z"
          fill="none"
          stroke="#1A56DB"
          strokeWidth="1.2"
        />
        {/* Drill bit running vertically through P */}
        <line x1="26" y1="6" x2="26" y2="46" stroke="#1A56DB" strokeWidth="2" strokeDasharray="2 2" opacity="0.7" />
        <polygon points="26,4 24,9 28,9" fill="#1A56DB" opacity="0.9" />
        {/* Lightning bolt inside P */}
        <path d="M24 20 L22 26 L25 26 L23 32 L29 24 L25.5 24 L27.5 20 Z" fill="#1A56DB" />
      </svg>

      {/* Text portion */}
      <div className="flex flex-col leading-none">
        <span
          className="font-headline text-white tracking-widest"
          style={{ fontSize: '1.5rem', letterSpacing: '0.12em' }}
        >
          PREMIER
        </span>
        <div className="flex items-center gap-1 my-0.5">
          <span className="flex-1 h-px bg-royal opacity-70" />
          <span
            className="font-subheading text-royal font-semibold"
            style={{ fontSize: '0.42rem', letterSpacing: '0.15em' }}
          >
            FOUNDATION REPAIR OF BATON ROUGE
          </span>
          <span className="flex-1 h-px bg-royal opacity-70" />
        </div>
      </div>
    </div>
  );
}
