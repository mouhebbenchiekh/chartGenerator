import { Component, useState } from "react";
import React from "react"

import Grid from '@material-ui/core/Grid';
import { Button, Container, GridList, Input } from "@material-ui/core";
import axios from "axios";






const styles ={
    container :{
        padding:"20px",
        margin:"50px",
        backgroundColor:"white",
        border:"1px solid black"
    },
    GridItem:{
        justifyContent:"center",
        alignContent:"center"
    }
    ,
    input :{   
        width:"50%",
        padding:"0px",
        border: "1px solid black"

    }
}
const GenerationBar  =()=>{
    
    const [color,setColor]=useState("");

    const [colors,setColors]=useState([])

    const generatePalette =(colorTab:string)=>{
        var rgb=[
            parseInt(colorTab.substr(1,2), 16),
            parseInt(colorTab.substr(3,2), 16),
            parseInt(colorTab.substr(5,2), 16)
            
        ]

       const  data={
            model:"default",
            input:[rgb,"N","N","N","N"]
        }

        axios.post("http://colormind.io/api/",JSON.stringify(data)).then(
            result=>{
                console.log(result)
                return result.data
            }
        ).then(res=>{
            setColors(res.result)
            console.log(res)
            console.log(colors)}
        ).catch(err=>console.log(err))
    }

    return(
        
            <Grid container style={styles.container}>
                <Grid item xs={6} style={styles.GridItem}  justifyContent="center"
  alignItems="center">
                    <h1>Color</h1>
                    
                    <br/>
                    <label htmlFor="color" > chooose a color</label>
                    <input type="color" name="color" value={color} onChange={(e)=>{
                        setColor(e.target.value)
                    }} id="color" style={styles.input}/>
                   
                    </Grid>
                 <Grid  item xs={6} style={styles.GridItem}  justifyContent="center"
  alignItems="center">
                        <Button variant="contained" color="primary"onClick={()=>{
                                generatePalette(color)
                            
                            }}> Generate</Button>
                     </Grid>
                      {colors.length>1?(       
                    <Grid item container xs={12} justifyContent="center" alignItems="center" direction="row">
                        
                      {colors.map((array,key)=>{
                          let rgb:string="rgb("+array[0]+","+array[1]+","+array[2]+")"  
                            return(
                                <Grid item style={{margin:"50px"}}>
                                    <div style={{backgroundColor:rgb,width:"100px",height:"100px"}} >
                                        <h1> color {key} </h1>
                                    </div>
                                    </Grid>
                            )
                      })}
                    </Grid> ):null}

            </Grid>
        
    )
}

export default GenerationBar;