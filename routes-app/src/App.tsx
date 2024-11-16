import "./App.css";

interface Props {
  children: React.ReactNode;
}

export const App = ({children} : Props) => {
	return (
		<div className="App">
				<h1>NavBar</h1>
        {children}
        <h1>Footer</h1>
		</div>
	);
};
