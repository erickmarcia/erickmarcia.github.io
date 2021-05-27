import all from './posts/*.md';
// import data from './_posts.json'
let posts = all

// export default all
//   .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
//   .sort((a, b) => new Date(b.date) - new Date(a.date));


  posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});
export default posts;