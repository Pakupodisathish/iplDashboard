import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeamLogo, competingTeam, matchStatus} = matchDetails
  const matchFinalStatus = matchStatus === 'Won' ? `won` : `lost`
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchFinalStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
