import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

interface TransactionProviderProps {
	children: ReactNode;
}

export interface Transaction {
	id: number;
	title: string;
	type: 'deposit' | 'withdraw';
	category: string;
	amount: number;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextProps {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextProps>(
	{} as TransactionContextProps,
);

export const TransactionsProvider: React.FC<TransactionProviderProps> = ({
	children,
}) => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	// const [isLoading, setIsLoading] = useState(true);

	async function createTransaction(transaction: TransactionInput) {
		await api.post('/transactions', transaction);
	}

	useEffect(() => {
		api.get('transactions').then(response => {
			setTransactions(response.data.transactions);
			// setIsLoading(false);
		});
	}, []);

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
};
