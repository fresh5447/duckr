import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as feedActionCreators from '../../redux/modules/feed'

import {Feed} from '../../components'

class FeedContainer extends Component {
  componentDidMount() {
    this.props.setAndHandleFeedListener()
  }
  render() {
    return(
      <Feed
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable}
        duckIds={this.props.duckIds}
        />
    )
  }
}

FeedContainer.propTypes = {
  newDucksAvailable: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  setAndHandleFeedListener: PropTypes.func.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
  duckIds: PropTypes.array.isRequired

}

const mapStateToProps = ({feed}) => {
  const {newDucksAvailable, error, isFetching, duckIds} = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
    duckIds
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(feedActionCreators, dispatch)
)(FeedContainer)
