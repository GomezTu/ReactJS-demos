//React+Redux Stuff
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
//Actions
import * as countriesActions from '../../store/actions/countries-action-creators';
import { GetVisibleCountries, GetFlagsFromCountries } from '../../helpers/helper-functions';
import * as filterActions from '../../store/actions/filter-action-creators';
//Components (Filter + Countries List + Country Detail)
import CountryList from '../components/countries-list/countries-list'
import CountryDetail from '../components/country-detail/country-detail'
import Filter from '../components/filter/filter'
import Pagination from '../components/pagination/pager'
import './countries-container.css';

export class CountriesContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    onChangePage = (countries) => {
        this.setState({
            countries
        });
    }

    componentDidMount(){
        if ((this.props.countries && this.props.countries.length === 0) || !this.props.countries){
            this.props.actions.GetCountries();
        }
    }

    render(){
        return(
            <Col xs="12">
                <Row className="filter-container">
                    <Filter 
                        onChange={this.props.actions.FilterChangeAction}
                        onClear={this.props.actions.SelectCountry}
                    />
                </Row>
                <Row>
                    <Col>
                        <CountryList 
                            countries={this.state.countries}
                            onCountryClick={this.props.actions.SelectCountry}
                        />
                    </Col>
                </Row>
                <Pagination 
                            items={this.props.countries}
                            onChangePage={this.onChangePage}
                            itemsPerPage={7} />
                <Row>
                    <CountryDetail
                        country={this.props.selectedCountry}
                        onSave={this.props.actions.UpdateCountry}
                        onCreate={this.props.actions.SaveCountry}
                        onClose={this.props.actions.SelectCountry}
                        flags={this.props.flags}
                    />
                </Row>
            </Col>
        );
    }
}

export function mapStateToProps({ greetings }) {
    return {
        countries: GetVisibleCountries(greetings.countries, greetings.filter.name, greetings.filter.code, greetings.filter.region),
        selectedCountry: greetings.selectedCountry,
        filter: greetings.filter,
        flags: GetFlagsFromCountries(greetings.countries)
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countriesActions,
            ...filterActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);

