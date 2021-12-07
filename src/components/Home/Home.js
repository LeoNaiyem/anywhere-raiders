import React from 'react';
import './Home.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bike from '../../images/Frame.png'
import bus from '../../images/Frame-1.png'
import car from '../../images/Frame-2.png'
import train from '../../images/Group.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="card-area">
                <Link to='/destination'>
                    <Card sx={{ maxWidth: 345, padding: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={bike}
                                alt="train"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    BIKE
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to='/destination'>
                    <Card sx={{ maxWidth: 345, padding: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={car}
                                alt="BUS"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    CAR
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to='/destination'>
                    <Card sx={{ maxWidth: 345, padding: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={bus}
                                alt="train"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    BUS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to='/destination'>
                    <Card sx={{ maxWidth: 345, padding: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={train}
                                alt="Train"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    TRAIN
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>


            </div>
        </div>
    );
};

export default Home;