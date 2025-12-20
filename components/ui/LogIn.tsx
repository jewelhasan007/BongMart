import { SignInButton } from '@clerk/nextjs';


const LogIn = () => {
    return (
<SignInButton>

        
        <button className='text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect'>
            Login
        </button>

</SignInButton>
    );
};

export default LogIn;