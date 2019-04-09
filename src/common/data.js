import sample from "./test.json";
import post from "./post.json";
import sampleUser from "./user.json";
import sampleExplore from "./explore.json";

const processUser = r => {
  return {
    followCount: r.edge_follow.count,
    followedByCount: r.edge_followed_by.count,
    timelineCount: r.edge_owner_to_timeline_media.count,
    full_name: r.full_name,
    biography: r.biography,
    is_verified: r.is_verified,
    is_private: r.is_private,
    pic: r.profile_pic_url,
    posts: r.edge_owner_to_timeline_media.edges
      .map(e => e.node)
      .map(i => processUserPost(i)),
    username: r.username,
    link: [r.external_url, r.external_url_linkshimmed]
  };
};

const processUserPost = r => {
  try {
    return {
      likeCount: r.edge_media_preview_like.count,
      commentCount: r.edge_media_to_comment.count,
      thumbnail_src: r.thumbnail_src,
      thumbnails: r.thumbnail_resources
    };
  } catch (e) {
    return {};
  }
};
const processExplore = r => {
  try {
    return r.data.user.edge_web_discover_media.edges
      .map(i => i.node)
      .map(i => ({
        dimensions: i.dimensions,
        thumbnail_src: i.thumbnail_src,
        likeCount: i.edge_liked_by.count,
        commentCount: i.edge_media_to_comment.count
      }));
  } catch (e) {
    return [];
  }
};

const Services = {
  get: () => new Promise(resolve => resolve(sample)),
  getUser: user =>
    new Promise(resolve => resolve(sampleUser))
      .then(res => res.graphql.user)
      .then(res => console.log(res) || processUser(res)),
  getExplore: () =>
    new Promise(resolve => resolve(sampleExplore)).then(res =>
      processExplore(res)
    )
};

export default Services;
