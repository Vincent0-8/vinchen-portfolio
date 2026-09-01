export default function ProfileImage() {
  return (
    <div className="relative w-65 h-65 sm:w-75 sm:h-75 group">

      {/* Decorative frame — shifts behind the main box */}
      <div className="absolute inset-0 border-2 border-accent rounded-xl translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-4 z-0" />

      {/* Photo container */}
      <div className="absolute inset-0 bg-(--color-surface) rounded-xl overflow-hidden border border-(--color-border) shadow-lg transition-transform duration-300 hover:-translate-2 z-10">
        <img
          src="/images/profile.webp"
          alt="Vincent"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
