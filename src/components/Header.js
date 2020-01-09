import React from 'react';
import '../styles/header.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export default function Header() {
	return (
		<div className="application-header">
			<Navbar color="light" light expand="md">
				<NavLink className="home-link" tag={RRNavLink} to="/" exact>
					Home
				</NavLink>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={RRNavLink} to="/my-movies">
							My movies
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} to="/rankings">
							Rankings
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} to="/recommendations">
							Recommendations
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}
