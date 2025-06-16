// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latest-matches-container">
      <div className="match-main-details-container">
        <div className="match-main-details">
          <p>{latestMatchDetails.competingTeam}</p>
          <p className="match-date">{latestMatchDetails.date}</p>
          <p className="match-venue">{latestMatchDetails.venue}</p>
          <p className="match-status">{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={`latest match ${latestMatchDetails.competingTeam}`}
          className="team-logo"
        />
      </div>
      <div className="match-other-details">
        <h1>First Innings</h1>
        <p>{latestMatchDetails.firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{latestMatchDetails.secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{latestMatchDetails.manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
