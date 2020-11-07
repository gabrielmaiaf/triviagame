import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

import GlobalStyle from './styles/global';

import CardContainer from './components/card-container';

import { QuizProvider } from './hooks/quiz';

const App: React.FC = () => {
  return (
    <CardContainer>
      <Router>
        <QuizProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/result" component={Results} />
          </Switch>
        </QuizProvider>

        <GlobalStyle />
      </Router>
    </CardContainer>
  );
};

export default App;
