import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage';
const queryClient = new QueryClient();

function App() {
	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<HomePage />
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default App;
