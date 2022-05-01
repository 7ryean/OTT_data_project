import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../shared/GlobalStyle';
import theme from '../shared/theme';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from '../components/ScrollToTop';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import PreviewPage from '../pages/PreviewPage';
import PreviewPage2 from '../pages/PreviewPage2';
// import QuestionPage from '../pages/QuestionPage';
// import PickPosterPage from '../pages/PickPosterPage';
import ResultPage from '../pages/ResultPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';
import SurveyPage from '../pages/SurveyPage';
import PayForPage from '../pages/PayForPage';
import TeamPage from '../pages/TeamPage';
import PayingPage from '../pages/PayingPage';
// import Loading from '../pages/Loading';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/preview" component={PreviewPage} />
            <Route exact path="/preview/:id" component={PreviewPage} />
            <Route exact path="/preview2" component={PreviewPage2} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            {/* <Route exact path="/question" component={QuestionPage} />
            <Route exact path="/question2" component={PickPosterPage} /> */}
            <Route exact path="/survey" component={SurveyPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/payfor" component={PayForPage} />
            <Route exact path="/paying" component={PayingPage} />
            <Route exact path="/team" component={TeamPage} />
            {/* <Route exact path="/loading" component={Loading} /> */}
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
