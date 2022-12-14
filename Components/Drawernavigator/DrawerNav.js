import * as React from "react";
import {
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Ionicons } from "@expo/vector-icons";
import Stacknavigator from "../Stacknavigator/Stacknavigator";

// import { NavigationContainer } from "@react-navigation/native";
// import Drawepicture from "./CustomDrawer";
// import CustomDrawer from "./CustomDrawer";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack("Home")} title="Go back home" />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Home")} title="PROFILE" />
    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Home")} title="SETTING" />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Home")} title="ABOUT" />
    </View>
  );
}

function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Home")} title="News" />
    </View>
  );
}

// function PictureScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {/* <Button onPress={() => navigation.navigate('Home')} title="News" />
//        */}
//       <Image
//         source={{
//           uri: "https://1.bp.blogspot.com/-JoyRMqcFj7E/XrGLutzpI7I/AAAAAAAAo10/Opjq9MVPaKE69iok7O50z3XilZOYEaB2ACLcBGAsYHQ/s1600/2000a352812969.59eedeac2642a.gif",
//         }}
//         style={{ width: 400, height: 350, marginTop: 100 }}
//       />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    // <NavigationContainer>
    // <View>
    <Drawer.Navigator
      //   drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
              <ImageBackground
                source={{
                  uri: "data:image/png;base64,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",
                }}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 60,
                  // borderRadius: "50%",
                //   marginBottom: 20,
                  backgroundColor: "rgb(0,0,0)",
                //   borderBottomWidth: 2,
                  //   borderColor: Colors.secondary,
                }}
                imageStyle={{ opacity: 0.6 }}
              >
                {/* <Image
                  source={require("../Assets/vector.png")}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 2,
                    borderColor: Colors.white,
                  }}
                /> */}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    // color: Colors.white,
                  }}
                >
                  {/* {userDetail ? userDetail.name : "Not Available"} */}
                  {/* hi */}
                </Text>
                {/* <Text style={{ color: Colors.light }}>
                  {userDetail ? userDetail.email : "Not Available"}
                </Text> */}
              </ImageBackground>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            {/* <TouchableOpacity
              onPress={() => {
                console.log("hello")
              }}
              style={{
                position: "relative",
                right: 0,
                left: 0,
                bottom: 5,
                backgroundColor: "rgb(231,230,230)",
              }}
            >
              <Text
                style={{
                  backgroundColor: "rgba(162,160,160,0.29)",
                  width: "100%",
                  height: 40,
                  textAlign: "center",
                  paddingTop: 8,
                }}
              >
            
              </Text>
            </TouchableOpacity> */}
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Stacknavigator}

        options={() => ({
          drawerIcon: () => {
            return <Icon name={"home"} size={20} color={"grey"} />;
          },
          headerShown: false,
        })}
        // screenOptions={{
        //   icon: (
        //     <Icon
        //       name="check"
        //       style={{
        //         color: "black",
        //         fontSize: 70,
        //         paddingLeft: 40,
        //         fontWeight: "bold",
        //         marginTop: 40,
        //       }}
        //     />
        //   ),
        // }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={() => ({
          drawerIcon: () => {
            return (
              <Icon
                name={"bell"}
                size={20}
                color={"grey"}
              />
            );
          },
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          drawerIcon: () => {
            return <Icon name={"user"} size={20} color={"grey"} />;
          },
        })}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={() => ({
          drawerIcon: () => {
            return <Icon name={"gear"} size={20} color={"grey"} />;
          },
        })}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={() => ({
          drawerIcon: () => {
            return (
              <Icon name={"info"} size={20} color={"grey"} />
            );
          },
        })}
      />
      {/* <Drawer.Screen
        name="News"
        component={NewsScreen}
        options={() => ({
          drawerIcon: () => {
            return (
              <Icon name={"logo-hackernews"} size={20} color={"grey"} />
            );
          },
        })}
      /> */}
      {/* <Drawer.Screen name="Picture" component={PictureScreen} /> */}
    </Drawer.Navigator>
    // </View>
  );
}
