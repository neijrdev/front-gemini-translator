import { ReactComponentTest } from '@/types';

//Helpers types
export type ExpectToHaveProp = (element: ReactComponentTest, propName: string, propValue: unknown) => void;
export type ExpectToHaveText = (element: ReactComponentTest, text: string) => void;
export type FireEvent = (element: ReactComponentTest) => {
	click: () => void;
};

export type MockPickerFile = { input: ReactComponentTest; mockInput: File };

export type Helpers = {
	expectToHaveProp: ExpectToHaveProp;
	expectToHaveText: ExpectToHaveText;
	fireEvent: FireEvent;
	mockPickerFile: (props: MockPickerFile) => void;
};
