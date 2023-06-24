export default function NormalLogin() {
  const pBefore = `before:content-[''] before:absolute before:top-3 before:-left-1/4 before:w-1/5 before:h-0.5 before:bg-slate-900 `;
  const pAfter = `after:content-[''] after:absolute after:top-3 after:-right-1/4 after:w-1/5 after:h-0.5 after:bg-slate-900 `;
  const pStyle = `text-semibase font-semibold inline-block relative `;

  return (
    <div className="text-center">
      <p
        className={pBefore + pStyle + pAfter}
      >
        Oh bien con su cuenta healty food
      </p>
    </div>
  );
}