import { IUser } from '../types/userTypes';

export const addEnrichedName = (data: IUser[]): IUser[] =>
	data.map((elem: IUser) => {
		return { ...elem, enrichedName: elem.name };
	});

export const filterUsersList = (usersList: IUser[], searchText: string): IUser[] => {
	return usersList
		.filter(
			(obj: IUser) =>
				obj.name.toLowerCase().includes(searchText.toLowerCase()) ||
				obj.email.toLowerCase().includes(searchText.toLowerCase())
		)
		.map((obj) => {
			return {
				...obj,
				enrichedName: findMatchedTerm(obj.name, searchText),
			};
		});
};

export const findMatchedTerm = (text: string, searchText: string): string => {
	if (searchText === '') {
		return text;
	}
	return text.replaceAll(new RegExp(searchText, 'ig'), highlightMatchedTerm);
};

export const highlightMatchedTerm = (text: string): string => `<b style="color:tomato;">${text}</b>`;
