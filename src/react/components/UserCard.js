import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {  
    maxWidth: 250,
  },
});

export default function UserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Profile Picture"
          height="140"
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          title="Profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bob Ross
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            About Me
          </Typography>
          Robert Norman Ross (October 29, 1942 – July 4, 1995) was an American painter, art instructor, and television host. He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, and also aired in Canada, Latin America, and Europe. Ross went from being a public television personality in the 1980s and 1990s to being an Internet celebrity in the 21st century, with his talent and kindness leading to major popularity with fans on YouTube, Twitch, and many other websites many years after his death.
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant= "contained" size="small" color="primary">
          Follow
        </Button>
        <Button size="small" color="primary">
          Extend Profile
        </Button>
      </CardActions>
    </Card>
  );
}

