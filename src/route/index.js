import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import MyList from '../pages/mylist'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
    },
    {
        path : 'mylist',
        element : <MyList />,
    },
])

export default router