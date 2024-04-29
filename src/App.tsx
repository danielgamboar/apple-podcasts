import { Link } from 'wouter'
import Router from './router'
import { routes } from './router/routes'

function App() {

  return (
    <>
    <div className='flex justify-around '>
      <Link href={routes.home} className="text-3xl font-bold underline" >Home</Link>
      <Link href={routes.podcasts.all + "/testing"}>Detail</Link>
    </div>
      <Router/>

    </>
  )
}

export default App
