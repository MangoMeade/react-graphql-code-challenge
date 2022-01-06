import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { IUser } from '../types/userTypes';
import UsersListItem from './UsersListItem';

interface IUsersList {
	usersList: IUser[];
	isFetching: boolean;
	status?: string;
}
export default function UsersList({
	usersList,
	isFetching,
	status,
}: IUsersList) {
	return (
		<Stack spacing="24px" w="full" display="flex" alignItems="center">
			<SimpleGrid columns={[1, 2, 3]} spacing={10}>
				{status === 'loading' ? (
					'Loading...'
				) : status === 'error' ? (
					<Text color="tomato">Error loading data </Text>
				) : (
					<>
						{usersList.map((user: IUser) => (
							<UsersListItem key={user.id} user={user} />
						))}

						<Box>{isFetching ? 'Background Updating...' : ' '}</Box>
					</>
				)}
			</SimpleGrid>
		</Stack>
	);
}
