import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Dashboard(props) {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("login");
        history.push("/");
      };
    
    return (
        <div>
            <h1>welcome to Dashboard!!!</h1>
            <button onClick={()=>logout()}>Logout</button>
        </div>
    );
}

export default Dashboard;