import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';

import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState('');
	const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		if (!title || !amount || !category) {
			return alert('Preencha todos os campos');
		}

		const data = {
			title,
			amount,
			category,
			type,
		};

		await createTransaction(data);

		onRequestClose();

		setTitle('');
		setAmount(0);
		setCategory('');
		setType('deposit');
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button
				type='button'
				onClick={onRequestClose}
				className='react-modal-close'
			>
				<img src={closeSvg} alt='Fechar modal' />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input
					value={title}
					onChange={event => setTitle(event.target.value)}
					placeholder='Nome'
				/>

				<input
					type='number'
					value={amount}
					onChange={event => setAmount(Number(event.target.value))}
					placeholder='Valor'
				/>

				<TransactionTypeContainer>
					<RadioBox
						type='button'
						isActive={type === 'deposit'}
						activeColor='green'
						onClick={() => setType('deposit')}
					>
						<img src={incomeSvg} alt='entrada' />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type='button'
						isActive={type === 'withdraw'}
						activeColor='red'
						onClick={() => setType('withdraw')}
					>
						<img src={outcomeSvg} alt='saida' />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					value={category}
					onChange={event => setCategory(event.target.value)}
					placeholder='Categoria'
				/>

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
