import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HeaderMainAdmin extends Component {
	render() {
		const { userInfo } = this.props
		return (
			<div className="main-block__header">
				<nav className="main-block__nav nav-main-admin">
					<ul className="nav-main-admin__list">
						<li className="nav-main-admin__item">
							<NavLink
								className="nav-main-admin__link"
								activeClassName="nav-main-admin__link_active"
								to="/admin-panel/all-movies"
							>
								Все фильмы
							</NavLink>
						</li>
						<li className="nav-main-admin__item">
							<NavLink
								className="nav-main-admin__link"
								activeClassName="nav-main-admin__link_active"
								to="/admin-panel/add-movie"
							>
								Добавить фильм
							</NavLink>
						</li>
						<li className="nav-main-admin__item">
							<NavLink
								className="nav-main-admin__link"
								activeClassName="nav-main-admin__link_active"
								to="/admin-panel/add-movie-info"
							>
								Добавить фильму доп. информацию
							</NavLink>
						</li>
						<li className="nav-main-admin__item">
							<NavLink
								className="nav-main-admin__link"
								activeClassName="nav-main-admin__link_active"
								to="/admin-panel/edit-movie"
							>
								Редактировать фильм
							</NavLink>
						</li>
					</ul>
				</nav>
				{userInfo && <div className="main-block__user-info user-info">
					<p className="user-info__first-name">{userInfo.firstName}</p>
					<p className="user-info__last-name">{userInfo.lastName}</p>
					<p className="user-info__email">{userInfo.email}</p>
				</div>}
			</div>
		)
	}
}
export default HeaderMainAdmin
