'use client';

export default function NotFound() {
  return (
    <div className="grid h-screen place-items-center text-2xl">
      <div
        className="flex cursor-pointer"
        onClick={() => {
          window.open('/', '_self');
        }}>
        <div className="animate-bounce">4</div>
        <div className="animate-bounce delay-100">0</div>
        <div className="animate-bounce delay-200">4</div>
      </div>
    </div>
  );
}
