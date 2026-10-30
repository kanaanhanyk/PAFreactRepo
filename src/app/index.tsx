import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import '../../global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={{ flex: 1}}></View>

      {/* Layer 1: logo against the entire screen */}
      <ImageBackground
        source={require('../assets/paf.png')}
        resizeMode="contain"
        style={{ flex: 1, backgroundColor: '#110A1F' }}
        accessibilityLabel="Ping Ä Freelancer"
      >
        {/* Layer 2: safe-area content superimposed on top */}
        <SafeAreaView className="flex-1">
          <View className="flex-1 justify-between px-6 pb-6">
            {/* Top Tagline */}
            <Text className="text-center text-[28px] leading-10 text-white">
              ...where clients at home{'\n'}
              meet freelancers <Text className="font-bold text-[#9B2FD6]">nearby.</Text>
            </Text>

            {/* Bottom Actions */}
            <View className="w-full items-center">


              <TouchableOpacity
                className="mb-4 w-full items-center rounded-2xl bg-white py-4"
                  onPress={() => router.push('/domains')}>
                <Text className="text-lg font-bold text-black">I&apos;m a client</Text>
              </TouchableOpacity>

              <TouchableOpacity className="mb-5 w-full items-center rounded-2xl border border-[#9B2FD6]/60 bg-[#9B2FD6]/10 py-4">
                <Text className="text-lg font-bold text-[#9B2FD6]">I&apos;m a freelancer</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text className="text-sm text-white underline">I already have an account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
