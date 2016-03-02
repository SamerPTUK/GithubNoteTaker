


var React = require('react-native');

var {
	View,
	Text,
	Image,
	StyleSheet
 } = React;

var styles = StyleSheet.create({
	container: {
	   paddingBottom: 10,
	   backgroundColor: '#48BBEC'
	},
	name:
	{
	   fontSize: 21,
	   maginTop: 10,
	   maginBottom: 5,
	   color: 'white',
	   alignSelf: 'center'
	},
	handle:
	{
	   alignSelf: 'center',	
	   fontSize: 16,
	   color: 'white'
	},
	image:
	{
	   height: 125,
	   width: 125,
	   borderRadius: 65,
	   marginTop: 10,
	   alignSelf: 'center'
	},
});

class Badge extends React.Component {
  render() {
    return (
	<View style={styles.container}>
	    <Image style={styles.image} source={{uri: this.props.userinfo.avatar_url}} />
	    <Text style={styles.name}> {this.props.userInfo.name} </Text>
	    <Text style={styles.handle}> {this.props.userInfo.login} </Text>
	</View>
    )
  }
};

Badge.propTypes = {
   userInfo: React.PropTypes.object.isRequired
};

module.exports = Badge;




















