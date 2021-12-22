import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--blue);
	height: 13.25rem;
`;

export const Content = styled.div`
	max-width: 1120px;

	margin: 0 auto;

	padding: 2rem 1rem 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		font-size: 1rem;
		color: #fff;
		background-color: var(--blue-light);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;
		transition: 0.3s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
