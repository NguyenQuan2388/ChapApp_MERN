import {BiLogOut} from 'react-icons/bi';

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
        {!loading ? (
            <button className='btn btn-primary btn-block' onClick={logout}>
                <BiLogOut className='mr-2'/>
                Logout
            </button>
        ) : (
            <button className='btn btn-primary btn-block' disabled>
                <BiLogOut className='mr-2'/>
                Logging out...
            </button>
        }
    </div>
  )
}

export default LogoutButton