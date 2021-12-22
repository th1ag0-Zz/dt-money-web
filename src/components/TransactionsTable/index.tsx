import { Container } from './styles';

export function TransactionsTable() {
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

				<tbody>
					<tr>
						<td>Desenvolvimento de App</td>
						<td className='deposit'>R$ 4.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/11/2021</td>
					</tr>
					<tr>
						<td>Desenvolvimento de App</td>
						<td className='withdraw'>- R$ 4.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/11/2021</td>
					</tr>
					<tr>
						<td>Desenvolvimento de App</td>
						<td className='deposit'>R$ 4.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/11/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
