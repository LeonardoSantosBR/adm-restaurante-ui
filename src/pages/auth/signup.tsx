import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeadMessage from "../../components/authentication/head-message";
import LinkTo from "../../components/authentication/link-to";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => {
    //memoriza dados(email,password) e evita que seja calculado cada vez que renderize.
    const nameOk = name.trim().length >= 5;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const passOk = password.trim().length >= 6;
    return nameOk && emailOk && passOk;
  }, [name, email, password]);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); //intercepta comportamento padrão do navegador de recarregar a pagina após envio.
    //chamar api para cadastrar
    navigate("/signin");
  }

  return (
    <div className="min-h-screen w-full bg-stone-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white text-black rounded-2xl shadow-xl p-8">
          <AuthHeadMessage
            title="Criar conta"
            leading="Insira seus dados para começar"
          />

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-black">Nome</label>
              <input
                type="text"
                autoComplete="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lucas marques"
                className="mt-2 w-full rounded-lg  border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
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
              <LinkTo text={"Criar conta"} component={"signin"} />

              <button
                type="submit"
                disabled={!isValid}
                className="h-11 px-6 rounded-lg bg-amber-200 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
