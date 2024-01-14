import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import bg from '../Assets/Images/home-background.jpg';
import { Home } from '../Pages/Home/Home';
import logo from '../../src/Assets/Images/Rectangle-right.png';
import logodob from '../../src/Assets/Images/Rectangle-left.png';
import ellips from '../Assets/Images/Ellipse.png';
import Course from '../Components/course_regitr/course';

export const RootLayout = () => {
	return (
		<div>
			<div className='w-full  relative'>
				<img className='w-full h-[316px]   ' src={bg} alt='logo' />
				<div className='w-full h-[316px] absolute   bg-black/95  top-0 left-0'></div>
				<img className='absolute top-0 left-0 pl-24 h-[316px]' src={logo} alt='as' />
				<img src={ellips} alt='' className='absolute top-[117px] left-0 h-[200px] ' />
				<Header />
			</div>
			<div className='w-full'>
				<Course />
			</div>
			<Outlet />
		</div>
	);
};
