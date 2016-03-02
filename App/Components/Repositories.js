


var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./Helpers/Separator');
var Web_View = require('./Helpers/WebView');

var {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight
 } = React;

var styles = StyleSheet.create({
	container: {
	   flex: 1,
	},
	rowContainer:
	{
	   flexDirection:'column',
	   flex: 1,
	   padding: 10
	},
	name:
	{
	   paddingBottom: 5,
	   fontSize: 18,
	   color: '#48BBEC'
	},
	stars:
	{
	   paddingBottom: 5,
	   fontSize: 14,
	   color: '#48BBEC'
	},
	description:
	{
	   fontSize: 14,
	   paddingBottom: 5
	},
});

class Repositories extends React.Component {

  openPage(url) {
     this.props.navigator.push({
	component: Web_View,
	title: 'Web View',
	passProps: {url}
     });
  }

  render() {
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
	var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
    return(
      <View key={index}>
	<View style={styles.rowContainer}>
	  <TouchableHighlight
	    onPress={this.openPage.bind(this, repos[index].html_url)}
	    underlayColor='transparent'>
	   <Text style={styles.name}>{repos[index].name}</Text>
	  </TouchableHighlight>
	  <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
	  {desc}
	</View>
	<Separator />
      </View>
    )
   }); // end list

// line : 73
    return (
      <ScrollView style={styles.container}>
	<Badge userInfo={this.props.userInfo} />
	{list}
      </ScrollView>
    )
  }
};

Repositories.propType = {
  userInfo: React.PropTypes.object.isRequired, 
  repos: React.Proptypes.array.isReqired 
};

module.exports = Repositories;




















