import Screen from '../components/Screen';
import { UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import UserButton from '../components/UserButton';

const Login = () => {

    let users = [
        {id: 1, name: 'user 1', Icon: UserIcon}, 
        {id: 2, name:'user 2', Icon: UserIcon}
    ];
    // users = [];
    users = [...users, {id:0, name:'add user', Icon: UserPlusIcon}]

  return (
    <div>
        <Screen>
            <div className='flex items-center justify-center h-150 my-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                
                {users && users.map(({id, name, Icon}) => (
                   <UserButton key={id} name={name} Icon={Icon}/>
                ))}

            </div>
        </Screen>
    </div>
  )
}

export default Login