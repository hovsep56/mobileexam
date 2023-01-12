import { StatusBar } from "expo-status-bar";
import { Button, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { HexColor, rainbow} from "rainbow-colors-array-ts";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Rainbowprops{
  containerstyle:StyleProp<ViewStyle>,
  colorstyle:StyleProp<ViewStyle>,
  rainbowarray: HexColor[],
  amount:number,
}

interface Footerprops{
  rainbowtext:string,
  pastel:boolean
}

const Footer=({pastel,rainbowtext}:Footerprops)=>{
  const rainbowsize=rainbow(rainbowtext.length,"hex",pastel)
  return(
  <View style={styles.footer}>
    <Text style={styles.footertext}>{rainbowtext.split("").slice(0,10).map((e,i)=><Text key={e+i} style={{color:rainbowsize[i].hex}}>{e}</Text>)}</Text>
  </View>
  )
}
const Rainbow = ({amount,containerstyle,colorstyle,rainbowarray}:Rainbowprops) => {
  //use slice on an array to limit the amount of loops
  return(
    <View style={containerstyle}>
        {rainbowarray.slice(0,amount).map((e,i) => (
          <View key={i} style={[{backgroundColor: e.hex },colorstyle]}></View>
        ))}
      </View>
  )
};


export default function App() {
  const [raintext,setraintext]=useState<string|undefined>()
  const [pastel,setpastel]=useState<boolean>(false);
  const rainbowz1 = rainbow(10,"hex",pastel)
  const [order,setorder]=useState([...rainbowz1.map((e,i)=>i)])

  //asyncstorage begin
  useEffect(()=>{
    const storeRainbowconfig = async (text:string)=>{
        await AsyncStorage.setItem("raintext",text)
    };
    if (raintext !== undefined) {
        storeRainbowconfig(raintext);
    }
  },[raintext])

  useEffect(()=>{
    const getRainbowconfig = async()=>{
        const rainbowtext = await AsyncStorage.getItem("raintext");
        setraintext(rainbowtext??"Rainbow");
    };
    getRainbowconfig()
  },[])
//asyncstorage end

  const Randomize=()=>{
    let neworder = [...order].sort((e,b)=>0.5-Math.random())
    setorder(neworder);
  }

  const Displayrainbow=()=>{
    let rainbow = order.map((e)=>rainbowz1[e])

    return rainbow
  }

  if (raintext === undefined || pastel === undefined) {
    return (
      <View><Text>yo</Text></View>
    )
  }

  return (
    <View style={styles.container1}>
      <Rainbow amount={10} containerstyle={styles.rainbow1} colorstyle={{height:10}} rainbowarray={Displayrainbow()}  />
      <TextInput  style={styles.inputstyle} onSubmitEditing={(e)=>setraintext(e.nativeEvent.text)}></TextInput>
      <Button title="Set pastel" onPress={()=>setpastel(!pastel)}></Button>
      <Button title="Randomize" onPress={()=>Randomize()}></Button>
      <View style={styles.doublerainbow}>
      <Rainbow amount={6} containerstyle={styles.left} colorstyle={{width:10}} rainbowarray={Displayrainbow()} />
      <Rainbow amount={6} containerstyle={styles.right} colorstyle={{width:25,height:25}} rainbowarray={Displayrainbow()} />
      </View>
      <Footer pastel={pastel} rainbowtext={raintext}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  rainbow1: {
    
    flexDirection: "column",
  },
  footer:{
      justifyContent: "center",
      alignItems: "center",
      height: 100
  },
  footertext:{
    fontSize:30
  },
  doublerainbow: {
    flexDirection: "row",
    flex: 1,
  },
  left: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  right: {
    flex:1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputstyle:{
    borderColor: "black",
    borderWidth:2
  }
});
