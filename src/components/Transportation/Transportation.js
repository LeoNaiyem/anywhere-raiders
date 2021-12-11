import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Transportation = (props) => {
    const {name, photo} = props.transport;
    return (
        <>
            <Link to= {`/destination/${name}`} >
                    <Card sx={{ maxWidth: 345, padding: 5, marginBottom: 5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photo}
                                alt="train"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
        </>
    );
};

export default Transportation;