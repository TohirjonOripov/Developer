
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';




 function App() {


  const [photo,setPhoto] = React.useState({});

   let openPhoto = async function () {
     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
     if (permissionResult.granted) {
       let pickerResult = await ImagePicker.launchImageLibraryAsync();
       if (pickerResult) {
         setPhoto(pickerResult);
       }
     }
     
   }
 async function sharePhoto(){
         let isAvailable = await Sharing.isAvailableAsync()
         if (isAvailable) {
           console.log(photo.uri);
           await Sharing.shareAsync(photo.uri);
         }
   }
  return (
    
      <View style={styles.container}>
      
        <TouchableOpacity onPress={openPhoto} style={{
          width:100,
          height:50,
          backgroundColor:'blue',
          justifyContent: 'center',
          alignItems:'center',
          borderRadius:10
          
        }}>
        <Text style={{
          color:"white"
        }}>File Yuklash</Text>
        </TouchableOpacity>
        
    
        <View>
       { photo && (
      <TouchableOpacity onPress={e => sharePhoto()}>
           <Image source={{ uri: photo.uri }} style={{width:359, height:440}}/>
      </TouchableOpacity>
      )}
    </View>    
  
      </View>
    



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;