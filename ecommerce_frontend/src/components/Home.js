import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "500px" }} src='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-ca/S001751158/NPIB-20835-NA-Event-TShirts-PDP-Hero-002' />
                    <Carousel.Caption>
                    <a href='/products' className="btn btn-primary" type="submit">
              Shop Now
            </a>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "500px" }} src='https://ichef.bbci.co.uk/news/741/cpsprodpb/dfb8/live/525d02a0-3ed8-11ef-bc90-15318ac50ac3.png' />
                    <Carousel.Caption>
                    <a href='/products' className="btn btn-primary" type="submit">
                    Shop Now
            </a>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "500px" }} src='https://a.storyblok.com/f/165154/1280x720/0d45aa1c3e/2_eight-top-t-shirt-design-tips.jpg/m/' />
                    <Carousel.Caption>
                    <a href='/products'  className="btn btn-primary" type="submit">
                    Shop Now
            </a>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section style={{marginTop:"70px",textAlign:"center"}}>
                <h1>NEW ARRIVALS</h1>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-around"}}>
        
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtRavHul5UPMtCcL5qLC19lIQOEG1QHU8Jw&s"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Nike
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"40%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_FNSwOfoCg5HwCpoZkR8ley1Df4eWZORUg&s"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
Puma                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"40%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://img.sonofatailor.com/images/customizer/product/White_O_Crew_Regular_NoPocket.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Adidas
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"35%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    
                </div>

            </section>
            <section style={{marginTop:"70px",textAlign:"center"}}>
                <h1>BEST SELLERS</h1>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-around"}}>
        
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtRavHul5UPMtCcL5qLC19lIQOEG1QHU8Jw&s"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Nike
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"40%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_FNSwOfoCg5HwCpoZkR8ley1Df4eWZORUg&s"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
Puma                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"40%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image="https://img.sonofatailor.com/images/customizer/product/White_O_Crew_Regular_NoPocket.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Adidas
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign:"center", marginLeft:"35%"}}>
                        <Typography variant="body2" sx={{ color: 'black', textAlign:"center" }}>
                                <span>Price: 100DT</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    
                </div>

            </section>
            <section style={{padding:"80px",display:"flex",justifyContent:'space-around',width:"100%"}}>
                <div style={{width:"40%"}}>
                    <img style={{width:"100%",height:'100%',borderRadius:"25px"}} src='https://as1.ftcdn.net/v2/jpg/05/25/30/00/1000_F_525300082_S23Zes3WBvlS44yLqcOwsqay2qgaJy9q.jpg'/>
                </div>
                <div style={{width:"40%"}}>
                    <img style={{width:'100%',height:'100%',borderRadius:"25px"}} src='https://images.all-free-download.com/images/thumbjpg/ecommerce_website_banner_template_customers_sketch_flat_design_6920122.jpg'/>
                </div>
            </section>
        
        </div>
    )
}

export default Home