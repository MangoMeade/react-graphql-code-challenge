import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { gql, request } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';
import { apiEndpoint } from '../route-config';
import { IUser } from '../types/userTypes';
import { addEnrichedName, filterUsersList } from '../utils/utils';

function useUsers() {
	return useQuery('users', async () => {
		const { users } = await request(
			apiEndpoint,
			gql`
				query {
					users {
						id
						name
						email
						phone
						password
					}
				}
			`
		);

		return users;
	});
}

export default function HomePage() {
	const { status, data, isFetching } = useUsers();

	const [usersList, setUsers] = useState<IUser[]>([]);
	const [filteredUsersList, setFilteredUsersList] = useState<IUser[]>([]);
	const [, setSearchTextKeyword] = useState<string>('');

	const handleSearchBarChange = (searchText: string): void => {
		const filteredUsersList = filterUsersList(usersList, searchText);
		setSearchTextKeyword(searchText);
		setFilteredUsersList(filteredUsersList);
	};

	useEffect(() => {
		if (status === 'success') {
			const usersList = addEnrichedName(data);
			setUsers(usersList);
			setFilteredUsersList(usersList);
		}
	}, [status, data]);

	return (
		<Container maxW={'5xl'} py={12}>
			<Stack spacing="24px" w="full" display="flex" alignItems="center">
				<Heading as="h1" size="3xl" color="#2a9d8f">
					Users
				</Heading>
				{status === 'loading' ? (
					'Loading...'
				) : status === 'error' ? (
					<Text color="tomato">Error loading data </Text>
				) : (
					<>
						<SearchBar
							onChange={handleSearchBarChange}
							filteredSize={filteredUsersList.length}
							size={usersList.length}
						/>
						<UsersList usersList={filteredUsersList} isFetching={isFetching} />
					</>
				)}
			</Stack>
		</Container>
	);
}
