import React, {
  Component
} from 'react';
import {
  View, StyleSheet, ScrollView, Text, TextInput
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../Const';

//components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  Button
} from 'react-native-elements';
import FormInputField from '../components/forms/FormInputField';
import {
  Actions
} from 'react-native-router-flux';

export default class AddressForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Address'>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[
                styles.card, styles.header
              ]}>
              <Text style={[
                  Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
                ]}>
                填寫地址 Enter your Address
              </Text>
            </View>
            <View style={[Styles.Card, styles.card]}>
              <FormInputField
                placeholder='Name'/>
              <FormInputField
                placeholder='Email'
                iconRight='email'/>
              <FormInputField
                placeholder='Password'
                secureTextEntry
                iconRight='lock'/>
              <FormInputField
                placeholder='Confirm Password'
                secureTextEntry
                iconRight='lock'/>
            </View>
            <Button
              icon={{
                name: 'arrow-forward',
                size: Sizes.Text
              }}
              iconRight
              title='保存 Save'
              onPress={Actions.main}
              backgroundColor={Colors.PositiveButton}
              textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
              buttonStyle={[styles.field, styles.fieldSpacing]} />
          </ScrollView>
        </ContentCoverSlider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
  },

  header: {
    marginTop: 125
  },

  error: {
    marginTop: Sizes.InnerFrame,
    marginBottom: 5,
    color: Colors.NegativeButton
  },

  field: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },

  fieldSpacing: {
    marginTop: 0
  },

  terms: {
    margin: Sizes.InnerFrame,
    color: Colors.SubduedText
  }
});
