/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Card from '@material-ui/core/Card';
import moment from 'moment'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import { useCardStyles } from './style';

const ArticleCard = ({ article }) => {
  const classes = useCardStyles();


  const router = useRouter();


  const handleViewArticle = () => {
    router.push(`/articles/${article.id}/view`)
  }

  const handleEditArticle = () => {
    router.push(`/articles/${article.id}/edit`)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleViewArticle}>
        <CardMedia className={classes.media} image={article.image} title={article.title} />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(article.date).format("DD MMM YYYY HH:mm")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" startIcon={<VisibilityIcon />} onClick={handleViewArticle}>
          view
        </Button>
        <Button size="small" color="primary" startIcon={<CreateIcon />} onClick={handleEditArticle}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
}
export default ArticleCard;
