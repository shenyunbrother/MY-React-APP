import React from "react";
import Container from "@material-ui/core/Container";
import { Card, Col, Row } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Facebook from "./Facebook";
const r = require.context("../../images", false, /^\.\/.*\.jpg$/);
const images = r.keys().map(r);

const p = { width: 30, height: 20, weight: 60 };
// eslint-disable-next-line 
const pArr = Object.keys(p).map(key => ({
  key,
  value: p[key]
}));
const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

const tileData = [];
images.map((image, index) => {
  return tileData.push({
    img: image,
    title: index + 1,
    author: "author1",
    featured: true
  });
});
function Home() {
  const classes = useStyles();
  const { Meta } = Card;
  return (
    <Container style={{ padding: 0 }}>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={8}>
          <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
              {tileData.map(tile => (
                <GridListTile
                  key={tile.title}
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 2 : 1}
                >
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                      <IconButton
                        aria-label={`star ${tile.title}`}
                        className={classes.icon}
                      >
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Col>
        <Col span={8}>
        <Facebook/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;