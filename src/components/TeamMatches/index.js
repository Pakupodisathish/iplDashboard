// importing all required files and packages

import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

const teamColors = [
  {id: 'RCB', teamColor: 'rcb'},
  {id: 'KKR', teamColor: 'kkr'},
  {id: 'SRH', teamColor: 'srh'},
  {id: 'CSK', teamColor: 'csk'},
  {id: 'PBKS', teamColor: 'pbks'},
  {id: 'MI', teamColor: 'mi'},
  {id: 'RR', teamColor: 'rr'},
  {id: 'DC', teamColor: 'dc'},
]

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    teamColor: '',
  }

  componentDidMount() {
    this.getTeamMatchsData()
  }

  getTeamMatchsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamMatchedColor = teamColors.find(eachTeam => eachTeam.id === id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = formatData
    const formatLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const formatRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails: formatLatestMatchDetails,
      recentMatches: formatRecentMatches,
      isLoading: false,
      teamColor: teamMatchedColor.teamColor,
    })
  }

  render() {
    const {
      isLoading,
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      teamColor,
    } = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-details-bg-container ${teamColor}`}>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
