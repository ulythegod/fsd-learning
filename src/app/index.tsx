import './index.scss';
import { withProviders } from './providers/withProviders';
import { Routing } from '../pages';

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);
