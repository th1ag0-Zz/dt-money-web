import { useState } from 'react';
import Modal from 'react-modal';

import { GLobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseModalewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<TransactionsProvider>
			<GLobalStyle />

			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseModalewTransactionModal}
			/>
		</TransactionsProvider>
	);
}
