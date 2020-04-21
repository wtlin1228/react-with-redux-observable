import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pingActions } from 'core/modules/ping'

const Home = ({ ping, pingIt }) => {
  const { isPinging } = ping
  return (
    <div>
      <h1>is pinging: {isPinging ? 'true' : 'false'}</h1>
      <button
        onClick={() => {
          pingIt()
        }}
      >
        Start PING
      </button>
    </div>
  )
}

const mapStateToProps = ({ ping }) => ({ ping })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pingIt: pingActions.ping,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
