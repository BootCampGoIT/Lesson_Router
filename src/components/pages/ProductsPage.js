import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import css from './productsPage.module.css';

class ProductsPage extends Component {
    state = {
        from: "",
    }

    backToHandleChange = () => {
        this.props.history.push({
            pathname: this.props.location.state.from,
            state: { from: this.props.history.location.pathname, search: this.props.history.location.search },
        })
    }
    render() {
        console.log(this.props)
        return (
            <>
                <h1>ProductsPage</h1>
                <button onClick={this.backToHandleChange}>Back to</button>
                <ul className={css.navigationList}>
                    <li className={css.navigationListItem}>
                        <NavLink to="/products/categories"

                            activeClassName={css.activeLink}
                            className={css.navigLink}>Categories</NavLink>
                    </li>
                    <li className={css.navigationListItem}>
                        <NavLink to="/products/popular"

                            activeClassName={css.activeLink}
                            className={css.navigLink}>Popular</NavLink>
                    </li>

                </ul>
                <Switch>
                    <Route path="/products/categories" render={() => <span>categories</span>} />
                    <Route path="/products/popular" render={() => <span>popular</span>} />
                </Switch>



            </>
        );
    }
}

export default ProductsPage;