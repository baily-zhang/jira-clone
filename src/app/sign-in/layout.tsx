// this file using for the reusable things

interface SignInLayoutProps {
	children: React.ReactNode;
};

const SignInLayout = ({ children }: SignInLayoutProps) => {
	return (
		<div>
			{children}
		</div>
	);
}

export default SignInLayout;
