import React from 'react'
// import { useEffect } from 'react'
// import { selectUsers, fetchUserAsync, selectUserstatus } from "../reducers/userReducer";
// import { useSelector, useDispatch } from "react-redux";

const HeaderPage = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUsers);
  // const userstatus = useSelector(selectUserstatus);

  // useEffect(() => {
  //   dispatch(fetchUserAsync())
  // }, [])

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
            {/* {userstatus === 'loading' ? '' : <span className="text-yellow-50">Welcome ! {user}</span>} */}
            <span className="mx-4 px-4 py-2 bg-white rounded-sm"><a href='/mylist' >MyList</a></span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderPage