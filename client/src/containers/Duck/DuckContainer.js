import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Duck } from '../../components'
const { func, object, bool, number } = PropTypes
import * as usersLikesActions from '../../redux/modules/usersLikes'

class DuckContainer extends Component {
  goToProfile = this.goToProfile.bind(this)
  handleClick = this.handleClick.bind(this)

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }
  handleClick (e) {
    e.preventDefault()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  }
  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

DuckContainer.propTypes = {
  duck: object.isRequired,
  handleClick: func,
  hideLikeCount: bool.isRequired,
  hideReplyBtn: bool.isRequired,
  isLiked: bool.isRequired,
  numberOfLikes: number,
  addAndHandleLike: func.isRequired,
  handleDeleteLike: func.isRequired,
}

DuckContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckContainer)
