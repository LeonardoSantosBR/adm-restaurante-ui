import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => { //memoriza dados(email,password) e evita que seja calculado cada vez que renderize.
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const passOk = password.trim().length >= 6;
    return emailOk && passOk;
  }, [email, password]);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); //intercepta comportamento padrão do navegador de recarregar a pagina após envio.
    if (!isValid) return;
    //chamar api e setar token no localStorage
    navigate("/signup");
  }

  return (
    <div className="min-h-screen w-full bg-stone-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white text-black rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-semibold">Entrar</h1>
          <p className="text-sm text-black mt-1">
            Acesse com seu e-mail e senha
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-black">E-mail</label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="mt-2 w-full rounded-lg  border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="text-sm text-black">Senha</label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-lg border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
              <p className="mt-2 text-xs text-zinc-700">
                Mínimo: 6 caracteres.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/signup"
                className="text-sm text-black underline underline-offset-4"
              >
                Criar conta
              </Link>

              <button
                type="submit"
                disabled={!isValid}
                className="h-11 px-6 rounded-lg bg-amber-200 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
