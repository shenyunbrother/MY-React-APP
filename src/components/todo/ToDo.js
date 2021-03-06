import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddTodo from "../../containers/AddTodo";
import VisibleTodoList from "../../containers/VisibleTodoList";
import UndoRedo from "../../containers/UndoRedo";
import FilterLink from "../../containers/FilterLink";
import { VisibilityFilters } from "../../actions/todo-actions";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 600,
    display: "flex"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  margin: {
    marginBottom: theme.spacing(1)
  },
  input: { backgroundColor: "white" }
}));

const post = {
  title: "Unsplash",
  description: "The internet’s source of freely usable images.",
  image: require("../../images/olen.jpg"),
  cor: "Powered by creators everywhere.",
  imgText: "Powered by creators everywhere.",
  linkText: "Trending:Flower, Wallpapers, Backgrounds, Happy, Love."
};

function MainFeaturedPost(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  // const { post } = props;
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={post.image} alt={post.imgText} />}
      <div className={classes.overlay} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.cor}
            </Typography>

              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <OutlinedInput
                  className={classes.input}
                  placeholder="Search free high-resolution photos"
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon fontSize="large" />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight"
                  }}
                  labelWidth={0}
                />
              </FormControl>

            <Typography variant="body2" color="inherit" paragraph>
              {post.linkText}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object
};

function ToDo() {
  return (
    <Container maxWidth="xl">
      <MainFeaturedPost />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddTodo />
          <VisibleTodoList />
          <span>Show: </span>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterLink>
          <UndoRedo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ToDo;
