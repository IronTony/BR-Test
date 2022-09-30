/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// @ts-nocheck
import React, {useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  // Text,
  // useColorScheme,
  View,
} from 'react-native';
import {Video} from 'expo-av';
// import {GLView} from 'expo-gl';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import * as Device from 'expo-device';

// function onContextCreate(gl) {
//   gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
//   gl.clearColor(0, 1, 1, 1);

//   // Create vertex shader (shape & position)
//   const vert = gl.createShader(gl.VERTEX_SHADER);
//   gl.shaderSource(
//     vert,
//     `
//     void main(void) {
//       gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
//       gl_PointSize = 150.0;
//     }
//   `,
//   );
//   gl.compileShader(vert);

//   // Create fragment shader (color)
//   const frag = gl.createShader(gl.FRAGMENT_SHADER);
//   gl.shaderSource(
//     frag,
//     `
//     void main(void) {
//       gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
//     }
//   `,
//   );
//   gl.compileShader(frag);

//   // Link together into a program
//   const program = gl.createProgram();
//   gl.attachShader(program, vert);
//   gl.attachShader(program, frag);
//   gl.linkProgram(program);
//   gl.useProgram(program);

//   gl.clear(gl.COLOR_BUFFER_BIT);
//   gl.drawArrays(gl.POINTS, 0, 1);

//   gl.flush();
//   gl.endFrameEXP();
// }

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={statusVal => setStatus(() => statusVal)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
      </View>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GLView
          style={{width: 300, height: 300}}
          onContextCreate={onContextCreate}
        />
      </View> */}

      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   sectionContainer: {
  //     marginTop: 32,
  //     paddingHorizontal: 24,
  //   },
  //   sectionTitle: {
  //     fontSize: 24,
  //     fontWeight: '600',
  //   },
  //   sectionDescription: {
  //     marginTop: 8,
  //     fontSize: 18,
  //     fontWeight: '400',
  //   },
  //   highlight: {
  //     fontWeight: '700',
  //   },
});

export default App;
