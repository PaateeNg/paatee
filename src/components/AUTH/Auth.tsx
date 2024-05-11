import Image from 'next/image'
import logo from '../../../public/assets/img/paatee-logo.png'
import icon from '../../../public/assets/img/icon-new.png'


const Auth = () => {

    let signInfo = [
        {
            image: icon,
            title: "Book your bash in minutes!",
            sub: "hey"
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
				<div className="w-[746px] h-[807px] bg-white m-[3rem] relative flex-1">
                        {/* image */}
                        <Image height={100} width={200} alt='logo' src={logo} className='absolute top-[5rem]'/>
                    <div className="h-[580px] w-full bg-rose-300 absolute bottom-0 flex ">
                        {/* info */}
                    {signInfo.map((i, index)=>(
                        <>
                            <div className="flex " key={index}>
                                <div>
                                <Image height={50} width={50} alt='logo' src={icon}/>
                                </div>
                                <div>
                                    <div>{i.title}</div>
                                    <div>{i.sub}</div>
                                </div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
                {/* right */}
				<div className="h-[580px] w-[746px] flex-1">

                </div>
			</div>
		</>
	);
};

export default Auth;
