import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();

	const goToSignup = () => {
		navigate('/signup');
	}
	const goToResetPassword = () => {
		navigate('/reset-password');
	}
	const goToMain = () => {
		navigate('/main');
	}
	return (
		<div className="min-h-screen text-gray-800 px-4">
			<div className="relative py-3 sm:max-w-xl mx-auto text-center">
				<img
					alt={'logo'}
					src={tiger}
					className="object-scale-down h-40 object-center mx-auto"
				></img>
				<span className="text-2xl font-light"> TIGER DATA CODING TOOL </span>
				<div className="relative mt-5 bg-[#76589C] shadow-md sm:rounded-lg text-left">
					<div className="flex flex-row p-4 mt-3">
						<button className="basis-1/2 text-center bg-[#ED6430] text-white p-2 rounded-l-md">
							LOGIN
						</button>
						<button
							className="basis-1/2 text-center bg-[#452C72] text-white p-2 rounded-r-md"
							onClick={goToSignup}
						>
							SIGN UP
						</button>
					</div>
					<div className="py-5 px-12">
						<input
							type="text"
							placeholder="Email"
							className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-900 rounded-md"
						/>
						<input
							type="password"
							placeholder="Password"
							className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
						/>
						<div className="grid place-items-center v-screen">
							<button
								className="w-1/3 p-2 mt-4 text-white rounded-md bg-[#ED6430] shadow-2xl"
								type="submit"
								onClick={goToMain}
							>
								LOGIN
							</button>
						</div>
						<a
							href="#"
							className="text-white text-sm hover:underline grid place-items-center v-screen"
							onClick={goToResetPassword}

						>
							Forgot password?
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
