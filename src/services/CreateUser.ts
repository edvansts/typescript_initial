// default siginifica exportação padrão, onde eu não precisaria usar o destructuring para pegar uma unica função
/**
 * Para criar nome, email e password
 */

interface TechObject {
    title: string,
    experience: number,
}
// Pode ser usado string[] para vetores mais simples
interface CreateUserData {
    name?: String,
    email: String,
    password: String | number,
    techs: Array<string | TechObject>
}

export default function createUser({name, email, password, techs}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  };
  return user;
}
