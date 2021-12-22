import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 2rem;
	margin-top: -4.5rem;

	div {
		background-color: var(--shape);
		padding: 1.5rem 2rem;
		border-radius: 0.25rem;
		color: var(--text-title);

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		strong {
			display: block;
			margin-top: 1rem;
			font-size: 2rem;
			font-weight: noraml;
		}

		&.highlight-background {
			background-color: var(--green);
			color: var(--shape);
		}
	}
`;
