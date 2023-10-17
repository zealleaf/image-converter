'use client';

export default function Error() {
  return (
    <div className="grid h-full place-items-center text-2xl">
      <div className="flex">
        <div className="animate-bounce">e</div>
        <div className="animate-bounce delay-100">r</div>
        <div className="animate-bounce delay-200">r</div>
        <div className="animate-bounce delay-300">o</div>
        <div className="delay-400 animate-bounce">r</div>
      </div>
    </div>
  );
}
