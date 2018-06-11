import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

//Class base compoenent
export class EditExpensePage extends React.Component{
    onSubmit = (updatedExpense) => {
        this.props.editExpense(this.props.expense.id, updatedExpense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    };
};

//Stateles Functional Component:
// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={ (updatedExpense) => {
//                     props.dispatch(editExpense(props.expense.id, updatedExpense));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={
//                 (e) => {
//                     props.dispatch(removeExpense({ id: props.expense.id }));
//                     props.history.push('/');
//                 }
//             }>Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
