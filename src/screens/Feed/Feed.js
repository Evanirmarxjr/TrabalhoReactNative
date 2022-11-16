import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import options from '../../assets/options.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';
import save from '../../assets/save.png';  

function Feed() {
  const posts = [
    {
      id: '1',
      author: 'imaginedragons',
      picture_url:
        'https://preview.redd.it/l7ls74ouife91.png?width=2000&format=png&auto=webp&s=a61a802e57f882eed1af3fa45caf8cc90885cea7',
      curtidas: 157.523,
      description: 'the album that changed our lives forever. Night Visions Tenth Anniversary Edition with two unreleased demos is OUT NOW.',
      hashtags: '#EvanirMarquesJunior',
      place: 'Serratec2022-2'
    },
    {
      id: '2',
      author: 'imaginedragons',
      picture_url:
        'https://akamai.sscdn.co/uploadfile/letras/albuns/3/c/5/0/01656673102.jpg',
      curtidas: 271.563,
      description: 'I’ve put off explaining this record as long as I could. What can be said about grief? There is no word or sentence to explain ...mais',
      hashtags: '#EvanirMarquesJunior',
      place: 'Serratec2022-2'
    },
    {
      id: '3',
      author: 'imaginedragons',
      picture_url:
        'https://www.summerfest.com/assets/images/carousels/2023/sf23-imaginedragons-website-mobilecarousel-1280x840-110322.jpg?1664895513',
      curtidas: 64.340,
      description: 'catch us at @summerfest on July 8th presale starts tomorrow, all tix on sale Friday!',
      hashtags: '#EvanirMarquesJunior',
      place: 'Serratec2022-2'
    }
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.curtidas}>{post.curtidas} curtidas</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  curtidas: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});

export default Feed;
