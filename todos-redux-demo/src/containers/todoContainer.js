import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'reactstrap'

import * as Actions from '../store/actions/actions'
import { TodoForm } from '../components/todos/todoForm'
import { TodoList } from '../components/todos/todoList'
import { VisibilityFilter } from '../components/filters/visibilityFilter'

export class TodoContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return (
            <Row>
                <Col xs="6">
                    <TodoForm 
                        onSave={this.props.actions}/>
                </Col>
                <Col xs="6">
                    <TodoList 
                        todos={this.props.todos}
                        onTodoClick={this.props.actions}/>
                </Col>
                <Col xs="12">
                    <VisibilityFilter
                        onFilterClick={this.props.actions}/>
                </Col>  
            </Row>
        );
    }
}

export function mapStateToProps({ reducer }){
    return {
        todos: reducer.todos,
        visibilityFilter: reducer.visibilityFilter,
        isLoading: reducer.isLoading
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...Actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);