import React, {
  Component,
} from 'react'
import {
  View,
  SectionList,
  Text,
} from 'react-native'
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
} from 'native-base'
import styles from './styles'

class ChannelsScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Channels</Text>,
  };

  componentDidMount() {
    const { getOpenChannels, getGroupChannels } = this.props

    getOpenChannels()
    getGroupChannels()
  }

  handleChannelPress = (channel) => {
    const { navigation, selectChannel } = this.props

    selectChannel(channel)
      .then(() => {
        navigation.navigate('Chat')
      })
  }


  render() {
    const { groupChannels, openChannels } = this.props

    return (
      <View>
        <SectionList
          sections={[
            { title: 'OPEN CHANNELS', data: openChannels },
            { title: 'GROUP CHANNELS', data: groupChannels },
          ]}
          renderSectionHeader={({ section: { title } }) => (
            <ListItem itemDivider>
              <Text>{title}</Text>
            </ListItem>
          )}
          keyExtractor={c => c.url}
          renderItem={({ item }) => (
            <ListItem avatar onPress={() => this.handleChannelPress(item)}>
              <Left>
                <Thumbnail source={{ uri: item.profileUrl }} style={styles.avatar} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
              </Body>
            </ListItem>
          )}
        />
      </View>
    )
  }
}

export default ChannelsScreen
