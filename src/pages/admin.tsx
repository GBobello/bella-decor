import { useState } from "react";
import { MdLogin } from "react-icons/md";
import md5 from 'md5';
import axios from "axios";

interface Users {
  users: {
    user: string;
    password: string;
  }
}

export function Admin() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState<Users[]>([])


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (user === '' || password === ''){
      alert('Os campos necessários não foram preenchidos!')
      return
    }
    
    const cryptPass = md5(password)

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuarios")
        console.log(response.data);
        
        setUsers(response.data)
      } catch (error) {
        console.error('Não foi possível fazer a consulta de seu usuário: ', error);
        alert('Não foi possível fazer a consulta de seu usuário: ' + error);
        
      }
    }

    fetchData()
    
    console.log(users);
    const filteredUsers = users.filter()



  }

  return (
    <div className="flex w-full h-screen items-center justify-center bg-slate-200 ">
      <form
        className="flex shadow-md flex-col justify-center w-[400px] h-[400px] bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h1>Administrador</h1>
        </div>
        <input
          className="bg-slate-200 ml-10 mr-10 p-2 m-2 rounded-md leading-6 resize-none outline-none shadow-lg text-start"
          type="text"
          placeholder="Digite seu usuário"
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <input
          className="bg-slate-200 ml-10 mr-10 p-2 m-2 rounded-md leading-6 resize-none outline-none shadow-lg text-start"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          type="submit"
          className="flex shadow-lg mt-2 ml-10 mr-10 hover:bg-lime-700 hover:text-white hover:border-lime-400 items-center justify-center border-2 rounded-md h-10"
        >
          Logar <MdLogin className="ml-2" />
        </button>
      </form>
    </div>
  );
}
