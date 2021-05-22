import QRCode from 'qrcode'
import React, {useState} from 'react'
import {Container, Grid, Card, CardContent, makeStyles, TextField, Button} from '@material-ui/core'
function App() {
  const classes = useStyle();

  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')

const generateQRCode = async () =>{
  try {
    const response = await QRCode.toDataURL(text)
    setImageUrl(response)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

  return (
     <Container className={classes.useStyle}>
       <Card>
       <h2 className={classes.title}>Generate, download and scan QR code with react js</h2>
         <CardContent>
           <Grid container spacing={2}>
             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
               <TextField label="Enter the text"onChange={(e) => setText(e.target.value)} />
               <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQRCode()}>Generate</Button>
                <br/>
                <br/>
                <br/>
                {imageUrl ?(<img src={imageUrl} alt='img'/>) : null}
             </Grid>
             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
           </Grid>
         </CardContent>
       </Card>
     </Container>
  );
}

const useStyle = makeStyles((theme) =>({
  container: {
    marginTop: 10
  },
  title:{
    display:'flex',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  btn:{
    marginTop: 10,
    marginBottom: 20
  }
}))
export default App;
