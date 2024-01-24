import { useState, useEffect } from 'react'
import styles from './Register.module.css'



const Register = () => {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit =(event)=>{
        event.preventDefault()

        setError("")

        const users = {
            displayName,
            email,
            password,            
        }
        
        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        console.log(users);

    }

  return (
    <div className={styles.register}>
        <h1>Cadastro</h1>
        <p>Olá, dev! Crie seu usuário comece a sua interação.</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name='displayName' required placeholder='Nome do usuário'
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}                
                />                
            </label>

            <label>
                <span>E-mail:</span>
                <input type="email" name='email' placeholder='E-mail do usuário'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />
            </label>

            <label>
                <span>Senha:</span>
                <input type="password" name='password'placeholder='Digite sua senha'
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
            </label>

            <label>
                <span>Confirmar senha:</span>
                <input type="password" name='confirmPassword'placeholder='Confirme a sua senha' 
                value={confirmPassword}
                onChange={(event)=>setConfirmPassword(event.target.value)}
                />
            </label>
            <button className='btn'>Cadastrar</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register