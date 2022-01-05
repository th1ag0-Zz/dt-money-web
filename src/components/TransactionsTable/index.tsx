import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

interface TransactionType {
	id: number;
	title: string;
	type: 'deposit' | 'withdraw';
	category: string;
	amount: number;
	createdAt: string;
}

export function TransactionsTable() {
	const [transactions, setTransactions] = useState<TransactionType[]>([]);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api.get('transactions').then(response => {
			setTransactions(response.data.transactions);
			setIsLoading(false);
		});
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				{!isLoading && (
					<tbody>
						{transactions.map(transaction => (
							<tr key={transaction.id}>
								<td>{transaction.title}</td>
								<td className={transaction.type}>{transaction.amount}</td>
								<td>{transaction.category}</td>
								<td>{transaction.createdAt}</td>
							</tr>
						))}
					</tbody>
				)}
			</table>
		</Container>
	);
}
