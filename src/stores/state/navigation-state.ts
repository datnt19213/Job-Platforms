import { create } from 'zustand';

type NavigationState = {
	showSheet: boolean;
	setShowSheet: (showSheet: boolean) => void;
};

export const useNavigationState = create<NavigationState>()((set) => ({
	showSheet: false,
	setShowSheet: (showSheet) => set({showSheet}),
}));
