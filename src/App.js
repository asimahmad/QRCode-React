import QRCode from 'qrcode'
import React, {useState, useRef} from 'react'
import QrReader from 'react-qr-reader'
import {Container, Grid, Card, CardContent, makeStyles, TextField, Button} from '@material-ui/core'
function App() {
  const classes = useStyle();

  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [scanResultFile, setScanResultFile] = useState('');
  const qrRef = useRef(null)

const generateQRCode = async () =>{
  try {
    const response = await QRCode.toDataURL(text)
    setImageUrl(response)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const handleErrorFile = (error) => {
  console.error(error)
}

const handleScanFile = (result) =>{
  if(result){
    setScanResultFile(result)
  }
}

const onScanFile = () =>{
  qrRef.current.openImageDialog();
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
                {imageUrl ?(<a href={imageUrl} download><img src={imageUrl} alt='img'/></a>) : null}
             </Grid>
             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
               <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile} >Scan QR code</Button>
               <QrReader ref={qrRef} delay={300} style={{width: '100%'}} onError={handleErrorFile} onScan={handleScanFile} legacyMode />
               <h3>Scanned code: {scanResultFile}</h3>
             </Grid>
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
