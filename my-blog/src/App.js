import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import CreateAccount from './pages/CreateAccount';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
