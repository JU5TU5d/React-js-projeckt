import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const logo = require('../assets/icons/home/home-black-24dp/calendar.svg');
const iconLogout = require('../assets/icons/home/home-black-24dp/home-24px.svg');

const UserLog = ({ user, onLogOut }) => (
  <div className={styles.headerContainer}>
    <div className={styles.headerLogo}>
      <Link to="/home" className={styles.headerLogoLink}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.headerText}>
          <p>Book Read</p>
        </div>
      </Link>
    </div>
    <div className={styles.headerName}>
      <p className={styles.headerUser}>{user}</p>
      <button type="button" className={styles.headerButton} onClick={onLogOut}>
        <img src={iconLogout} alt="logo" className={styles.logout} />
        <span className={styles.logoutText}>Logout</span>
      </button>
    </div>
  </div>
);

UserLog.defaultProps = {
  user: '',
};

UserLog.propTypes = {
  user: PropTypes.string,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: nameSelector.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLog);
