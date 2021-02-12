import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div``;

function GridPage({ img }) {
	return (
		<CharacterStyled>
			<a href="pages/grid.html">
				<img className="small-img" src={img} alt="" />
			</a>
		</CharacterStyled>
	);
}
export default GridPage;
