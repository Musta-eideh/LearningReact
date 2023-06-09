import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return(
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite seu email."
                onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;