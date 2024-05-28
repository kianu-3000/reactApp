import Button from '../common/button';

const Header = () => {
	
	return (
		<div className="header_container"> 

			<div>
				<span className="title text">
					Cashier
				</span>
			</div>
			

			<nav>
				<section> <span>Home</span> </section>
				<section> <span>Inventory</span> </section>
				<section> <span>Profile</span> </section>
			</nav>

		</div>
	)

}

export default Header;