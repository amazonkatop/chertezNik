import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="flex min-h-[100dvh] items-center justify-center bg-gray-50 text-gray-500">
          Not found
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
