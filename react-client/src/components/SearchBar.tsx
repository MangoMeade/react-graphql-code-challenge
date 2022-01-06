import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
interface ISearchBar {
	filteredSize: number;
	size: number;
	onChange: (str: string) => void;
}
export default function SearchBar({
	filteredSize,
	size,
	onChange,
}: ISearchBar) {
	const [searchedText, setSearchedText] = useState('');
	const handleSearchedText = (ev: ChangeEvent<HTMLInputElement>): void => {
		setSearchedText(ev.target.value);
		onChange(ev.target.value);
	};

	return (
		<Box w="50%">
			<InputGroup borderColor="#E0E1E7">
				<InputLeftElement
					pointerEvents="none"
					children={<BsSearch color="gray.800" />}
				/>
				<Input
					type="text"
					size="md"
					name="searchedText"
					placeholder="Search Users..."
					value={searchedText}
					onChange={handleSearchedText}
				/>
			</InputGroup>
			<Flex align="center" justify="end">
				Displaying {filteredSize} of {size} images
			</Flex>
		</Box>
	);
}
