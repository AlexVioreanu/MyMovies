import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css';

const NotFoundComponent = lazy(() => import('./components/NotFound'));
const HomeComponent = lazy(() => import('./components/Home'));
const MyMoviesComponent = lazy(() => import('./components/MyMovies'));
const RankingsComponent = lazy(() => import('./components/Rankings'));
const RecommendationsComponent = lazy(() => import('./components/Recommendations'));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				<Switch>
					<Route exact path="/">
						<HomeComponent />
					</Route>
					<Route path="/my-movies">
						<MyMoviesComponent />
					</Route>
					<Route path="/rankings">
						<RankingsComponent />
					</Route>
					<Route path="/recommendations">
						<RecommendationsComponent />
					</Route>
					<Route path="*">
						<NotFoundComponent />
					</Route>
				</Switch>
				<Footer />
			</Suspense>
		</Router>
	);
}

export default App;
