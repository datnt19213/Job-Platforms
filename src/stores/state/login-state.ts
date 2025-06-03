import { create } from 'zustand';

type LoginRegisterState = {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
};

export const useLoginRegisterState = create<LoginRegisterState>()((set) => ({
	showModal: false,
	setShowModal: (showModal) => set({showModal}),
}));
