import { Container, Content } from './styles';

import logoSvg from '../../assets/logo.svg';

export function Header() {
	return (
		<Container>
			<Content>
				<img src={logoSvg} alt='' />

				<button>Nova transação</button>
			</Content>
		</Container>
	);
}
