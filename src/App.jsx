import { Routes, Route, Outlet, Link } from "react-router-dom";
import MyList from "./pages/mylist";
import MovieList from "./components/movieList";

function HeaderPage(){
  return (
    <>
      <header>
        <nav className="flex flex-row align-middle justify-between bg-slate-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-left max-w-screen-xl">
            <a href="/" className="text-4xl text-white">
              HeroThemese
            </a>
          </div>
          <div className="px-4 mt-2">
            <span className="mx-4 px-4 py-2 bg-white rounded-sm"><a href='/mylist' >MyList</a></span>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


function App() {
  return (
    <Routes>
        <Route path="/" element={<HeaderPage />}>
          <Route index element={<MovieList />} />
          <Route path="mylist" element={<MyList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  )
}

export default App
