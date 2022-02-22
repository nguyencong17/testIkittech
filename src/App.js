import './App.css';
import Header from './components/Header/Header'
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
        <Header/>
        <h2>Đăng kí tài khoản</h2>
        <Register/>
        <h2>Đăng nhập</h2>
        <Login/>
    </div>
  );
}

export default App;
