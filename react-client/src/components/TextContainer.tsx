import { Stack, Text } from '@chakra-ui/react';

function createMarkup(text: string) {
	return { __html: text };
}

interface ITextContainer {
	title: string;
	value: string;
	htmlValue?: string;
}
export default function TextContainer({
	title,
	value,
	htmlValue,
}: ITextContainer) {
	return (
		// <Stack direction={'row'} justify={'center'} spacing={6}>
		<Stack spacing={0} align={'center'}>
			<Text fontSize={'sm'} color={'gray.500'}>
				{title}
			</Text>
			{htmlValue && <p dangerouslySetInnerHTML={createMarkup(htmlValue)}></p>}
			{!htmlValue && <Text fontWeight={600}>{value}</Text>}
		</Stack>
		// </Stack>
	);
}
