
 function ScoreCount(pc, human, pcScore , UserScore , name) {
	let Scores = { pc: pcScore, human: UserScore, comment: '' };

	if (
		(pc === 'Paper' && human === 'Rock') ||
		(pc === 'Scissor' && human === 'Paper') ||
		(pc === 'Rock' && human === 'Scissor')
	) {
		Scores.pc += 1;
		Scores.comment = 'PC Wins !';
	} else if (
		(pc === 'Rock' && human === 'Rock') ||
		(pc === 'Paper' && human === 'Paper') ||
		(pc === 'Scissor' && human === 'Scissor')
	) {
		Scores.comment = 'Draw';
	} else if (
		(pc === 'Rock' && human === 'Paper') ||
		(pc === 'Paper' && human === 'Scissor') ||
		(pc === 'Scissor' && human === 'Rock')
	) {
		Scores.human += 1;
		Scores.comment = `${name} wins !`;
	}
	return Scores;
}


export default ScoreCount ;