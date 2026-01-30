function AuthHeadMessage({
  title,
  leading,
}: {
  title: string;
  leading: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-black mt-1">{leading}</p>
    </>
  );
}

export default AuthHeadMessage;
