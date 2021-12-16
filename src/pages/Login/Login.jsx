import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Core/auth';

export default function Login() {
    const { authed, log_in } = useAuth();
    console.log("🚀 ~ file: Login.jsx ~ line 6 ~ Login ~ authed", authed)
    let navigate = useNavigate();

    let handleLogin = () => {
        log_in().then(() => {
            console.log("Logou")
            navigate("/dashboard");
        });
    };

    // if(authed){
    //     navigate("/dashboard")
    // }
    return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>
        Log in
        </button>
    </div>
    );
};