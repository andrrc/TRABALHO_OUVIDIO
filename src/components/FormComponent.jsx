import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function FormComponent() {
  return (
    <form className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">Cadastro de Usuário</h2>
      <InputField label="Nome" type="text" placeholder="Digite seu nome" />
      <InputField label="E-mail" type="email" placeholder="Digite seu e-mail" />
      <InputField label="Senha" type="password" placeholder="Digite sua senha" />
      <InputField label="Confirmação de Senha" type="password" placeholder="Confirme sua senha" />
      <SubmitButton text="Cadastrar" />
    </form>
  );
}

export default FormComponent;