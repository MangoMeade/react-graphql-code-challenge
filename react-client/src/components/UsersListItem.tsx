import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { IUser } from '../types/userTypes';
import TextContainer from './TextContainer';

interface IUserListIitem {
	user: IUser;
}
export default function UsersListItem({ user }: IUserListIitem) {
	return (
		<Box
			key={user.id}
			maxW={'270px'}
			w={'full'}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'2xl'}
			rounded={'md'}
			overflow={'hidden'}
			p={4}
			my={2}
		>
			<Stack direction={'column'} justify={'center'} spacing={2}>
				<TextContainer
					title="Name"
					value={user.name}
					htmlValue={user.enrichedName}
				/>
				<TextContainer title="Email" value={user.email} />
				<TextContainer title="Phone" value={user.phone} />
				<TextContainer title="Password" value={user.password} />
			</Stack>
		</Box>
	);
}
