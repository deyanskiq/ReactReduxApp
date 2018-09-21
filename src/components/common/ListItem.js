import React, { Component } from 'react';
import {
   Text,
   TouchableWithoutFeedback,
   View,
   UIManager,
   LayoutAnimation,
   Platform
   } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '.';
import * as actions from '../../actions';

class ListItem extends Component {

  //this lifecycle method is about to be called whenever the component is about to be rerendered
  componentWillUpdate() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
      LayoutAnimation.spring();
    }
  }

  renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library.item;


    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
        <View>
        <CardSection>
          <Text style={titleStyle}>
            {title}
          </Text>
        </CardSection>
        {this.renderDescription()}
       </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//ownProps is exactly equal as 'this.props' in the component
const mapsStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

//connect will call 'dispatch'
export default connect(mapsStateToProps, actions)(ListItem);
