import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import readFetch from 'utils/readFetch';
import peso from 'utils/currency';
import { IList, IItem } from 'types/products';

const filterDisabled = ({ disable }: IItem) => Number(disable) === 0;
const trim = (a: string) => a.trim();
const sort = (a: string, b: string) => a.localeCompare(b);
const getTags = ({ tags = '' }: IItem): string[] =>
  tags.split(',').map(trim).sort(sort);

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default (props: any) => {
  const classes = useStyles();

  const result: IList = readFetch(props.sheets);

  console.warn(result);

  return (
    <Container maxWidth="lg" className="p-sm p-4">
      <Grid container spacing={4}>
        {result.filter(filterDisabled).map((item: IItem) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={item.image_1}
                title={item.image_1_title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography>{item.description}</Typography>
                <Typography>{peso(Number(item.price))}</Typography>
              </CardContent>
              <CardActions>
                {getTags(item).map((tag, i) => (
                  <Chip
                    key={i}
                    size="small"
                    label={tag}
                    variant="outlined"
                    className={classes.chip}
                  />
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
