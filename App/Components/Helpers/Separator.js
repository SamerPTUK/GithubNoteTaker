


var React = require('react-native');

var {
	View,
	StyleSheet
 } = React;

var styles = StyleSheet.create({
	separator: {
	   flex: 1,
	   height: 1,
	   marginLeft: 15,
	   backgroundColor: '#E4E4E4'
	},
});

class Separator extends React.Component {
  render() {
    return (
      <View style={styles.separator} />
    )
  }
};

module.exports = Separator;




















