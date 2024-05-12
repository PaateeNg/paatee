import Image from 'next/image'
import logo from '../../../public/assets/img/paatee-logo.png'
import icon from '../../../public/assets/img/icon-new.png'


const Auth = () => {

    let signInfo = [
        {
            image: icon,
            title: "Book your bash in minutes!",
            sub: "Effortlessly select your venue, catering and entertainment all in one place, saving you time and hassle"
        },
        {
            icon: "yh",
            title: "Customize your celebration",
            sub: "Personalize every detail of your event with our flexible booking options "
        },
        {
            icon: "yh",
            title: "ahh",
            sub: "hey"
        },
        {
            icon: "yh",
            title: "ahh",
            sub: "hey"
        },
    ]
	return (
		<>
			<div className="flex md:flex-row flex-col bg-gray-100 ">
                {/* left */}
				<div className="w-[746px]  rounded-xl overflow-hidden  bg-white m-[3rem] relative flex-1 " style={{ backgroundImage: `url('/assets/img/party-bg.jpg')` }}>
                        {/* image */}
                        <Image height={100} width={200} alt='logo' src={logo} className='absolute top-[5rem]'/>
                    <div className=" w-full bg-rose-300 absolute bottom-0 flex flex-col justify-center ">
                        {/* info */}
                    {signInfo.map((i, index)=>(
                        <>
                            <div className="flex gap-2 mx-auto my-3 mb-6" key={index}>
                                <div>
                                    <Image height={50} width={50} alt='logo' src={icon}/>
                                    <span>{i.title}</span><span>{i.sub}</span>
                                </div>
                                
                            </div>
                        </>
                    ))}
                    </div>
                </div>
                {/* right */}
				<div className="h-[580px] w-[440px]  m-[2rem]  flex flex-col gap-4 justify-center">
                        <span className='font-bold text-xl'>Sign in</span>
                        <span>Get into your account and begin exploring</span>
                        <div className='flex gap-2'>
                            <div className='shadow py-3 text-sm px-10 rounded-full bg-white'>Sign in with Google</div>
                            <div className='shadow py-3 px-5 rounded-full bg-white'>Sign in with Apple Id</div>
                        </div>
                        <span>Email Address</span>
                        <input type="text" placeholder='jamieohakwe@gmail.com ' className='rounded-full'/>
                        <span>Password</span>
                        <input type="password" className='rounded-full' placeholder='jhsvdhvrw' />
                        <div className='flex justify-between'>
                            <span>Keep me signed in</span>
                            <span className='text-red-600'>Forgot password</span>
                        </div>
                        <button className='bg-red-500 rounded-full mt-4 h-[3rem] text-white'>Reset Password</button>
                        <span>If you do not have an account with us, you could <span className='text-red-600'> <a href="">Sign Up</a></span></span>
                </div>
			</div>
		</>
	);
};

export default Auth;
