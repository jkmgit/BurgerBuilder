import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerController from '../../components/BurgerController/BurgerController'; 
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.5,
    cheese: 0.7,
    meat: 1
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totPrice: 4,
            orderingState: false
        }
    }

    changeIngrPositive = (type) => {
        const copyState = {...this.state.ingredients};
        copyState[type]++;
        let newPrice = this.state.totPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: copyState,
            totPrice: newPrice
        });
    }

    changeIngrNegative = (type) => {
        const copyState = {...this.state.ingredients};
        if(copyState[type]>=1) {
            copyState[type]--;
            let newPrice = this.state.totPrice - INGREDIENT_PRICES[type];
            this.setState({
                ingredients: copyState,
                totPrice: newPrice 
            });
        }    
        
    }

    changeOrderingStateToTrue = () => {
        console.log("ordering state changed!!!");
        this.setState({orderingState : true});
    }

    changeOrderingStateToFalse = () => {
        this.setState({orderingState : false});
    }

    doCheckout = () => {
        alert("Your order is going to be checkedout!!");
    }

    render() {

        let disableLessButton = {...this.state.ingredients};
        for (var key in disableLessButton) 
            disableLessButton[key] = disableLessButton[key]<=0;    

        return(
            <div>
                <Modal show={this.state.orderingState} changeOrderStatus={this.changeOrderingStateToFalse}>
                    <OrderSummary listOfIngredient={this.state.ingredients} 
                                  totalOrderPrice={this.state.totPrice}
                                  changeOrderStatus={this.changeOrderingStateToFalse}
                                  checkout={this.doCheckout}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerController changeIngrPositive={this.changeIngrPositive} 
                                  changeIngrNegative={this.changeIngrNegative}
                                  disableLess={disableLessButton}
                                  totalPrice={this.state.totPrice}
                                  changeOrderStatus={this.changeOrderingStateToTrue}
                                  />
            </div>
        )
    }
}

export default BurgerBuilder;