import sample from "./test.json";
import samplePost from "./post2.json";
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
      thumbnails: r.thumbnail_resources,
      code: r.shortcode
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
        commentCount: i.edge_media_to_comment.count,
        code: i.shortcode
      }));
  } catch (e) {
    return [];
  }
};

const processPost = p => {
  try {
    return ({
      display_url: p.display_url,
      dimensions: p.dimensions,
      linkCount: p.edge_media_preview_like.count,
      commentCount: p.edge_media_to_parent_comment.count,
      comments: p.edge_media_to_parent_comment.edges.map(i => i.node),
      owner: p.owner,
      caption: p.edge_media_to_caption.edges[0].node.text
    })
  }
  catch(e) {return {}}
}
/**
 * display_url,
    dimensions,
    edge_media_preview_comment,
    owner: author

 */
const processFeed = d => {
  try {
    // console.log(d, '~')
    return d.data.user.edge_web_feed_timeline.edges
            .map(i => i.node)
            .map(n => ({
              display_url: n.display_url,
              dimensions: n.dimensions,
              comments: n.edge_media_preview_comment.edges.map(c => c.node),
              owner: n.owner,
              caption: n.edge_media_to_caption.edges[0].node.text,
              commentCount: n.edge_media_preview_comment.count,
              id: n.id,
              code: n.shortcode
            }))
  }
  catch(e) {return []}
}

const Services = {
  get: () => new Promise(resolve => resolve(sample)).then(res => processFeed(res)),
  getUser: user =>
    new Promise(resolve => resolve(sampleUser))
      .then(res => res.graphql.user)
      .then(res => console.log(res) || processUser(res)),
  getExplore: () =>
    new Promise(resolve => resolve(sampleExplore)).then(res =>
      processExplore(res)
    ),
  getPost: pid => new Promise(resolve => setTimeout(() => resolve(samplePost), 500) )
                    .then(res => console.log('asdasdsd') || res.data.shortcode_media)
                    .then(data => processPost(data))
};

export default Services;
