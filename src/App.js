import './App.css';
import Presentation from './components/Presentation/Presentation.jsx';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Layout>
        <Presentation />
      </Layout>

    </div>
  );
}

export default App;
